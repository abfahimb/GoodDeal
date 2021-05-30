import React from 'react';
import './Footer.css';
import payment from '../../../img/payment.png';
import logo from '../../../img/logo.jpg';

function Footer() {
    return (
        <footer class="footer-area">
            <div class="bg-gray-2">
                <div class="container">
                    <div class="footer-top pt-80 pb-35">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div class="footer-widget footer-about mb-40">
                                    <div class="footer-logo">
                                        <a href="index.html"><img src={logo} alt="logo"/></a>
                                    </div>
                                        <p>Lorem ipsum dolor sit amet, cons adipi elit, sed do eiusmod tempor incididunt ut aliqua.</p>
                                        <div class="payment-img">
                                            <a href="#"><img src={payment} alt="logo"/></a>
                                    </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                                        <div class="footer-widget footer-widget-margin-1 footer-list mb-40">
                                            <h3 class="footer-title">Information</h3>
                                            <ul>
                                                <li><a href="about-us.html">About Us</a></li>
                                                <li><a href="#">Delivery Information</a></li>
                                                <li><a href="#">Privacy Policy</a></li>
                                                <li><a href="#">Terms & Conditions</a></li>
                                                <li><a href="#">Customer Service</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-6 col-sm-6 col-12">
                                        <div class="footer-widget footer-list mb-40">
                                            <h3 class="footer-title">My Accound</h3>
                                            <ul>
                                                <li><a href="my-account.html">My Account</a></li>
                                                <li><a href="#">Order History</a></li>
                                                <li><a href="wishlist.html">Wish List</a></li>
                                                <li><a href="#">Newsletter</a></li>
                                                <li><a href="#">Order History</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div class="footer-widget footer-widget-margin-2 footer-address mb-40">
                                            <h3 class="footer-title">Get in touch</h3>
                                            <ul>
                                                <li><span>Address: </span>Your address goes here </li>
                                                <li><span>Telephone Enquiry:</span> (012) 345 6789</li>
                                                <li><span>Email: </span>demo@example.com</li>
                                            </ul>
                                            <div class="open-time">
                                                <p>Open : <span>8:00 AM</span> - Close : <span>18:00 PM</span></p>
                                                <p>Saturday - Sunday : Close</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-3">
                        <div class="container">
                            <div class="footer-bottom copyright text-center bg-gray-3">
                                <p>Copyright ©2021 All rights reserved | Made with <i class="fa fa-heart"></i> by <a href=""> Team 167</a>.</p>
                            </div>
                        </div>
                    </div>
        </footer>
    )
}

export default Footer
