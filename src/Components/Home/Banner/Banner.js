import React from 'react';
import './Banner.css';
import bannerOne from '../../../img/banner-1.png';
import bannerTwo from '../../../img/banner-2.png';
import bannerThree from '../../../img/banner-3.png';

const Banner = () => {
    return (
        <div className="banner_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="banner_wrap">
                            <div className="banner_content">
                                <h5>NEW ARRIVAL</h5>
                                <h3>Office Chair</h3>
                                <a href="#">Shop Now</a>
                            </div>
                            <div className="banner_img">
                                <img src={bannerOne} alt="bannerOne" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="banner_wrap">
                            <div className="banner_content">
                                <h5>NEW ARRIVAL</h5>
                                <h3>Hanging Chair</h3>
                                <a href="#">Shop Now</a>
                            </div>
                            <div className="banner_img">
                                <img src={bannerTwo} alt="bannerTwo" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="banner_wrap">
                            <div className="banner_content">
                                <h5>NEW ARRIVAL</h5>
                                <h3>Folding Chair</h3>
                                <a href="#">Shop Now</a>
                            </div>
                            <div className="banner_img">
                                <img src={bannerThree} alt="bannerThree" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;