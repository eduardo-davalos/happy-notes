//Importing react functionality
import React from "react";

//Importing the 3 components to use
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
//Importing the notes db "json"
import notes from "../notes";

//Function that returns the App content
//here we are using .map with an arrow function to loop trough all the array and create an array of Note to show on screen
function App(){
    return (
    <div>
        <Header/>
        {notes.map(note=>(<Note key={note.id} title={note.title} content={note.content}/>))}
        <Footer/>
    </div>);
}
//Export the function as a Component
export default App;

