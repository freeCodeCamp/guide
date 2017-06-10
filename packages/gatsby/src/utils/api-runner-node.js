const Promise = require(`bluebird`)
const glob = require(`glob`)
const _ = require(`lodash`)
const mapSeries = require(`async/mapSeries`)

const cache = require(`./cache`)

const apiList = require(`./api-node-docs`)

// Bind action creators per plugin so we can auto-add
// metadata to actions they create.
const boundPluginActionCreators = {}
const doubleBind = (boundActionCreators, api, plugin, { traceId }) => {
  if (boundPluginActionCreators[plugin.name + api + traceId]) {
    return boundPluginActionCreators[plugin.name + api + traceId]
  } else {
    const keys = Object.keys(boundActionCreators)
    const doubleBoundActionCreators = {}
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      const boundActionCreator = boundActionCreators[key]
      if (typeof boundActionCreator === `function`) {
        doubleBoundActionCreators[key] = (...args) =>
          boundActionCreator(...args, plugin, traceId)
      }
    }
    boundPluginActionCreators[
      plugin.name + api + traceId
    ] = doubleBoundActionCreators
    return doubleBoundActionCreators
  }
}

const runAPI = (plugin, api, args) => {
  let linkPrefix = ``
  const {
    store,
    loadNodeContent,
    getNodes,
    getNode,
    hasNodeChanged,
    getNodeAndSavePathDependency,
  } = require(`../redux`)
  const { boundActionCreators } = require(`../redux/actions`)

  const doubleBoundActionCreators = doubleBind(
    boundActionCreators,
    api,
    plugin,
    args
  )

  if (store.getState().program.prefixLinks) {
    linkPrefix = store.getState().config.linkPrefix
  }

  const gatsbyNode = require(`${plugin.resolve}/gatsby-node`)
  if (gatsbyNode[api]) {
    const apiCallArgs = [
      {
        ...args,
        linkPrefix,
        boundActionCreators: doubleBoundActionCreators,
        loadNodeContent,
        store,
        getNodes,
        getNode,
        hasNodeChanged,
        getNodeAndSavePathDependency,
        cache,
      },
      plugin.pluginOptions,
    ]

    // If the plugin is using a callback use that otherwise
    // expect a Promise to be returned.
    if (gatsbyNode[api].length === 3) {
      return Promise.fromCallback(callback =>
        gatsbyNode[api](...apiCallArgs, callback)
      )
    } else {
      const result = gatsbyNode[api](...apiCallArgs)
      return Promise.resolve(result)
    }
  }

  return null
}

let filteredPlugins
const hasAPIFile = plugin => glob.sync(`${plugin.resolve}/gatsby-node*`)[0]

let apisRunning = []
let waitingForCasacadeToFinish = []

module.exports = async (api, args = {}, pluginSource) =>
  new Promise(resolve => {
    // Check that the API is documented.
    if (!apiList[api]) {
      console.log(`api`, api, `is not yet documented`)
      process.exit()
    }

    const { store } = require(`../redux`)
    const plugins = store.getState().flattenedPlugins
    // Get the list of plugins that implement gatsby-node
    if (!filteredPlugins) {
      filteredPlugins = plugins.filter(plugin => hasAPIFile(plugin))
    }

    // Break infinite loops.
    // Sometimes a plugin will implement an API and call an
    // action which will trigger the same API being called.
    // "onCreatePage" is the only example right now.
    // In these cases, we should avoid calling the originating plugin
    // again.
    let noSourcePluginPlugins = filteredPlugins
    if (pluginSource) {
      noSourcePluginPlugins = filteredPlugins.filter(
        p => p.name !== pluginSource
      )
    }

    const apiRunInstance = {
      api,
      args,
      pluginSource,
      resolve,
      startTime: new Date().toJSON(),
      traceId: args.traceId,
    }

    if (args.waitForCascadingActions) {
      waitingForCasacadeToFinish.push(apiRunInstance)
    }

    apisRunning.push(apiRunInstance)

    // if (api !== `onCreatePage`) {
    // console.log(
    // api,
    // "apisRunning",
    // apisRunning.length,
    // _.uniq(apisRunning.map(a => a.traceId)),
    // _.uniq(apisRunning.map(a => a.api)),
    // _.uniq(
    // _.flatten(
    // apisRunning.map(a =>
    // noSourcePluginPlugins
    // .filter(plugin => {
    // const gatsbyNode = require(`${plugin.resolve}/gatsby-node`)
    // return gatsbyNode[a.api]
    // })
    // .map(plugin => plugin.name)
    // )
    // )
    // )
    // )
    // }

    mapSeries(
      noSourcePluginPlugins,
      (plugin, callback) => {
        Promise.resolve(runAPI(plugin, api, args)).asCallback(callback)
      },
      (err, results) => {
        if (err) {
          console.log(``)
          console.log(`A plugin returned an error`)
          console.log(``)
          console.log(err)
          process.exit(1)
        }
        // Remove runner instance
        apisRunning = apisRunning.filter(runner => runner !== apiRunInstance)

        // Filter empty results
        apiRunInstance.results = results.filter(result => !_.isEmpty(result))

        // Filter out empty responses and return if the
        // api caller isn't waiting for cascading actions to finish.
        if (!args.waitForCascadingActions) {
          resolve(apiRunInstance.results)
        }

        // Check if any of our waiters are done.
        waitingForCasacadeToFinish = waitingForCasacadeToFinish.filter(
          instance => {
            // If none of its trace IDs are running, it's done.
            if (!_.some(apisRunning, a => a.traceId === instance.traceId)) {
              instance.resolve(instance.results)
              return false
            } else {
              return true
            }
          }
        )
      }
    )
  })
