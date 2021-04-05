//Importing react functionality
import React, { useState } from "react";

//Importing the 3 components to use
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";
//Importing the notes db "json"
import notes from "../notes";

//Function that returns the App content
//here we are using .map with an arrow function to loop trough all the array and create an array of Note to show on screen
function App(){
    const [notas, setNotas] = useState(notes);

    function addToNotes(nota){        
        setNotas(prevValue=>{
            return [...prevValue,nota];
        });
    }

    function deleteNote(id){
        setNotas(prevValue=>{
            return notas.filter((nota,index) =>{
                return index!==id;
            });
        });
    }

    return (
    <div>
        <Header/>
        <CreateNote addNote={addToNotes}/>
        {notas.map((note, index)=>(<Note deleteNote={deleteNote} key={index} id={index} title={note.title} content={note.content}/>))}
        <Footer/>
    </div>);
}
//Export the function as a Component
export default App;

