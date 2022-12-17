import DogCard from './DogCard'

function DogList({dogs}){
    return(
        <div>
            {dogs.map(dog => (
                <DogCard 
                    key={dog.id}
                    dog={dog}
                />
                )
            )}
        </div>
    )
}

export default DogList