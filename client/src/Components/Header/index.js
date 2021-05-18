import React from 'react';
import "./style.css";

function Header() {

    return (

        <header className="container-fluid">
            <nav className="navbar navbar-expand-lg header-nav">
                <div>
                    <div className="container-md">
                        <button className="navbar-brand-name" href="#">Google Books Search and Save</button>
                        <div class="navbar-collapse collapse justify-content-stretch">
                        </div>
                    </div>
                </div>
            </nav>
        </header >
    )
}

export default Header;