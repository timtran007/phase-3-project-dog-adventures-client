import React, {useState} from 'react'
function AdventureCard({dog}){

    const [toggleEdit, setToggleEdit] = useState(false)

    function handleEditClick() {
        setToggleEdit(!toggleEdit)
    }

    const displayEditForm = toggleEdit ? <EditForm /> :null
    
    const adventuresToDisplay = dog.adventures.map(adventure =>{
        return(
            <div key={adventure.id} className="card">
                <h3 className="dog"> 
                Adventure: {adventure.location}
                </h3>
                <p onClick={handleEditClick} style={{textDecoration: "underline"}}>edit</p>
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
                {displayEditForm}
            </div>
        )
    })

    return(
        <div>
            {adventuresToDisplay}
        </div>
    )
}

export default AdventureCard