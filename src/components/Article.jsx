import React from "react";

const Article = (props) => {
    return (
        <>
        <h2>{props.title}</h2>
        <p>{props.text}</p>        
        </>
    );
}

export default Article;