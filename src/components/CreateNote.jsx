import React, { useState } from "react";

function CreateNote(props){
    const [nota, setNota] = useState({title:"",content:""});

    function onChangeHandler (event){
        const {name,value} = event.target;

        setNota(prevValue => {
            return {...prevValue, [name]:value};
        });
    }

    function handleSubmit(event){
        setNota({title:"",content:""});
        event.preventDefault();
    }

    return <form onSubmit={handleSubmit} className="noteInput">
    <input name="title" value={nota.title} onChange={onChangeHandler} placeholder="Title"></input>
    <textarea name="content"  value={nota.content} onChange={onChangeHandler} placeholder="Take a note ..." rows="3"></textarea>
    <button onClick={()=>{props.addNote(nota);}}>Add </button>
    </form>

}
export default CreateNote;