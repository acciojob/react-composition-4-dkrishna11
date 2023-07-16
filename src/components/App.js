
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  let [user, setUser]=useState({name:"", email:"", password:""});

  function addUser(){
    console.log(user)
  }
  return (
    <div>
       <form onSubmit={addUser}>
        Name <input type="text" onChange={(eve)=>setUser({...user, name:eve.target.value})}></input>
        Email <input type="email"  onChange={(eve)=>setUser({...user, email:eve.target.value})}></input>
        Password <input type="password"  onChange={(eve)=>setUser({...user, password:eve.target.value})}></input>
        <button>Submit</button>
       </form>
    </div>
  )
}

export default App
