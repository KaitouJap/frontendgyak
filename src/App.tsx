import React, {useState} from 'react'
import Greeting from './Greeting';


function App() {
  const[count, setCount] = useState(0);
  return(
    <div>
      <h1>Hello, React with Vite!</h1>
      <p>This is my first React component!</p>
      <Greeting name="John" age={42}></Greeting>
      <h2>Counter: {count}</h2>
      <button onClick={()=> setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App
