import React from "react";
import './Nav.css'
import { Link } from "react-router-dom";
import {HashLink} from 'react-router-hash-link'
import logo from './logo.jpg'

const Nav = () => {
    return (
        <header>

            <input type="checkbox" name="" id="toggler" />
            <label for="toggler" className="fa fa-bars"></label>

            <a href="#" className="logo"><img src={logo} /></a>

            <nav class="navbar">
                <Link to="/"><i>Home</i></Link>
                <HashLink smooth to="#services"><i>Services</i> </HashLink>
                <HashLink smooth to="#activity"><i>Activities</i> </HashLink>
                <HashLink smooth to="#our_prices"><i>Prices</i> </HashLink>
                <HashLink smooth to="#Location"><i>Location</i> </HashLink>
            </nav>

            <div class="icons">
                <HashLink smooth to="#gallery" className="fa fa-images"></HashLink>
                <HashLink smooth to="#Location"><i className="fas fa-map-marker-alt"></i></HashLink>
                <Link to="/read" className="fa fa-table"></Link>
            </div>

        </header>
    )
}

export default Nav;