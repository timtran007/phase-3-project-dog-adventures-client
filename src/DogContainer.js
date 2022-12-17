import DogList from "./DogList"

function DogContainer({dogs}) {

    const dogName = dogs.map(dog => dog.name)

    const displayHeader = dogs.length > 1 ? "My Dogs" : {dogName}
    return(
        <div>
            <h2 style={{textAlign: "center", marginTop: 50}}>{displayHeader}</h2>
            <DogList dogs={dogs}/>
        </div>
    )
}

export default DogContainer