import {useState} from 'react'


function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('')
  const addTask = () => {
    if(newTask.trim() === '') return;
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTask('');
  };
  const removeTask = (indexToRemove: number) => {
    setTasks((prevTask) => prevTask.filter((_, index) => index !== indexToRemove));
  };
  return(
    <div>
      <h2>Feladatlista</h2>
      <input type="text" value={newTask}  onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={addTask}>Hozzaadas</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={()=>removeTask(index)}>Torles</button>
          </li>
        ))}
      </ul> 
    </div>
  );
}

export default App
