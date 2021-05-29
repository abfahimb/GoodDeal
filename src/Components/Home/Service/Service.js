import React from 'react';
import './Service.css';
import car from '../../../img/car.png';
import time from '../../../img/time.png';
import doller from '../../../img/dollar.png';
import discount from '../../../img/discount.png';

const Service = () => {
    return (
        <div className="service_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12">
                       <div className="serviece_wrap">
                       <div className="img">
                            <a href="#"><img src={car} alt="car" /></a>
                        </div>
                        <div className="content">
                            <h3>Free Shipping</h3>
                            <p>Free shipping on all order</p>
                        </div>
                       </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                       <div className="serviece_wrap">
                       <div className="img">
                            <a href="#"><img src={time} alt="time" /></a>
                        </div>
                        <div className="content">
                            <h3>Support 24/7</h3>
                            <p>Support 24 hours a day</p>
                        </div>
                       </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                       <div className="serviece_wrap">
                       <div className="img">
                            <a href="#"><img src={doller} alt="doller" /></a>
                        </div>
                        <div className="content">
                            <h3>Money Return</h3>
                            <p>Back Guarantee Under</p>
                        </div>
                       </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                       <div className="serviece_wrap">
                       <div className="img">
                            <a href="#"><img src={discount} alt="discount" /></a>
                        </div>
                        <div className="content">
                            <h3>Order Discount</h3>
                            <p>Onevery order over $150</p>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;