import React from 'react';
import './BannerTwo.css';
import bannerFour from '../../../img/banner-4.png';
import bannerFive from '../../../img/banner-5.png';

const BannerTwo = () => {
    return (
        <div className="banner_area_two">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-sm-12">
                    <div className="banner_wrap">
                            <div className="banner_content">
                                <span>Sale 30%</span>
                                <h2>New Furniture</h2>
                                <p>Lorem ipsum dolor sit amet consecte adipisicing elit sed do</p>
                                <a href="#" className="banner_btn">Shop Now</a>
                            </div>
                            <div className="banner_img">
                                <img src={bannerFour} alt="bannerFour" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12">
                        <div className="img">
                            <img src={bannerFive} alt="bannerFive" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerTwo;