import React from 'react';
import "./style.css";

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Google Books Search</h1>
                <p className="lead"><a class="nav-link" href="/">Search</a><a class="nav-link" href="/saved">Saved</a></p>
            </div>
        </div>
    )
}

export default Jumbotron

