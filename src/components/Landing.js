import React from 'react'
import '../css/landing.css'
import BgImg from '../assets/radiate-bg-.svg'

const Landing = () => {
    return(
        <div className="body">
            <div>
                <img src={BgImg} className="img" />
            </div>
            <div className="container">
                <div className="header">
                    <div className="col-7">
                        <h1 className="land-head">The protocol for real time finance</h1>
                    </div>
                    <div className="col-6">
                        <p className="land-text">Recurring payments with our real time finance protocol built on Tezos</p>
                        <button className="btn use-btn">Use DApp</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Landing