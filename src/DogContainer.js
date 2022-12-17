import DogList from "./DogList"

function DogContainer({dogs}) {
    return(
        <div>
            <DogList dogs={dogs}/>
        </div>
    )
}

export default DogContainer