//importing react functionality
import React from "react";

//creating a funcion as a component
function Footer(){
    //getting current year
    const year = new Date().getFullYear();
    const nombre = "Edavalos";
    //return a footer with name an current year
    return(<footer>{nombre} - {year}</footer>);
}
//exporting footer as a component.
export default Footer;