import React, {useState} from "react"
import {useParams} from "react-router-dom"
import AdventureCard from './AdventureCard'
import AdventureForm from "./AdventureForm"
import DogDetail from '../src/styles/DogDetail.css'

function DogDetails({dogs, setDogs}){
    const params = useParams()
    const dog = dogs.find(dog => dog.id === parseInt(params.id))
    const [onClick, setOnClick] = useState(false)
  

    function handleButtonClick(){
        setOnClick(!onClick)
    }

    function onSubmitAdventure(newAdventure){
        if(dog.adventures === undefined){
            const addNewAdventure = [newAdventure]
            const updatedDog = {
                ...dog,
                adventures: addNewAdventure
            }
            const updatedDogs = dogs
                .map( d => {
                    if(d.id === dog.id){
                        return updatedDog
                    }
                    else{
                        return d
                    }
                })
            setDogs(updatedDogs)
        } else{
            const addNewAdventure = [...dog.adventures, newAdventure]
            const updatedDog = {
                ...dog,
                adventures: addNewAdventure
            }
            const updatedDogs = dogs
                .map( d => {
                    if(d.id === dog.id){
                        return updatedDog
                    }
                    else{
                        return d
                    }
                })
            setDogs(updatedDogs)
        }
    }

    return(
        <div className="card">
            <h1>Hello World!</h1>
            {dog ? <img src={dog.img_url} alt={dog.name} /> : null}
            {dog ? <h2>This is {dog.name}! A {dog.breed}. {dog.name} is {dog.personality}.</h2> : null}
            {dog ? <div>
                <p>Take a look at your adventures with {dog.name}:</p>
                {dog ? <AdventureCard setDogs={setDogs} dog={dog} dogs={dogs}/> : null}
            </div> : null}

           {dog ? <button onClick={handleButtonClick}>Add a New Adventure</button> : null}
            {onClick ? <AdventureForm onSubmitAdventure={onSubmitAdventure} dog={dog}/>: null}
        </div>
    )
}

export default DogDetails