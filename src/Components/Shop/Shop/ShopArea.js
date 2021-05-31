import React from 'react';
import './ShopArea.css';
import { faShoppingCart, faHeart, faEye, faTh, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import productOne from '../../../img/product-1.png';
import productTwo from '../../../img/product-2.png';
import productThree from '../../../img/product-3.png';
import productFour from '../../../img/product-4.png';
import productFive from '../../../img/product-5.png';
import productSix from '../../../img/product-6.png';
import productSeven from '../../../img/product-7.png';
import productEight from '../../../img/product-8.png';
import productNine from '../../../img/product-9.png';




const ShopArea = () => {

    return (
        <div className="shop_area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="shop_area_topbar">
                            <div className="shop_area_left">
                                <div className="showing_item">
                                    <span>Showing 1–12 of 60 results</span>
                                </div>
                            </div>
                            <div className="shop_area_right d-flex align-items-center">
                                <div className="shop_sorting_area">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Default Sorting</option>
                                        <option value="1">Sorting</option>

                                    </select>
                                </div>
                                <div className="shop_view_area">
                                    <a href="#" className="gride"><FontAwesomeIcon icon={faTh} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faBars} /></a>
                                </div>
                            </div>
                        </div>
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
                                    <button className="btn text-white"><FontAwesomeIcon icon={faShoppingCart} />Add to Card</button>
                                </div>
                            </div>
                            <div className="product_content">
                                <h3><a href="#">Interior moderno render</a></h3>
                                <div className="product_price">
                                    <span className="old_price">$25.89</span>
                                    <span className="new_price">$20.25</span>
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
                                    <button className="btn text-white"><FontAwesomeIcon icon={faShoppingCart} />Add to Card</button>
                                </div>
                            </div>
                            <div className="product_content">
                                <h3><a href="#">Interior moderno render</a></h3>
                                <div className="product_price">
                                    <span className="old_price">$25.89</span>
                                    <span className="new_price">$20.25</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="product_item">
                            <div className="product_img">
                                <img src={productThree} alt="productThree" />
                                <div className="product_icon">
                                    <a href="#" className="heart_icon"><FontAwesomeIcon icon={faHeart} /></a>
                                    <a href="#" className="eye_icon"><FontAwesomeIcon icon={faEye} /></a>
                                </div>
                                <div className="product_overlay">
                                    <button className="btn text-white"><FontAwesomeIcon icon={faShoppingCart} />Add to Card</button>
                                </div>
                            </div>
                            <div className="product_content">
                                <h3><a href="#">Interior moderno render</a></h3>
                                <div className="product_price">
                                    <span className="old_price">$25.89</span>
                                    <span className="new_price">$20.25</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="product_item">
                            <div className="product_img">
                                <img src={productFour} alt="productFour" />
                                <div className="product_icon">
                                    <a href="#" className="heart_icon"><FontAwesomeIcon icon={faHeart} /></a>
                                    <a href="#" className="eye_icon"><FontAwesomeIcon icon={faEye} /></a>
                                </div>
                                <div className="product_overlay">
                                    <button className="btn text-white"><FontAwesomeIcon icon={faShoppingCart} />Add to Card</button>
                                </div>
                            </div>
                            <div className="product_content">
                                <h3><a href="#">Interior moderno render</a></h3>
                                <div className="product_price">
                                    <span className="old_price">$25.89</span>
                                    <span className="new_price">$20.25</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="product_item">
                            <div className="product_img">
                                <img src={productFive} alt="productFive" />
                                <div className="product_icon">
                                    <a href="#" className="heart_icon"><FontAwesomeIcon icon={faHeart} /></a>
                                    <a href="#" className="eye_icon"><FontAwesomeIcon icon={faEye} /></a>
                                </div>
                                <div className="product_overlay">
                                    <button className="btn text-white"><FontAwesomeIcon icon={faShoppingCart} />Add to Card</button>
                                </div>
                            </div>
                            <div className="product_content">
                                <h3><a href="#">Interior moderno render</a></h3>
                                <div className="product_price">
                                    <span className="old_price">$25.89</span>
                                    <span className="new_price">$20.25</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="product_item">
                            <div className="product_img">
                                <img src={productSix} alt="productSix" />
                                <div className="product_icon">
                                    <a href="#" className="heart_icon"><FontAwesomeIcon icon={faHeart} /></a>
                                    <a href="#" className="eye_icon"><FontAwesomeIcon icon={faEye} /></a>
                                </div>
                                <div className="product_overlay">
                                    <button className="btn text-white"><FontAwesomeIcon icon={faShoppingCart} />Add to Card</button>
                                </div>
                            </div>
                            <div className="product_content">
                                <h3><a href="#">Interior moderno render</a></h3>
                                <div className="product_price">
                                    <span className="old_price">$25.89</span>
                                    <span className="new_price">$20.25</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="product_item">
                            <div className="product_img">
                                <img src={productSeven} alt="productSeven" />
                                <div className="product_icon">
                                    <a href="#" className="heart_icon"><FontAwesomeIcon icon={faHeart} /></a>
                                    <a href="#" className="eye_icon"><FontAwesomeIcon icon={faEye} /></a>
                                </div>
                                <div className="product_overlay">
                                    <button className="btn text-white"><FontAwesomeIcon icon={faShoppingCart} />Add to Card</button>
                                </div>
                            </div>
                            <div className="product_content">
                                <h3><a href="#">Interior moderno render</a></h3>
                                <div className="product_price">
                                    <span className="old_price">$25.89</span>
                                    <span className="new_price">$20.25</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="product_item">
                            <div className="product_img">
                                <img src={productEight} alt="productEight" />
                                <div className="product_icon">
                                    <a href="#" className="heart_icon"><FontAwesomeIcon icon={faHeart} /></a>
                                    <a href="#" className="eye_icon"><FontAwesomeIcon icon={faEye} /></a>
                                </div>
                                <div className="product_overlay">
                                    <button className="btn text-white"><FontAwesomeIcon icon={faShoppingCart} />Add to Card</button>
                                </div>
                            </div>
                            <div className="product_content">
                                <h3><a href="#">Interior moderno render</a></h3>
                                <div className="product_price">
                                    <span className="old_price">$25.89</span>
                                    <span className="new_price">$20.25</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="product_item">
                            <div className="product_img">
                                <img src={productNine} alt="productNine" />
                                <div className="product_icon">
                                    <a href="#" className="heart_icon"><FontAwesomeIcon icon={faHeart} /></a>
                                    <a href="#" className="eye_icon"><FontAwesomeIcon icon={faEye} /></a>
                                </div>
                                <div className="product_overlay">
                                    <button className="btn text-white"><FontAwesomeIcon icon={faShoppingCart} />Add to Card</button>
                                </div>
                            </div>
                            <div className="product_content">
                                <h3><a href="#">Interior moderno render</a></h3>
                                <div className="product_price">
                                    <span className="old_price">$25.89</span>
                                    <span className="new_price">$20.25</span>
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
                                    <button className="btn text-white"><FontAwesomeIcon icon={faShoppingCart} />Add to Card</button>
                                </div>
                            </div>
                            <div className="product_content">
                                <h3><a href="#">Interior moderno render</a></h3>
                                <div className="product_price">
                                    <span className="old_price">$25.89</span>
                                    <span className="new_price">$20.25</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="product_item">
                            <div className="product_img">
                                <img src={productFive} alt="productFive" />
                                <div className="product_icon">
                                    <a href="#" className="heart_icon"><FontAwesomeIcon icon={faHeart} /></a>
                                    <a href="#" className="eye_icon"><FontAwesomeIcon icon={faEye} /></a>
                                </div>
                                <div className="product_overlay">
                                    <button className="btn text-white"><FontAwesomeIcon icon={faShoppingCart} />Add to Card</button>
                                </div>
                            </div>
                            <div className="product_content">
                                <h3><a href="#">Interior moderno render</a></h3>
                                <div className="product_price">
                                    <span className="old_price">$25.89</span>
                                    <span className="new_price">$20.25</span>
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
                                    <button className="btn text-white"><FontAwesomeIcon icon={faShoppingCart} />Add to Card</button>
                                </div>
                            </div>
                            <div className="product_content">
                                <h3><a href="#">Interior moderno render</a></h3>
                                <div className="product_price">
                                    <span className="old_price">$25.89</span>
                                    <span className="new_price">$20.25</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopArea;