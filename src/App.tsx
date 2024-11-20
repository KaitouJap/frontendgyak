import {useState} from 'react'
import './todolist.css'

type Task = {
  name: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('')
  const addTask = () => {
    if(newTask.trim() === '') return;
    setTasks((prevTasks) => [...prevTasks, {name: newTask, completed: false}]);
    setNewTask('');
  };
  const removeTask = (indexToRemove: number) => {
    setTasks((prevTask) => prevTask.filter((_, index) => index !== indexToRemove));
  };
  const toggleTaskCompleted = (index: number) => {
    setTasks((prevTask) => 
      prevTask.map((task, i) =>
      i === index ? {...task, completed: !task.completed} : task));
  };
  return(
    <div>
      <h2>Feladatlista</h2>
      <input type="text" value={newTask}  onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={addTask}>Hozzaadas</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span style={task.completed?{textDecoration: "line-through"}:{}}>{task.name}</span>
            <button onClick={()=>removeTask(index)}>torles</button>
            <button onClick={()=>toggleTaskCompleted(index)}>{task.completed?"Visszaalittas":"Kesz"}</button>
          </li>
        ))}
      </ul> 
    </div>
  );
}

export default App
