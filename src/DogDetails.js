import AdventureCard from "./AdventureCard"
import AdventureForm from "./AdventureForm"

function DogDetails({dog}){
    return(
        <div className="card" id={dog.id}>
            <h3 className="Dog">
                Dog: {dog.name}
            </h3>
            <img className="dogImage" src= {dog.img_url} alt={dog.name} />
            <h4 className="description">
                Personality: {dog.personality}
            </h4>
            <h4 className="adventures">
                I have been on {dog.adventures.length} adventures!
            </h4>
        </div>
    )
}

export default DogDetails