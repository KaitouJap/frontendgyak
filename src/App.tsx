import {useState} from 'react'


function App() {
  const[user, setUser] = useState({name: "", age: 0});
  const updateName = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setUser((prevUser) => ({...prevUser, name: e.target.value}));
  };
  const updateAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({ ...prevUser, age: parseInt(e.target.value) }));
  };
    
  return(
    <div>
      <h2>Fehasznaloi adatok</h2>
      Név:<input type="text" value={user.name} onChange={updateName}/><br/>
      kor:<input type="text" value={user.age} onChange={updateAge}/><br/>
      <p>Név: {user.name}</p>
      <p>Kor: {user.age}</p>  
    </div>
  );
}

export default App
