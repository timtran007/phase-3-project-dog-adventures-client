import React, {useState, useEffect} from "react";
import {Switch, Route} from "react-router-dom"
import Nav from "./Nav"
import DogForm from "./DogForm"
import DogDetails from "./DogDetails";
import DogList from "./DogList";

function App() {
  const[dogs, setDogs] = useState([])

  useEffect(() =>{
    fetch(`http://localhost:9292/dogs`)
    .then(resp => resp.json())
    .then(data => setDogs(data))
  }, [])

  function onAddDog(newDog){
    setDogs([...dogs, newDog])
  }


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
            <h2 style={{textAlign: "center", marginTop: 50}}>{displayHeader}</h2>
          </header>
        </Route>
        <Route exact path="/dogs">
          <DogList dogs={dogs}/>
        </Route>
        <Route path="/dogs/new">
          <DogForm onAddDog={onAddDog}/>
        </Route>
        <Route path={`/dogs/:id`}>
            <DogDetails setDogs={setDogs} dogs={dogs}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
