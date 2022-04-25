import React from "react";
import Slider from "react-slick";
import './Price.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Price() {
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
        <div className="prices" id="our_prices">
            <h2 className="price_title"><i><span className="our">Our</span> Prices</i>  </h2>
            <Slider {...settings} className="price_slider">
                <div>
                    <div className="card_price1">
                        <div className="card_price_top background1">
                            <p>LEVEL <span>1</span></p>
                        </div>
                        <div className="card_price_bottom">
                        <p>This level is for children from <span className="age">5</span> to <span className="age">10</span> years old, its price is <span className="price_num">10$</span> , for more details please visit us.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card_price1">
                        <div className="card_price_top background2">
                            <p>LEVEL<span>2</span></p>
                        </div>
                        <div className="card_price_bottom">
                            <p>This level is for children from <span className="age">5</span> to <span className="age">10</span> years old, its price is <span className="price_num">10$</span> , for more details please visit us.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card_price1">
                        <div className="card_price_top background3">
                            <p>LEVEL<span>3</span></p>
                        </div>
                        <div className="card_price_bottom">
                            <p>This level is for children from <span className="age">5</span> to <span className="age">10</span> years old, its price is <span className="price_num">10$</span> , for more details please visit us.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card_price1">
                        <div className="card_price_top background1">
                            <p>LEVEL<span>4</span></p>
                        </div>
                        <div className="card_price_bottom">
                            <p>This level is for children from <span className="age">5</span> to <span className="age">10</span> years old, its price is <span className="price_num">10$</span> , for more details please visit us.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card_price1">
                        <div className="card_price_top background2">
                            <p>LEVEL<span>1</span></p>
                        </div>
                        <div className="card_price_bottom">
                            <p>This level is for children from <span className="age">5</span> to <span className="age">10</span> years old, its price is <span className="price_num">10$</span> , for more details please visit us.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card_price1">
                        <div className="card_price_top background3">
                            <p>LEVEL<span>5</span></p>
                        </div>
                        <div className="card_price_bottom">
                            <p>This level is for children from <span className="age">5</span> to <span className="age">10</span> years old, its price is <span className="price_num">10$</span> , for more details please visit us.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card_price1">
                        <div className="card_price_top background1">
                            <p>LEVEL<span>6</span></p>
                        </div>
                        <div className="card_price_bottom">
                            <p>This level is for children from <span className="age">5</span> to <span className="age">10</span> years old, its price is <span className="price_num">10$</span> , for more details please visit us.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card_price1">
                        <div className="card_price_top background2">
                            <p>LEVEL<span>7</span></p>
                        </div>
                        <div className="card_price_bottom">
                            <p>This level is for children from <span className="age">5</span> to <span className="age">10</span> years old, its price is <span className="price_num">10$</span> , for more details please visit us.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card_price1">
                        <div className="card_price_top background3">
                            <p>LEVEL<span>8</span></p>
                        </div>
                        <div className="card_price_bottom">
                            <p>This level is for children from <span className="age">5</span> to <span className="age">10</span> years old, its price is <span className="price_num">10$</span> , for more details please visit us.</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Price;