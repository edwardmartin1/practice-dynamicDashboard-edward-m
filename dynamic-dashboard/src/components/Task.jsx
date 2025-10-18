/* working code 
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

const Task = () =>
{
    return(
        <div>        
            <h2>Tasks</h2>
            <ul>  
                {taskArray.map((taskArrayElement) => 
                (
                    <li key={taskArrayElement.id} style={{color: taskArrayElement.completed ? "green" : "black"}}>
                        {taskArrayElement.taskName} {" "} {taskArrayElement.completed ? '✅' : '❌'}
                    </li>                
                ))}                
            </ul>
        </div>        
    );
}
*/

/* try to pass props */
const Task = (props) =>
{
    return(
        <div>
            <h2>Tasks</h2>
            <ul>
                {props.tasks.map((task) =>
                (
                    <li key={task.id} style={{color: task.completed ? "green" : "black"}}>
                        {task.taskName} {" "} {task.completed ? '✅' : '❌'}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Task;

/*
    <div>
    </div>

    */


    /*
                        <li key={taskArrayElement.id}>
                        {taskArrayElement.taskName} {" "} {taskArrayElement.completed ? "\u2705" : "\u247C"} 
                    </li>
*/

/*
const Task = (props) =>
{
    return (
        {{...props.tasks}.map(taskElement) => 
        {
            return "h";

        }
    ); 
}
*/
