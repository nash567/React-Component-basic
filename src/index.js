//import react and ReactDom
import React from "react"
import ReactDom from "react-dom"



// create a react component
const App = () => {
    return <div>Hi there!</div>;

}



//take react component and show it on the screen
ReactDom.render( < App / > , document.getElementById("root"))