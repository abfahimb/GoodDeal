import React from 'react';
import './Product.css';
import { faShoppingCart, faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import productOne from '../../../img/product-2.png';
import productTwo from '../../../img/product-1.png';
import productFour from '../../../img/product-3.png';

const Product = () => {
    return (
        <div className="product_area">
            <div className="container">
                <div className="product_title_wrapper">
                    <div className="product_title">
                        <h3>Deal Of The Day</h3>
                    </div>
                    <div className="product_time">
                        <h5>End In:</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="product_item">
                            <div className="product_img">
                                <img src={productOne} alt="productOne" />
                                <div className="product_icon">
                                    <a href="#" className="heart_icon"><FontAwesomeIcon icon={faHeart} /></a>
                                    <a href="#" className="eye_icon"><FontAwesomeIcon icon={faEye} /></a>
                                </div>
                                <div className="product_overlay">
                                    <a href="#"><FontAwesomeIcon icon={faShoppingCart} />  Add to Card</a>
                                </div>
                            </div>
                            <div className="product_content">
                                <h3><a href="#">New Modern Sofa Set</a></h3>
                                <div className="product_price">
                                    <span className="old_price">$80.50 </span>
                                    <span className="new_price">$75.25 </span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="product_item">
                            <div className="product_img">
                                <img src={productTwo} alt="productTwo" />
                                <div className="product_icon">
                                    <a href="#" className="heart_icon"><FontAwesomeIcon icon={faHeart} /></a>
                                    <a href="#" className="eye_icon"><FontAwesomeIcon icon={faEye} /></a>
                                </div>
                                <div className="product_overlay">
                                    <a href="#"><FontAwesomeIcon icon={faShoppingCart} />  Add to Card</a>
                                </div>
                            </div>
                            <div className="product_content">
                                <h3><a href="#">New Modern Sofa Set</a></h3>
                                <div className="product_price">
                                    <span className="old_price">$25.89 </span>
                                    <span className="new_price">$20.25 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="product_item">
                            <div className="product_img">
                                <img src={productOne} alt="productOne" />
                                <div className="product_icon">
                                    <a href="#" className="heart_icon"><FontAwesomeIcon icon={faHeart} /></a>
                                    <a href="#" className="eye_icon"><FontAwesomeIcon icon={faEye} /></a>
                                </div>
                                <div className="product_overlay">
                                    <a href="#"><FontAwesomeIcon icon={faShoppingCart} />  Add to Card</a>
                                </div>
                            </div>
                            <div className="product_content">
                                <h3><a href="#">New Modern Sofa Chair</a></h3>
                                <div className="product_price">
                                    <span className="old_price">$40.50 </span>
                                    <span className="new_price">$45.25 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="product_item">
                            <div className="product_img">
                                <img src={productFour} alt="productOne" />
                                <div className="product_icon">
                                    <a href="#" className="heart_icon"><FontAwesomeIcon icon={faHeart} /></a>
                                    <a href="#" className="eye_icon"><FontAwesomeIcon icon={faEye} /></a>
                                </div>
                                <div className="product_overlay">
                                    <a href="#"><FontAwesomeIcon icon={faShoppingCart} />  Add to Card</a>
                                </div>
                            </div>
                            <div className="product_content">
                                <h3><a href="#">New Modern Sofa Chair</a></h3>
                                <div className="product_price">
                                    <span className="old_price">$40.50 </span>
                                    <span className="new_price">$45.25 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;