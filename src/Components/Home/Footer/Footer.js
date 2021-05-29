import React from 'react';
import './Footer.css';
import payment from '../../../img/payment.png';

const Footer = () => {
    return (
        <footer className="footer_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer_content">
                            <div className="footer_title">
                                <h3>Good Deal</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet, cons adipi elit, sed do eiusmod tempor incididunt ut aliqua.</p>
                            <div className="payment_img">
                                <img src={payment} alt="payment" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">

                        <div className="footer_title">
                            <h3>Information</h3>
                        </div>
                        <div className="footer_content">
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Delivery Information</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Customer Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="footer_title">
                            <h3>My Accound</h3>
                        </div>
                        <div className="footer_content">
                            <ul>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">Order History</a></li>
                                <li><a href="#">Wish List</a></li>
                                <li><a href="#">Newsletter</a></li>
                                <li><a href="#">Order History</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer_title">
                            <h3>Get in touch</h3>
                        </div>
                        <div className="getInTouch_content">
                            <ul>
                                <li><span> Address:</span> Your address goes here</li>
                                <li><span> Telephone Enquiry:</span>(012) 345 6789</li>
                                <li><span>Email: </span> demo@example.com</li>
                            </ul>
                            <div className="open_time">
                                <p>Open : <span>8:00 AM </span>- Close : <span>18:00 PM</span></p>
                                <p>Saturday - Sunday : Close</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;