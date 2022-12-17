
function AdventureCard({dog}){
    debugger
    const adventuresToDisplay = dog.adventures.map(adventure =>{
        return(
            <div className="card">
                <h3 className="dog">
                Adventure: {adventure.location}
                </h3>
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