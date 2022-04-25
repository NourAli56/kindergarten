import React from "react";
import './About_me.css'
import Image from './about_me.jpg'

function About_me() {
    return (
        <div className="about" id="about">
            <div className="all">
                <img src={Image} />
                <div className="both">
                    <h1 className="about_title"><i>WELCOME TO BEST NURSERY</i></h1>
                    <p>We show you the KG_MS Kindergarten Center, including its communication and follow-up services for children and activities where you can see everything that is new about kindergarten through this website, the founder of the kindergarten: <strong>Fadi Al-Ayas</strong>, and there is an elite of the educational staff: <strong>Nour Al-Ali , Hiba rihan.....</strong>  </p>
                </div>
            </div>
        </div>
    )
}

export default About_me;