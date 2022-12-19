import { useState } from "react"
function EditForm({adventure, onEditDogAdventure}) {
    const [formData, setFormData] = useState({
        date: adventure.date,
        rating: adventure.rating,
        notes: adventure.notes
    })

    // const options = dog.adventures.map(adventure =>
    //     <option key={adventure.id} value={adventure.location}>{adventure.location}</option>
    // )

    function handleChange(e){
        const key = e.target.name
        const value = e.target.value
        setFormData({
            ...formData,
            [key]: value
        })
    }

    function handleFormSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:9292/adventures/${adventure.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(updatedAdventure => {
            console.log('updatedAventure', updatedAdventure)
            onEditDogAdventure(updatedAdventure)
        })
    }
    console.log(formData)

    return(
        <form onSubmit={handleFormSubmit}>
            <h4>Edit my adventure:</h4>
                <div>
                <label htmlFor="date">Date:</label>
                <p>
                <input 
                    onChange={handleChange}
                    type="text" 
                    name="date" 
                    placeholder="Enter YYYY-MM-DD"
                    value={formData.date}
                />
                </p>
            </div>
            <div>
                <label htmlFor="rating">Rating `1 (lowest) to 5 (highest)`:</label>
                <p>
                <input 
                    onChange={handleChange}
                    type="number" 
                    name="rating" 
                    max= "5"
                    min= "1"
                    value={formData.rating}
                />
                </p>
            </div>
            <div>
                <label htmlFor="notes">Notes:</label>
                <p>
                <input 
                    onChange={handleChange}
                    type="textarea" 
                    name="notes" 
                    placeholder="Brief summary"
                    value={formData.notes}
                />
                </p>
            </div>
            <div>
                <input style={{padding: "1%", marginTop: "1%"}}type="submit" value="Save Changes"/>
            </div>
        </form>
)}

export default EditForm