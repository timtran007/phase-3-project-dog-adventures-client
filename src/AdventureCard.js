import React, {useState} from 'react'
import EditForm from './EditForm'

function AdventureCard({dog}){

    const [toggleEdit, setToggleEdit] = useState(false)
    const [targetID, setTargetID] = useState(0)

    function handleEditClick(e) {
        setToggleEdit(!toggleEdit)
        setTargetID(parseInt(e.target.id))
    }
  
  return(      
    dog.adventures.map(adventure =>{ 
        return(
            <div key={adventure.id} className="card">
                <h3 className="dog"> 
                Adventure: {adventure.location}
                </h3>
                <p id={adventure.id} onClick={handleEditClick} style={{textDecoration: "underline"}}>edit</p>
                <img className="dogImage" src= {adventure.image_url} alt={adventure.location} />
                <h4 className="description">
                    City: {adventure.city}
                </h4>
                <h4 className="description">
                    Date: {adventure.date}
                </h4>
                <h4 className="description">
                    Rating: {adventure.rating}/5
                </h4>
                <h4 className="description">
                    Notes: {adventure.notes}
                </h4>
                {toggleEdit && adventure.id === targetID ? <EditForm dog={dog}/> : null}
            </div>
        )
    })
  )
}

export default AdventureCard