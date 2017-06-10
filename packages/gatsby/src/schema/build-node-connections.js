// @flow
const _ = require(`lodash`)
const { connectionArgs, connectionDefinitions } = require(`graphql-skip-limit`)
const {
  inferInputObjectStructureFromNodes,
} = require(`./infer-graphql-input-fields`)
const buildConnectionFields = require(`./build-connection-fields`)
const { getNodes } = require(`../redux`)

module.exports = (types: any) => {
  const connections = {}

  _.each(types, (type /* , fieldName*/) => {
    const nodes = type.nodes
    const { connectionType: typeConnection } = connectionDefinitions({
      nodeType: type.nodeObjectType,
      connectionFields: () => buildConnectionFields(type),
    })

    const inferredInputFields = inferInputObjectStructureFromNodes({
      nodes,
      typeName: `${type.name}Connection`,
    })

    connections[_.camelCase(`all ${type.name}`)] = {
      type: typeConnection,
      description: `Connection to all ${type.name} nodes`,
      args: {
        ...connectionArgs,
        ...inferredInputFields,
      },
      resolve(object, resolveArgs, b, { rootValue }) {
        let path
        if (typeof rootValue !== `undefined`) {
          path = rootValue.path
        }
        const runSift = require(`./run-sift`)
        const latestNodes = _.filter(
          getNodes(),
          n => n.internal.type === type.name
        )
        return runSift({
          args: resolveArgs,
          nodes: latestNodes,
          connection: true,
          path,
        })
      },
    }
  })

  return connections
}
