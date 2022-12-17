import DogDetails from './DogDetails'

function DogList({dogs}){
    return(
        <div>
            {dogs.map(dog => {
                <DogDetails 
                    key={dog.id}
                    dog={dog}
                />
            }
            )}

        </div>
    )
}

export default DogList