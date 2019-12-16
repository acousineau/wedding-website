import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'
import Habits from './habits'

export const habitsMutations = {
  Mutation: {
    async addHabit(_, { habit }) {
      try {
        const newHabit = await Habits.create({
          ...habit
        })
        return newHabit
      } catch (error) {
        console.error(error)
      }
    },

    async removeEvent(_, { habitId, eventId }) {
      console.log('Remove event')
    },

    async addEvent(_, { habitId, date }) {
      console.log('Add event')
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
