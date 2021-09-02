import React from 'react'
import '../css/navbar.css'
import Line from '../assets/Line.svg'

const NavBar = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <h3 className="brand">Radiate</h3>
                    <img src={Line} className="line" />
                </div>
            </div>
        </div>
    );
}

export default NavBar