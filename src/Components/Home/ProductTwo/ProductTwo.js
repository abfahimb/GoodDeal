import React from 'react';
import './ProductTwo.css';
import {faHeart, faRandom} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import singleProduct from '../../../img/single-product.png';

const ProductTwo = () => {
    return (
        <div className="product_area_two">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src={singleProduct} alt="singleProduct" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                       <div className="content">
                           <h2>Modern Chair</h2>
                           <h3>$20.25</h3>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore mt aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                           <div className="product_color">
                               <span>Color:</span>
                               <ul>
                                   <li><a href="#" title="pink" className="pink">pink</a></li>
                                   <li><a href="#" title="pink" className="yellow">pink</a></li>
                                   <li><a href="#" title="pink" className="purple">pink</a></li>
                               </ul>
                           </div>
                          <div className="product_wrapper">
                          <div className="product_quantity">
                               <button className="dec_quantity">-</button>
                               <input type="text"  />
                               <button className="inc_quantity">+</button>
                           </div>
                           <div className="btn">
                               <a href="#">Add to Card</a>
                           </div>
                           <div className="wish_list">
                               <a href="#"><FontAwesomeIcon icon={faHeart} /></a>
                               <a href="#"><FontAwesomeIcon icon={faRandom} /></a>
                           </div>
                          </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductTwo;