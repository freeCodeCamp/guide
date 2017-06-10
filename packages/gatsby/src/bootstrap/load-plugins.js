const _ = require(`lodash`)
const slash = require(`slash`)
const fs = require(`fs`)
const path = require(`path`)

const { store } = require(`../redux`)
const nodeAPIs = require(`../utils/api-node-docs`)

module.exports = async (config = {}) => {
  // Instantiate plugins.
  const plugins = []

  // Create fake little site with a plugin for testing this
  // w/ snapshots. Move plugin processing to its own module.
  // Also test adding to redux store.
  const processPlugin = plugin => {
    if (_.isString(plugin)) {
      const resolvedPath = slash(path.dirname(require.resolve(plugin)))
      const packageJSON = JSON.parse(
        fs.readFileSync(`${resolvedPath}/package.json`, `utf-8`)
      )
      return {
        resolve: resolvedPath,
        name: packageJSON.name,
        version: packageJSON.version,
        pluginOptions: {
          plugins: [],
        },
      }
    } else {
      // Plugins can have plugins.
      const subplugins = []
      if (plugin.options && plugin.options.plugins) {
        plugin.options.plugins.forEach(p => {
          subplugins.push(processPlugin(p))
        })

        plugin.options.plugins = subplugins
      }

      // Add some default values for tests as we don't actually
      // want to try to load anything during tests.
      let resolvedPath
      let packageJSON = { name: `TEST` }
      if (plugin.resolve !== `___TEST___`) {
        resolvedPath = slash(path.dirname(require.resolve(plugin.resolve)))
        packageJSON = JSON.parse(
          fs.readFileSync(`${resolvedPath}/package.json`, `utf-8`)
        )
      }
      return {
        resolve: resolvedPath,
        name: packageJSON.name,
        version: packageJSON.version,
        pluginOptions: _.merge({ plugins: [] }, plugin.options),
      }
    }
  }

  // Add internal plugins
  plugins.push(
    processPlugin(
      path.join(__dirname, `../internal-plugins/component-page-creator`)
    )
  )
  plugins.push(
    processPlugin(
      path.join(__dirname, `../internal-plugins/internal-data-bridge`)
    )
  )
  plugins.push(
    processPlugin(path.join(__dirname, `../internal-plugins/dev-404-page`))
  )
  plugins.push(
    processPlugin(path.join(__dirname, `../internal-plugins/query-runner`))
  )

  // Add plugins from the site config.
  if (config.plugins) {
    config.plugins.forEach(plugin => {
      plugins.push(processPlugin(plugin))
    })
  }

  // Add the site's default "plugin" i.e. gatsby-x files in root of site.
  plugins.push({
    resolve: slash(process.cwd()),
    name: `default-site-plugin`,
    version: `n/a`,
    pluginOptions: {
      plugins: [],
    },
  })

  // Create a "flattened" array of plugins with all subplugins
  // brought to the top-level. This simplifies running gatsby-* files
  // for subplugins.
  const flattenedPlugins = []
  const extractPlugins = plugin => {
    plugin.pluginOptions.plugins.forEach(subPlugin => {
      flattenedPlugins.push(subPlugin)
      extractPlugins(subPlugin)
    })
  }

  plugins.forEach(plugin => {
    flattenedPlugins.push(plugin)
    extractPlugins(plugin)
  })

  // Validate plugins before saving. Plugins can only export known APIs. Collect
  // any bad exports (either typos or outdated) and output an error and quit.
  const apis = _.keys(nodeAPIs)
  let badExports = []
  flattenedPlugins.forEach(plugin => {
    let gatsbyNode
    try {
      gatsbyNode = require(`${plugin.resolve}/gatsby-node`)
    } catch (e) {
      // ignore
    }

    if (gatsbyNode) {
      badExports = badExports.concat(
        _.without(_.keys(gatsbyNode), ...apis).map(e => {
          return {
            exportName: e,
            pluginName: plugin.name,
            pluginVersion: plugin.version,
          }
        })
      )
    }
  })

  if (badExports.length > 0) {
    const stringSimiliarity = require(`string-similarity`)
    const { stripIndent } = require(`common-tags`)
    console.log(`\n`)
    console.log(
      stripIndent`
      Your plugins must export known APIs from their gatsby-node.js.
      The following exports aren't APIs. Perhaps you made a typo or
      your plugin is outdated?

      See https://www.gatsbyjs.org/docs/node-apis/ for the list of Gatsby Node APIs`
    )
    badExports.forEach(bady => {
      const similarities = stringSimiliarity.findBestMatch(
        bady.exportName,
        apis
      )
      let message = `\n — `
      if (bady.pluginName == `default-site-plugin`) {
        message += `Your site's gatsby-node.js is exporting a variable named "${bady.exportName}" which isn't an API.`
      } else {
        message += `The plugin "${bady.pluginName}@${bady.pluginVersion}" is exporting a variable named "${bady.exportName}" which isn't an API.`
      }
      if (similarities.bestMatch.rating > 0.5) {
        message += ` Perhaps you meant to export "${similarities.bestMatch
          .target}"?`
      }

      console.log(message)
    })
    process.exit()
  }

  store.dispatch({
    type: `SET_SITE_PLUGINS`,
    payload: plugins,
  })

  store.dispatch({
    type: `SET_SITE_FLATTENED_PLUGINS`,
    payload: flattenedPlugins,
  })

  return flattenedPlugins
}
