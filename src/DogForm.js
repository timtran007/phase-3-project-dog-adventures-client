import AddADog from '../src/styles/AddADog.css'
import {useState} from 'react'

function DogForm(){
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


    return(
        <form style={{textAlign: "center"}} id="addADogForm">
            <h2 id="addADogHeader">Add My Dog</h2>
            <p>
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
            </p>
            <p>
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
            </p>
            <p>
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
            </p>
            <p>
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
            </p>
            <input style={{padding: "10px", marginTop: "10px"}}type="submit" value="Add my dog!"/>
        </form>
    )
}

export default DogForm