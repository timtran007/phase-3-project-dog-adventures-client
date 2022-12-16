import React, {useState, useEffect} from "react";
import {Switch, Route} from "react-router-dom"
import Nav from "./Nav"
import DogContainer from "./DogContainer"
import DogForm from "./DogForm"

function App() {
  const[dogs, setDogs] = useState([])

  useEffect(() =>{
    fetch(`http://localhost:9292/dogs`)
    .then(resp => resp.json())
    .then(data => setDogs(data))
  }, [])

  console.log("dogs", dogs)

  return (
    <div>
      <h1 style={{textAlign: "center"}}> Welcome to Dog Adventures</h1>
      <div>
        <Nav />
      </div>
      <Switch>
        <Route exact path="/">
          <header>
            <h3 style={{textAlign: "center", marginTop: 50}}>Cherish Your Dog Adventures</h3>
          </header>
        </Route>
        <Route exact path="/dogs">
          <DogContainer />
        </Route>
        <Route exact path="/add-a-dog">
          <DogForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
