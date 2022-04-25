import React,{useState} from 'react';
import './Inner_Images.css'
import Nav from '../Navbar/Nav';
import Footer from '../footer/Footer';
import img1 from './image/1.jpg'
import img2 from './image/2.jpg'
import img3 from './image/3.jpg'
import img4 from './image/4.jpg'
import img5 from './image/5.jpg'
import img6 from './image/6.jpeg'
import img7 from './image/7.jpg'
import img8 from './image/8.jpg'
import img9 from './image/9.jpg'

function Inner_Images() {
    let data=[
        {
            id:1,
            imgSrc: img1
        },
        {
            id:2,
            imgSrc: img2
        },
        {
            id:3,
            imgSrc: img3
        },
        {
            id:4,
            imgSrc: img4
        },
        {
            id:5,
            imgSrc: img5
        },
        {
            id:6,
            imgSrc: img6
        },
        {
            id:7,
            imgSrc: img7
        },
        {
            id:8,
            imgSrc: img8
        },
        {
            id:9,
            imgSrc: img9
        },
    ]
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return (
        <>
            <Nav />
            <div className={model? "model1 open1" : "model1"}>
                <img src={tempimgSrc} />
                <i className="fa fa-times closee1" onClick={()=>setModel(false) }></i>
            </div>
            <div className='allImage1'>
                {
                    data.map((item,index)=>{
                        return(
                            <div className='pics1' key={index} onClick={()=> getImg(item.imgSrc)}>
                                <img src={item.imgSrc} />
                            </div>
                        )
                    })
                }
            </div>
            <Footer />
        </>
    )
}

export default Inner_Images;