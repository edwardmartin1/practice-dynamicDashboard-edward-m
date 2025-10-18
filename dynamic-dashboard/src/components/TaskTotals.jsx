const TaskTotals = (props) =>
{
    let taskCompletedTotal = 0;
    let taskIncompleteTotal = 0;

    props.tasks.forEach((task) =>
    {
        task.completed ? taskCompletedTotal++ : taskIncompleteTotal++;
    });

    return (
        <div>
            <h2>Total Completed: {taskCompletedTotal}</h2>
            <h2>Total Incomplete: {taskIncompleteTotal}</h2>
        </div>
    )
}

export default TaskTotals;


