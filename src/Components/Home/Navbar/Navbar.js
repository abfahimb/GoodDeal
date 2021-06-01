import React, { useEffect, useState } from 'react';
import { faSearch,faUserCircle,faHeart,faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import {connect} from 'react-redux';

const Navbar = ({cart}) => {
    const [cartCount, setCartCount]=useState(0);

    useEffect(()=>{
        let count=0;
        cart.forEach((item)=>{
            count += item.qty;
        });
        setCartCount(count);
    }, [cart, cartCount])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
            <div className="container">
                <a className="navbar-brand" href="#">GOOD DEAL</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link active" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/shop" className="nav-link active" >Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blog" className="nav-link active" >Blog</Link>
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
                        <li className="nav-item d-flex">
                            <Link to="/viewCart" className="nav-link"><FontAwesomeIcon icon={faShoppingCart} /></Link>
                            <Link to="/viewCart"><p style={{border: '1px solid #000', height: '24px', width: '24px', borderRadius: '50%', textAlign: 'center', paddingTop: '2px', backgroundColor:'#131212', color: 'white', marginLeft: '-5px', fontSize: '14px'}}>{cartCount}</p></Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        
    );
};


const mapStateToProps = state=>{
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Navbar);