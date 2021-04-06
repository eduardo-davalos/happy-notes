import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

//New Note compoent, recieves props to make it dynamic 
function Note(props){

    function handleSubmit(event){
        event.preventDefault();
    }

    return(
    <form onSubmit={handleSubmit} className="note">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <button onClick={()=>{props.deleteNote(props.id);}}><DeleteIcon/></button>
    </form>);
}
export default Note;