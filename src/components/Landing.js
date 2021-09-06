import React from 'react'
import '../css/landing.css'
import BgImg from '../assets/radiate-bg.jpg'
import Line from '../assets/Line.svg'


const Landing = () => {
    return(
        <div className="body">
            <div>
                <img src={BgImg} className="img" alt="bg-img"/>
            </div>
            <div className="container">
                <div className="nav">
                    <h3 className="brand">Radiate</h3>
                </div>
                <img src={Line} className="line" alt="line"/>
                <div className="header">
                    <div className="col-lg-7 col-md-6 col-sm-6">
                        <h1 className="land-head">The protocol for real time finance</h1>
                    </div>
                    <div className="col-6">
                        <p className="land-text">Recurring payments with our real time finance protocol built on Tezos</p>
                        <a className="btn use-btn" href="https://radiate.netlify.app/" target="_blank" rel="noopener noreferrer">Use DApp</a>
                        <a className="btn docs-btn" href="https://radiate-finance.gitbook.io/radiate-finance/" target="_blank" rel="noopener noreferrer">See Docs</a>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Landing