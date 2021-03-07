import React from "react";

const CommentDetail = (props) => {
    
    return ( 
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src="https://content.invisioncic.com/v286142/monthly_2020_07/large.png.5eeb4e7900429d4fbea8789a3194c030.png"></img>
            </a>
            <div className="content">
                <a href="/" className="author">{props.author}</a>
                <div className="metadata">
                    <span className="date">Today at {props.timeAgo} </span>
                </div>
                <div className="text">Nice blog Post</div>
            </div>
        </div>

    )
}

export default CommentDetail;