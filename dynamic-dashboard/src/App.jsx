import { useState } from 'react'
import './App.css'
import Greeting from "./components/Greeting"
import Premium from "./components/Premium"
import Task from "./components/Task"
import Date from "./components/DateDisplay"
import TaskTotals from "./components/TaskTotals"

let taskArray = 
[
  {
    id: 1,
    taskName: "Clean kitchen", 
    completed: true
  },
  {
    id: 2,
    taskName: "Clean bathroom",
    completed: false
  },
  {
    id: 3,
    taskName: "Wash car",
    completed: false
  }
];


function App() {
  return (
    <div>
      <Date />
      <Greeting />
      <Premium />
      <Task tasks={taskArray}/>
      <TaskTotals tasks={taskArray}/>
    </div>
  );
}

export default App;

