//Importing react functionality
import React from "react";

//Importing the 3 components to use
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

//Function that returns the App content
function App(){
    return (
    <div>
        <Header/><Note/><Footer/>
    </div>);
}
//Export the function as a Component
export default App;

