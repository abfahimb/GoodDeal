import React from 'react';
import { faSearch,faUserCircle,faHeart,faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-5">
            <div className="container">
                <a className="navbar-brand" href="#">GOOD DEAL</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>
                    <div className="nav_icon">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link"><FontAwesomeIcon icon={faSearch} /></a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link"><FontAwesomeIcon icon={faUserCircle} /></a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link"><FontAwesomeIcon icon={faHeart} /></a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link"><FontAwesomeIcon icon={faShoppingCart} /></a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        
    );
};

export default Navbar;