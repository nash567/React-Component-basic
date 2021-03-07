//import react and ReactDom
import React from "react"
import ReactDom from "react-dom"
import CommentDetail from "./CommentDetail"
import ApprovalCard from "./ApprovalCard"

// create a react component
const App = () => {
    return (
    <div className="ui container comments">
        <ApprovalCard >
        <CommentDetail author="sammy" timeAgo="12pm"></CommentDetail>
        </ApprovalCard>
        <ApprovalCard >
        <CommentDetail author="Alex" timeAgo="3am"></CommentDetail>
        </ApprovalCard>

    </div>
    );

}



//take react component and show it on the screen
ReactDom.render( < App / > , document.getElementById("root"))