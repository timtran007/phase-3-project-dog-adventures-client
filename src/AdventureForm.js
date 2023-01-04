import AddAnAdventure from '../src/styles/AddAnAdventure.css'
import { useState } from 'react'
function AdventureForm({dog, onSubmitAdventure}){
    const initialFormData = {
        image_url: "",
        date: "",
        city: "",
        location: "",
        rating: 1,
        notes: "",
        dog_id: dog.id
    }
    const [formData, setFormData] = useState(initialFormData)


    function handleChange(e){
        const key = e.target.name
        const value = e.target.value
        setFormData({
            ...formData,
            [key]: value
        })
        
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:9292/adventures',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(newAdventure =>{
            onSubmitAdventure(newAdventure)
        })
        setFormData(initialFormData)
    }

    return(
        <form onSubmit={handleSubmit} id="addAnAdventureForm">
             <div>
                <h2 id="addAnAdventureHeader">Add Another Adventure</h2>
                <label htmlFor="location">Place You Went:</label>
                <p>
                <input 
                    onChange={handleChange}
                    type="text" 
                    name="location" 
                    placeholder="Enter location of adventure"
                    value={formData.location}
                />
                </p>
            </div>
            <div>
                <label htmlFor="city">City:</label>
                <p>
                <input 
                    onChange={handleChange}
                    type="text" 
                    name="city" 
                    placeholder="Enter city"
                    value={formData.city}
                />
                </p>
            </div>
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
                    min="1"
                    max="5"
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
                <label htmlFor="image_url">Image Link URL:</label>
                <p>
                <input 
                    onChange={handleChange}
                    type="text" 
                    name="image_url" 
                    placeholder="add an image of your adventure"
                    value={formData.image_url}
                />
                </p>
            </div>
            <div>
            <input style={{padding: "1%", marginTop: "10px"}}type="submit" value="Add Submit!"/>
            </div>
        </form>
    )
}

export default AdventureForm