import React from "react";
import './Cards_Cover.css'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'

function Cards_Cover() {
    return (
        <div className="cards" >
            <Link className="cards_link" to="/Images"><div className="card">
                <div className="inner">
                    <i className="fa fa-images blue"></i>
                    <p>Learn about the kindergarten</p>
                </div>
            </div></Link>
            <Link className="cards_link" to="/Gallery"><div className="card">
                <div className="inner">
                    <i className="fas fa-skating green"></i>
                    <p>Learn about the activities</p>
                </div>
            </div></Link>
            <HashLink className="cards_link" smooth to="#services"><div className="card">
                <div className="inner">
                    <i className="fa fa-bus purpel"></i>
                    <p>Learn about the services</p>
                </div>
            </div></HashLink>
        </div>
    )
}

export default Cards_Cover;