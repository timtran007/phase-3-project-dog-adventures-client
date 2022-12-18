
function EditForm({dog}) {
    const options = dog.adventures.map(adventure =>
        <option key={adventure.id} value={adventure.location}>{adventure.location}</option>
    )

    return(
        <form>
            <h4>Edit my adventure:</h4>
            <div>
                <select name="selectAdventure">
                    {options}
                </select>
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
        </form>
    )
}

export default EditForm