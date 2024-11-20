import {useState} from 'react'


function App() {
  const[loggedIn, setLoggedIn] = useState(false);
  return(
    <div>
      {loggedIn ? (<p>Üdv újra itt!</p>) : (<p>Kérjük jelentkezz be!</p>)}
      <button onClick={()=>setLoggedIn(!loggedIn)}>{loggedIn ? 'kijelentkezés' : 'bejelentkezés'}</button>
    </div>
  );
}

export default App
