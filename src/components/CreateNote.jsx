import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateNote(props){
    const [nota, setNota] = useState({title:"",content:""});
    const [showCreateNote, setShowCreateNote] = useState(false);

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

    function handleTextAreaFocus() {
            setShowCreateNote(true);
    }

    return (
    <form onSubmit={handleSubmit} className="noteInput">
        {showCreateNote?<input name="title" value={nota.title} onChange={onChangeHandler} placeholder="Title"></input>:null}
        <textarea onFocus={handleTextAreaFocus} name="content"  value={nota.content} onChange={onChangeHandler} placeholder="Take a note ..." rows={showCreateNote?"3":"1"}></textarea>
        <Zoom in={showCreateNote}>
            <Fab onClick={()=>{props.addNote(nota);}}><AddIcon/></Fab>
        </Zoom>
    </form>);

}
export default CreateNote;