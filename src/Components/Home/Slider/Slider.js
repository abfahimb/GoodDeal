import React from 'react';
import './Slider.css'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import singleProduct from '../../../img/single-product.png';

const Slider = () => {
    return (
        <div className="slider_area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="slider_content">
                            <h3>new arrival</h3>
                            <h1>Summer<br></br>Collection</h1>
                            <button>Shop Now <FontAwesomeIcon icon={faArrowCircleRight} /></button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="slider_img">
                            <img src={singleProduct} alt="single-product" />
                            <div className="slider_round">
                                <h5>30% <span>OFF</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;