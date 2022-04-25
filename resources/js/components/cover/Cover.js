import React from "react";
import './Cover.css'
import {HashLink} from 'react-router-hash-link'

function Cover() {
    return (
        <div className="cover" id="cover">
            <h2>WELCOME TO</h2>
            <h1>Al Amani Kindergarten ...</h1>
            <HashLink smooth to="#about"><button>Get Start</button></HashLink>
        </div>

    )
}

export default Cover;