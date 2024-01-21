import React from 'react';
import 'C:/Users/faiqa/OneDrive/Desktop/Projects/digitialagency/src/index.css';
import demoLogo from 'C:/Users/faiqa/OneDrive/Desktop/Projects/digitialagency/src/images/demoLogo.png';
// import {  Link } from "react-router-dom";

export default function NavBar(props) {
    return (
        <div>
            <nav className="fixed-top navbar navbar-expand-lg navbg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img className='image' src={demoLogo} alt="logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 leftnavbar ">
                            <li className="nav-item">
                                <a className="nav-link spaces" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link spaces" href="/service">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link spaces" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link spaces" href="/achivements">Achivements</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link spaces" href="/testimonial">Testimonial</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link spaces" href="/contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="form-check form-switch">
                        <input onClick={props.changeMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    </div> */}
                </div>
            </nav>
        </div>
    )
}
