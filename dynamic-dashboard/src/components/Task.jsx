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

