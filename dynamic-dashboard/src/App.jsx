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

/*
          {taskArray.map(taskArrayElement => (
              <li key={task.id} style={{ textDecoration: taskArrayElement.completed 
              ? 'line-through' 
              : 'none' }}>
              {taskArrayElement.taskName}: {taskArrayElement.completed ? 'Completed' : 'Pending'}
              </li>
            ))}
*/

/*
      <h2>Tasks</h2>
        <ul>  
            {taskArray.map((taskArrayElement) => 
            (
              <li key={taskArrayElement.id} style={{ textDecoration: taskArrayElement.completed 
              ? 'line-through' 
              : 'none' }}>
              {taskArrayElement.taskName}: {taskArrayElement.completed ? 'Completed' : 'Pending'}
              </li>
            ))}

  
        </ul>
*/
