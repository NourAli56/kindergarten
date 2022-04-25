import React from "react";
import './Gallery.css'
import image1 from './k1.jpg'
import image2 from './k2.jpg'
import image3 from './k3.jpg'
import {Link} from 'react-router-dom'

function Gallery(){
    return(
        <div className="gallery" id="gallery">
            <h1 className="title"><i><span className="our">Our</span> GALLERY</i></h1>
            <div className="Images">
                <div className="image">
                    <img className="imgg" src={image1} />
                </div>
                <div className="image">
                    <img className="imgg" src={image3} />
                </div>
                <div className="image">
                    <img className="imgg" src={image2} />
                </div>
            </div>
            <Link to="/Images"><button className="gallery_btn">VIEW MORE</button></Link>
        </div>
    )
}

export default Gallery