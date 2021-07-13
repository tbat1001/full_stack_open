import React, { PureComponent } from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

const Header = (props) => {
  return (
    <>
      <h1> {props.course.name} </h1>
    </>
  )
}
const Content = (props) => {
  return (
    <>
      <Part name={props.course.parts[0].name} exercise={props.course.parts[0].exercises} />
      <Part name={props.course.parts[1].name} exercise={props.course.parts[1].exercises} />
      <Part name={props.course.parts[2].name} exercise={props.course.parts[2].exercises} />
    </>
    )
}
const Total = (props) => {
  return (
    <>
    <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
    </>
    )
}
const Part = (props) => {
  return (
    <>
      <p>{props.name} {props.exercise}</p>
    </>
  )
}
export default App