import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'
import Habits from './habits'

export const habitsResolvers = {
  Query: {
    async habits() {
      try {
        const habits = await Habits.find()
        return habits
      } catch (error) {
        console.error(error)
      }
    }
  },

  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar',
    parseValue(value) {
      return new Date(value) // value thats coming from the client
    },
    serialize(value) {
      return value.getTime() // value that sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value)
      }
      return null
    }
  })
}
