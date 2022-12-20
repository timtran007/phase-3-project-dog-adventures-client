import React, {useState} from 'react'
import EditForm from './EditForm'
import DeleteButton from './DeleteButton'

function AdventureCard({dog, setDogs, dogs}){

    const [toggleEdit, setToggleEdit] = useState(false)
    const [targetID, setTargetID] = useState(0)

    function handleEditClick(e) {
        setToggleEdit(!toggleEdit)
        setTargetID(parseInt(e.target.id))
    }

    function onEditDogAdventure(updatedAdventureData){
        const updatedDogAdventures = dog.adventures
        .map(adventure =>{
            if(adventure.id === updatedAdventureData.id){
                return updatedAdventureData
            }
            else{
                return adventure
            }
        })

        const updatedDog = {
            ...dog, 
            adventures: updatedDogAdventures
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
            debugger
        setDogs(updatedDogs)
    }

    function onDeleteAdventure(deletedAdventure){
        debugger
        const updatedAdventures = dog.adventures
            .filter(adventure => adventure.id !== deletedAdventure.id)
        
        const updatedDog = {
            ...dog,
            adventures: updatedAdventures
        }

        const updatedDogs = dogs
            .map(d =>{
                if(d.id === dog.id){
                    return updatedDog
                }
                else{
                    return d
                }
            })
        setDogs(updatedDogs)
    }
  if(dog.adventures !== undefined){
  return(   
     dog.adventures.map(adventure =>{ 
        return(
            
            <div key={adventure.id} className="card">
                
                {adventure ? <h3 className="dog"> 
                Adventure: {adventure.location}
                </h3> : null}
                {adventure ?<p id={adventure.id} onClick={handleEditClick} style={{textDecoration: "underline"}}>edit</p>: null }
                {adventure ? <img className="dogImage" src= {adventure.image_url} alt={adventure.location} />: null }
                {adventure ? <h4 className="description">
                    City: {adventure.city}
                </h4>: null }
                {adventure ? <h4 className="description">
                    Date: {adventure.date}
                </h4> :null}
                {adventure ? <h4 className="description">
                    Rating: {adventure.rating}/5
                </h4> :null}
                {adventure ?<h4 className="description">
                    Notes: {adventure.notes}
                </h4> : null}
                {adventure && toggleEdit && adventure.id === targetID ? <EditForm onEditDogAdventure={onEditDogAdventure} adventure={adventure}/> : null}
                {adventure ?<DeleteButton onDeleteAdventure={onDeleteAdventure} adventure={adventure} /> :null}
            </div>
        )
    })
  )}
}

export default AdventureCard