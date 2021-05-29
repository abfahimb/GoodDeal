import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="header_top">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6">
                            <p>Default Welcome Msg!</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="language">
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