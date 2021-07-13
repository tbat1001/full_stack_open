import React, { PureComponent } from 'react'

const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1> {props.course} </h1>
    </>
  )
}
const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part name={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercise={props.parts[2].exercises} />
    </>
    )
}
const Total = (props) => {
  console.log(props)
  return (
    <>
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </>
    )
}
const Part = (props) => {
  console.log(props)
  return (
    <>
      <p>{props.name} {props.exercise}</p>
    </>
  )
}
export default App