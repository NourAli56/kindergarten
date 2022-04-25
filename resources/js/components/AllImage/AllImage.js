import React,{useState} from 'react';
import './AllImage.css'
import Nav from '../Navbar/Nav';
import Footer from '../footer/Footer';
import img1 from './imagee/1.jpg'
import img2 from './imagee/2.jpg'
import img3 from './imagee/3.jpg'
import img4 from './imagee/4.jpg'
import img5 from './imagee/5.jpg'
import img6 from './imagee/6.png'
import img9 from './imagee/9.jpg'
import img10 from './imagee/10.jpg'

function AllImage() {
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
            imgSrc: img9
        },
        {
            id:8,
            imgSrc: img10
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
            <div className={model? "model open" : "model"}>
                <img src={tempimgSrc} />
                <i className="fa fa-times closee" onClick={()=>setModel(false) }></i>
            </div>
            <div className='allImage'>
                {
                    data.map((item,index)=>{
                        return(
                            <div className='pics' key={index} onClick={()=> getImg(item.imgSrc)}>
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

export default AllImage;