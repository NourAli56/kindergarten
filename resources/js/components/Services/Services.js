import React from "react";
import Slider from "react-slick";
import './Services.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import service from './service.svg'

function Services() {
    const settings = {
        dots: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1084,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true
                }
            },
            {
                breakpoint: 917,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },

        ]
    };
    return (
        <div className="servicess" id="services">
            <h2 className="teacher_title"><i><span className="our">Our</span> Services</i>  </h2>
            <Slider {...settings} className="slider">
                <div>
                    <div className="ser">
                        <div className="all_ser">
                            <h2>Services Name</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, consetetur sadipscing elitr.</p>
                            <img src={service} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="ser">
                        <div className="all_ser">
                            <h2>Services Name</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, consetetur sadipscing elitr.</p>
                            <img src={service} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="ser">
                        <div className="all_ser">
                            <h2>Services Name</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, consetetur sadipscing elitr.</p>
                            <img src={service} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="ser">
                        <div className="all_ser">
                            <h2>Services Name</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, consetetur sadipscing elitr.</p>
                            <img src={service} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="ser">
                        <div className="all_ser">
                            <h2>Services Name</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, consetetur sadipscing elitr.</p>
                            <img src={service} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="ser">
                        <div className="all_ser">
                            <h2>Services Name</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, consetetur sadipscing elitr.</p>
                            <img src={service} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="ser">
                        <div className="all_ser">
                            <h2>Services Name</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, consetetur sadipscing elitr.</p>
                            <img src={service} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="ser">
                        <div className="all_ser">
                            <h2>Services Name</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, consetetur sadipscing elitr.</p>
                            <img src={service} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="ser">
                        <div className="all_ser">
                            <h2>Services Name</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, consetetur sadipscing elitr.</p>
                            <img src={service} />
                        </div>
                    </div>
                </div>
            </Slider>
            
        </div>
    )
}
export default Services;