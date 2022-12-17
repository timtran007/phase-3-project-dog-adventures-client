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
    console.log(dogs)
  }, [])

  const displayHeader = dogs.length > 1 ? "Cherish the Moments With Your Dogs" : "Cherish Your Dog's Adventures"

  return (
    <div>
      <h1 style={{textAlign: "center"}}> Welcome to Dog Adventures</h1>
      <div>
        <Nav />
      </div>
      <Switch>
        <Route exact path="/">
          <header>
            <h3 style={{textAlign: "center", marginTop: 50}}>{displayHeader}</h3>
          </header>
        </Route>
        <Route exact path="/dogs">
          <DogContainer dogs={dogs}/>
        </Route>
        <Route exact path="/add-a-dog">
          <DogForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
