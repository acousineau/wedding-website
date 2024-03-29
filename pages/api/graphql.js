import { ApolloServer, gql } from 'apollo-server-micro'
import { mergeResolvers, mergeTypeDefs } from '@graphql-toolkit/schema-merging'
import connectDb from '../../lib/mongoose'
import { habitsResolvers } from '../../src/api/habits/resolvers'
import { habitsMutations } from '../../src/api/habits/mutations'
import Habits from '../../src/api/habits/Habits.graphql'

const fakeTypeDefs = gql`
  type Query {
    sayHello: String
  }
`

const fakeResolvers = {
  Query: {
    sayHello: () => {
      return 'Hello Wedding Website'
    }
  }
}

const resolvers = mergeResolvers([fakeResolvers, habitsResolvers, habitsMutations])
// Habit
// console.log(mergeTypeDefs([fakeTypeDefs, Habits]).definitions[0].fields[1].type.type.name)
// Habit Details - Events
// console.log(mergeTypeDefs([fakeTypeDefs, Habits]).definitions[1].fields[2].type.type)
const typeDefs = mergeTypeDefs([fakeTypeDefs, Habits])

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false
  }
}

const server = apolloServer.createHandler({ path: '/api/graphql' })

export default connectDb(server)

// Short way
// export default (req, res) => {
//   res.status(200).json({
//     test: 'Hello Wedding Website'
//   })
// }

// Long Way
// export default (req, res) => {
//   res.setHeader('Content-Type', 'application/json')
//   res.statusCode = 200
//   res.end(
//     JSON.stringify({
//       test: 'Hello Wedding Website'
//     })
//   )
// }
