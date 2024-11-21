import {useState} from 'react'
import './todolist.css'

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState("");
  const addTask = () => {
    if(newTask.trim() === ''){
      setError("A feladat nevet kotelezo megadni!");
      return;
    }
    if(newTask.length > 30){
      setError("A feladat neve maximum 30 karakter!");
      return;
    }
    setTasks((prevTasks) => [...prevTasks, {id:Date.now(), name: newTask, completed: false}]);
    setNewTask('');
    setError("");
  };
  const removeTask = (taskId: number) => {
    setTasks((prevTask) => prevTask.filter((task) => task.id !== taskId));
  };
  const toggleTaskCompleted = (index: number) => {
    setTasks((prevTask) =>  
      prevTask.map((task) =>
      task.id === index ? {...task, completed: !task.completed} : task));
  };
  return(
    <div>
      <h2>Feladatlista</h2>
      <input type="text" value={newTask}  onChange={(e) => setNewTask(e.target.value)} />
      {<p style={{color: "red"}}>{error}</p>}
      <button onClick={addTask}>Hozzaadas</button>
      <ul>
        {tasks.map((task) => {
          const taskClass = `task ${task.completed?"completed":""}`;
          return(
          <li key={task.id} className={taskClass}>
            <span>{task.name}</span>
            <button onClick={()=>removeTask(task.id)}>torles</button>
            <button onClick={()=>toggleTaskCompleted(task.id)}>{task.completed?"Visszaalittas":"Kesz"}</button>
          </li>
        )})}
      </ul> 
    </div>
  );
}

export default App
