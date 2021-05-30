import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className="" style={{position:'fixed', top:'0px', zIndex:'5', width:'100%'}}>
            <div className="header_top">
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-6 col-md-6">
                            <p style={{fontSize:'14px'}}>Default Welcome Msg!</p>
                        </div>
                        <div className="col-lg-6 col-md-6 " style={{display: 'contents'}}>
                            <div className="language" style={{fontSize:'14px'}}>
                                <a href="#">$Doller (Us)</a>
                                <a href="#">English</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;