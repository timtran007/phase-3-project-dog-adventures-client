import DogDetail from '../src/styles/DogDetail.css'
import {Link} from 'react-router-dom'



function DogCard({dog}){
    const dogID = dog.id

    return(
        <div className="card" id={dog.id}>
            <h3 className="dog">
                Dog: {dog.name}
            </h3>
            <img className="dogImage" src= {dog.img_url} alt={dog.name} />
            <h4 className="description">
                Personality: {dog.personality}
            </h4>
            <h4 className="adventures">
                I have been on {dog.adventures.length} adventures!
            </h4>
            <button style={{padding: "1%"}} key={dog.id}>
                <Link to={`/dogs/${dogID}`}>My Adventures with {dog.name}</Link>
            </button>
        </div>
    )
}

export default DogCard