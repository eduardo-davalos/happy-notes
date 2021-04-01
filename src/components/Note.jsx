import React from "react";

//New Note compoent, recieves props to make it dynamic 
function Note(props){
    return(<div className="note"><h1>{props.title}</h1><p>{props.content}</p></div>);
}
export default Note;