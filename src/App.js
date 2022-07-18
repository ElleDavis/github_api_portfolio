import './App.css';
import React from "react"
import GithubList from './component/githubList';
import { useState, useEffect} from "react"
import { Route } from "react-router-dom";



function App() {

  const [myaccount, setMyAccount]=useState(null)

 useEffect(()=>{
    // fetch("https://api.github.com/users/")
    // https://api.github.com/users/ElleDavis
    fetch("https://api.github.com/users/ElleDavis/repos")
    .then((res)=> res.json())
    .then(data => setMyAccount(data))
 },[])
 
  return(
    <div>
        <h1>My Github</h1>
        <Route path='/'>
             <GithubList repos={myaccount} />
            
        </Route>
    </div>
)
}

export default App;
