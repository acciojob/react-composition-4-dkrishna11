
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
        Name <input type="text" onChange={()=>setUser(...user, user.name)}></input>
        Email <input type="email"  onChange={()=>setUser(...user, user.email)}></input>
        Password <input type="password"  onChange={()=>setUser(...user, user.password)}></input>
        <button>Submit</button>
       </form>
    </div>
  )
}

export default App
