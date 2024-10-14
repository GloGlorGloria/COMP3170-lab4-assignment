export default function Task({handleDelete, task, handleTaskToggle}){
    console.log(task.isDone);

    return (
        <div className="new-task-container" onClick={handleDelete}>
            <input  
            type="checkbox" 
            checked={task.isDone} 
            onChange={handleTaskToggle}/>
            <h3 style={{textDecoration: task.isDone ? "line-through" : "none"}}>{task.taskName}</h3>
            <button className="remove-button">Remove</button>
        </div>
            
    );
}