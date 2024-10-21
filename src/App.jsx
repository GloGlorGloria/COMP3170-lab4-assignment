import { useState } from 'react';
import './App.css';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

const initialTask = [
  {
    taskName: "Task 1",
    isDone: false,
  },
  {
    taskName: "Task 2",
    isDone: false,
  },
  {
    taskName: "Task 3",
    isDone: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(initialTask);
  const [task, setTask] = useState({
    taskName:"",
    isDone:false,
  });
  const [count, setCount] = useState(tasks.length);

  function handleSubmit(e) {
    e.preventDefault();
    if (task.taskName.trim() === "") {
      return; 
  }
    setTasks([...tasks, task]);
    setCount(count + 1);
    setTask({
      taskName: "",
      isDone: false,
  });
  }

  function handleDelete(e, index) {
    if (e.target === e.currentTarget) {
      return; 
    }

    if (e.target.tagName !== 'BUTTON') {
      return; 
    }

    const updatedTasks = [...tasks];
    const taskToDelete = updatedTasks[index];

    if (!taskToDelete.isDone) {
      setCount(count - 1);
    }

    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    console.log("delete button clicked");
  }

  const handleTaskToggle = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isDone = !updatedTasks[index].isDone;
    setCount(updatedTasks[index].isDone ? count - 1 : count + 1);
    setTasks(updatedTasks);
  };

  const taskList = tasks.map((task, index) => (
    <Task 
      key={index}
      handleDelete={(e) => handleDelete(e, index)}
      task={task}
      handleTaskToggle={() =>handleTaskToggle(index)}
    />
  ));

  return (
    <>
    <header>
      <h1>Daily Planner</h1>
    </header>

    <TaskForm
      handleSubmit={handleSubmit}
      task={task}
      setTask={setTask}
    />
    <h2>You have {count} tasks remaining</h2>
    {taskList}
    </>
  )
}

export default App
