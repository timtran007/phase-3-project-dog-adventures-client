import React, {useState} from "react"
import {useParams} from "react-router-dom"
import AdventureCard from './AdventureCard'
import AdventureForm from "./AdventureForm"
import DogDetail from '../src/styles/DogDetail.css'

function DogDetails({dogs, setDogs}){
    const params = useParams()
    const dog = dogs[parseInt(params.dogId) - 1]
    const [onClick, setOnClick] = useState(false)

    const adventures = dog.adventures === undefined ? "0" : dog.adventures.length

    function handleButtonClick(){
        setOnClick(!onClick)
    }

    //work in progress
    function onSubmitAdventure(newAdventure){
        setDogs()
    }

    return(
        <div className="card">
            <h1>Hello World!</h1>
            <img src={dog.img_url} alt={dog.name} />
            <h2>This is {dog.name}! A {dog.breed}. {dog.name} is {dog.personality}.</h2>
            <div>
                <h3>They have been on {adventures} adventures!</h3>
                <p>Take a look at your adventures with {dog.name}:</p>
                {dogs.adventures === undefined ? null : <AdventureCard setDogs={setDogs} dog={dog}/>}
            </div>

            <button onClick={handleButtonClick}>Add a New Adventure</button>
            {onClick ? <AdventureForm onSubmitAdventure={onSubmitAdventure} dog={dog}/>: null}
            
        </div>
    )
}

export default DogDetails