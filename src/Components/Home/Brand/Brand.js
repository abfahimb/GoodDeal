import React from 'react';
import './Brand.css';
import Slider from "react-slick";
import brandOne from '../../../img/brand-logo-1.png';
import brandTwo from '../../../img/brand-logo-2.png';
import brandThree from '../../../img/brand-logo-3.png';
import brandFour from '../../../img/brand-logo-4.png';
import brandFive from '../../../img/brand-logo-5.png';



const Brand = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };
    return (
        <div className="brand_area">
            <div className="container">
                <div className="brand_bg">
                <Slider {...settings}>
                    <div>
                        <img src={brandOne} alt="brandOne" />
                    </div>
                    <div>
                        <img src={brandTwo} alt="brandTwo" />
                    </div>
                    <div>
                        <img src={brandThree} alt="brandThree" />
                    </div>
                    <div>
                        <img src={brandFour} alt="brandFour" />
                    </div>
                    <div>
                        <img src={brandFive} alt="brandFive" />
                    </div>
                    <div>
                        <img src={brandFive} alt="brandFive" />
                    </div>
                    <div>
                        <img src={brandTwo} alt="brandTwo" />
                    </div>
                </Slider>
                </div>
            </div>
        </div>
    );
};

export default Brand;