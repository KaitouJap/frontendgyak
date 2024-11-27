import {useRef, useState} from 'react'
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
  const inputRef = useRef<HTMLInputElement>(null);
  const allTaskCompleted = tasks.length > 0 && tasks.every((task) => task.completed);
  const addTask = () => {
    if(newTask.trim() === ''){
      setError("A feladat nevet kotelezo megadni!");
      inputRef.current?.focus();
      return;
    }
    if(newTask.length > 30){
      setError("A feladat neve maximum 30 karakter!");
      setNewTask("");
      inputRef.current?.focus();
      return;
    }
    if(tasks.some((task) => 
      task.name.toLocaleLowerCase() === newTask.trim().toLocaleLowerCase())){
      setError("Ez a feladat mar letezik!");
      setNewTask("");
      inputRef.current?.focus();
      return;
    }
    setTasks((prevTasks) => [...prevTasks, {id:Date.now(), name: newTask.trim(), completed: false}]);
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
    <div className='container'>
      <h2>Feladatlista</h2>
      <div className='input-group'>
        <input type="text" value={newTask} ref={inputRef}  onChange={(e) => setNewTask(e.target.value)} />
        <button onClick={addTask}>Hozzaadas</button>
      </div>
      {<p className="error-message">{error}</p>}
      <ul className='task-list'>
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
      {allTaskCompleted && <p className='completed-message'>Minden feladatot elvegeztel!</p>}
    </div>
  );
}

export default App
