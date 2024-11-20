import {useRef, useState, useEffect} from 'react'


function App() {
  const[count, setCount] = useState(0);
  useEffect(()=>{
    document.title = `You clicked ${count} times`;
  }, [count]);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(()=>{
    inputRef.current?.focus();
  },[]);
  return(
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=> setCount(count + 1)}>Increase</button>
      <input ref={inputRef} type="text"/>
    </div>
  );
}

export default App
