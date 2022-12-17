import React from "react"
import {useParams} from "react-router-dom"

function DogDetails({dogs}){
    const params = useParams()
    console.log(params)

    return(
        <div>
            <h1>Hello World!</h1>
            {/* <img src={dog.img_url} alt={dog.name} />
            <h2>This is {dog.name}! A {dog.breed}. {dog.name} is {dog.personality}</h2>
            <div>
                <h3>They have been on {adventure.length} adventures!</h3>
                <p>You can take a look at their adventures below:</p>
                <AdventureCard adventure={adventure}/>
            </div> */}
            
        </div>
    )
}

export default DogDetails