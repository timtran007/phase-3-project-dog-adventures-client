import AddADog from '../src/styles/AddADog.css'

function DogForm(){
    return(
        <form style={{textAlign: "center"}} id="addADogForm">
            <h2 id="addADogHeader">Add My Dog</h2>
            <p>
                <label htmlFor="name">Dog's Name:</label>
                <p>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Enter dog's name"
                />
                </p>
            </p>
            <p>
                <label htmlFor="breed">Dog's Breed:</label>
                <p>
                <input 
                    type="text" 
                    name="breed" 
                    placeholder="Enter dog's breed"
                />
                </p>
            </p>
            <p>
                <label htmlFor="personality">Dog's Personality:</label>
                <p>
                <input 
                    type="text" 
                    name="personality" 
                    placeholder="Enter dog's personality"
                />
                </p>
            </p>
            <p>
                <label htmlFor="img_url">Dog's Image URL:</label>
                <p>
                <input 
                    type="text" 
                    name="img_url" 
                    placeholder="Add an image URL link"
                />
                </p>
            </p>
            <input style={{padding: "10px", marginTop: "10px"}}type="submit" value="Add my dog!"/>
        </form>
    )
}

export default DogForm