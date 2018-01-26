
import React from "react";
import './Navbar.css';


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
    <div className="container">
    <nav className="navbar">
        <div className="row">
            <div className="col">
                <h1> Welcome to Faces Memory Game! </h1>
            </div>
            </div>
            <div className="row">
            <div className="col">
                <h5> Click on a face to earn points, but don't click the same face more than once! </h5>
            </div>
        </div>
    </nav>
    </div>

export default Navbar;