
function DeleteButton({adventure, onDeleteAdventure}){
    function handleDeleteClick(e){
        debugger
        // if(adventure.id === parseInt(e.target.id))
        fetch(`http://localhost:9292/adventures/${adventure.id}`,{
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then((deletedAdventure) => onDeleteAdventure(deletedAdventure))
    }

    return(
        <button onClick={handleDeleteClick}>
            <span id={adventure.id}>
              🗑
            </span>
          </button>
    )
}

export default DeleteButton