
import React from 'react';

function SaveListItem(props) {
    const {title, authors, image, link, description, deleteGoogleBook} = props
    return (
        <div>
            <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                    <img src={image} style={{maxWidth: "100px"}} alt="jumbotron"/>
                    <h5 className="card-title" style={{margin: "10px 0"}}>{title}</h5>
                    <p className="card-text" >{description}</p>
                    <p style={{fontStyle: "italic"}}>Author(s): {authors}</p>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="btn submitBtn" style={{backgroundColor: "#048481", marginRight: "6px"}}>View Book</a>
                    <button onClick={deleteGoogleBook.bind(this, props)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default SaveListItem;