import AddADog from '../src/styles/AddADog.css'
import {useState} from 'react'

function DogForm({onAddDog}){
    const [formData, setFormData] = useState({
        name: "",
        breed: "",
        personality: "",
        img_url: ""
    })

    function handleChange(e){
        const key = e.target.name
        const value = e.target.value
        setFormData({
            ...formData,
            [key]: value
        }
        )
    }
    console.log("formData", formData)

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:9292/dogs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(newDog => onAddDog(newDog))
    }
    return(
        <form onSubmit={handleSubmit} style={{textAlign: "center"}} id="addADogForm">
            <h2 id="addADogHeader">Add My Dog</h2>
            <div>
                <label htmlFor="name">Dog's Name:</label>
                <p>
                <input 
                    onChange={handleChange}
                    type="text" 
                    name="name" 
                    placeholder="Enter dog's name"
                    value={formData.name}
                />
                </p>
            </div>
            <div>
                <label htmlFor="breed">Dog's Breed:</label>
                <p>
                <input 
                    onChange={handleChange}
                    type="text" 
                    name="breed" 
                    placeholder="Enter dog's breed"
                    value={formData.breed}
                />
                </p>
            </div>
            <div>
                <label htmlFor="personality">Dog's Personality:</label>
                <p>
                <input 
                    onChange={handleChange}
                    type="text" 
                    name="personality" 
                    placeholder="Enter dog's personality"
                    value={formData.personality}
                />
                </p>
            </div>
            <div>
                <label htmlFor="img_url">Dog's Image URL:</label>
                <p>
                <input 
                    onChange={handleChange}
                    type="text" 
                    name="img_url" 
                    placeholder="Add an image URL link"
                    value={formData.img_url}
                />
                </p>
            </div>
            <input style={{padding: "1%", marginTop: "10px"}}type="submit" value="Add my dog!"/>
        </form>
    )
}

export default DogForm