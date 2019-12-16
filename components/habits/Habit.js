import HabitButton from './HabitButton'
import styled from 'styled-components'

const colors = ['#718096', '#F56565', '#F6E05E', '#68D391', '#63B3ED']

const Article = styled.article`
  padding: 20px;
  border-radius: 15px;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;

  h3 {
    margin-top: 0;
    border-bottom: solid 4px ${props => colors[props.index]};
  }

  .buttons {
    display: flex;
  }
`

const Habit = ({ habit, index }) => {
  const dates = getLastFiveDays()
  return (
    <Article key={index} index={index}>
      <h3>{habit.name}</h3>
      <div className="buttons">
        {dates.map((date, i) => {
          return <HabitButton date={date} key={i} habitId={habit._id} events={habit.events} />
        })}
      </div>
    </Article>
  )
}

const getLastFiveDays = () => {
  const dates = '01234'.split('').map(day => {
    const tempDate = new Date()
    tempDate.setDate(tempDate.getDate() - day)
    return tempDate
  })
  return dates
}

export default Habit
