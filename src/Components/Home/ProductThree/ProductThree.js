import React from 'react';
import './ProductThree.css';
import { faShoppingCart, faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
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

const ProductThree = () => {
    return (
        <div className="product_three_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="title">
                            <h2>Hot Products</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">New Arrivals</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Best Sellers</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Sale Items</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="product_item">
                                    <div className="product_img">
                                        <img src={productOne} alt="productFive" />
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
                                        <img src={productThree} alt="productThree" />
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
                                        <img src={productFour} alt="productFour" />
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
                                        <img src={productFive} alt="productFive" />
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
                                        <img src={productSix} alt="productSix" />
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
                                        <img src={productSeven} alt="productSeven" />
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
                                        <img src={productEight} alt="productEight" />
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
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="product_item">
                                    <div className="product_img">
                                        <img src={productNine} alt="productNine" />
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
                                        <img src={productEight} alt="productEight" />
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
                                        <img src={productSeven} alt="productSeven" />
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
                                        <img src={productSix} alt="productSix" />
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
                                        <img src={productSix} alt="productSix" />
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
                                        <img src={productFive} alt="productFive" />
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
                                        <img src={productFour} alt="productFour" />
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
                                        <img src={productThree} alt="productThree" />
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
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="product_item">
                                    <div className="product_img">
                                        <img src={productFour} alt="productFour" />
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
                                        <img src={productThree} alt="productThree" />
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
                                        <img src={productFive} alt="productFive" />
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
                                        <img src={productEight} alt="productEight" />
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
                                        <img src={productSeven} alt="productSeven" />
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
                                        <img src={productSix} alt="productSix" />
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductThree;