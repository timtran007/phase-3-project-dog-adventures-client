import AddAnAdventure from '../src/styles/AddAnAdventure.css'
function AdventureForm(){
    return(
        <form id="addAnAdventureForm">
             <div>
                <h2 id="addAnAdventureHeader">Add Another Adventure</h2>
                <label htmlFor="location">Place You Went:</label>
                <p>
                <input 
                    // onChange={handleChange}
                    type="text" 
                    name="location" 
                    placeholder="Enter location of adventure"
                    // value={formData.}
                />
                </p>
            </div>
            <div>
                <label htmlFor="city">City:</label>
                <p>
                <input 
                    // onChange={handleChange}
                    type="text" 
                    name="city" 
                    placeholder="Enter city"
                    // value={formData.}
                />
                </p>
            </div>
            <div>
                <label htmlFor="date">Date:</label>
                <p>
                <input 
                    // onChange={handleChange}
                    type="text" 
                    name="date" 
                    placeholder="Enter YYYY-MM-DD"
                    // value={formData.}
                />
                </p>
            </div>
            <div>
                <label htmlFor="rating">Rating `1 (lowest) to 5 (highest)`:</label>
                <p>
                <input 
                    // onChange={handleChange}
                    type="number" 
                    name="rating" 
                    min="1"
                    max="5"
                    // value={formData.}
                />
                </p>
            </div>
            <div>
                <label htmlFor="notes">Notes:</label>
                <p>
                <input 
                    // onChange={handleChange}
                    type="textarea" 
                    name="notes" 
                    placeholder="Brief summary"
                    // value={formData.}
                />
                </p>
            </div>
            <div>
                <label htmlFor="image_url">Image Link URL:</label>
                <p>
                <input 
                    // onChange={handleChange}
                    type="text" 
                    name="image_url" 
                    placeholder="add an image of your adventure"
                    // value={formData.}
                />
                </p>
            </div>
        </form>
    )
}

export default AdventureForm