import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import styled from 'styled-components'

const Button = styled.span`
  display: flex;
  flex-direction: column;

  + span {
    margin-left: 10px;
  }

  button {
    border: none;
    margin-top: 1rem;
    background: #bada55;
  }
`

const ADD_EVENT = gql`
  mutation addEvent($date: Date, $habitId: ID) {
    addEvent(date: $date, habitId: $habitId) {
      _id
      name
      events {
        _id
        date
      }
    }
  }
`

const REMOVE_EVENT = gql`
  mutation removeEvent($eventId: ID, $habitId: ID) {
    removeEvent(eventId: $eventId, habitId: $habitId) {
      _id
      name
      events {
        _id
        date
      }
    }
  }
`

const HabitButton = ({ date, habitId }) => {
  const [addEvent] = useMutation(ADD_EVENT, {
    refetchQueries: ['getHabits']
  })
  const [removeEvent] = useMutation(REMOVE_EVENT, {
    refetchQueries: ['getHabits']
  })
  const found = false

  return (
    <Button>
      {date.getMonth() + 1}/{date.getDate()}
      {found ? (
        <button onClick={() => removeEvent({ variables: { eventId: 'asdfasdf', habitId } })}>
          X
        </button>
      ) : (
        <button onClick={() => addEvent({ variables: { habitId, date } })}>O</button>
      )}
    </Button>
  )
}

export default HabitButton
