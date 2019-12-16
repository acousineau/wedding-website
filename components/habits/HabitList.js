import Habit from './Habit'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const GET_HABITS = gql`
  query getHabits {
    habits {
      _id
      name
      events {
        _id
        name
      }
    }
  }
`

const HabitList = () => {
  const { data, loading, error } = useQuery(GET_HABITS)
  if (loading || error) return <div></div>
  const { habits } = data
  return (
    <section>
      <h2>My Habits</h2>
      {habits.map((h, i) => (
        <Habit habit={h} index={i} key={h._id} />
      ))}
    </section>
  )
}

export default HabitList
