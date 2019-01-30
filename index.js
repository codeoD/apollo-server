const { ApolloServer, gql } = require('apollo-server')
const { expense } = require('./src/typeDefs/expense-data.gql')
const { expenseResolvers } = require('./src/resolvers/expense.gql')
// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world'
  }
}
console.log(expenseResolvers)
const server = new ApolloServer({
  typeDefs: expense,
  resolvers: expenseResolvers,
  introspection: true,
  playground: true
})

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
