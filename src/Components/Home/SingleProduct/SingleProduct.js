import React from 'react';
import { faShoppingCart, faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import {addToCart} from '../../../redux/Shopping/shopping-actions'

function SingleProduct({product, addToCart}) {

    
    return (
        <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="product_item">
                <div className="product_img">
                    <img src={product.productImage} alt="productOne" />
                    <div className="product_icon">
                        <a href="#" className="heart_icon"><FontAwesomeIcon icon={faHeart} /></a>
                        <a href="#" className="eye_icon"><FontAwesomeIcon icon={faEye} /></a>
                    </div>
                    <div  className="product_overlay">
                        <button className="btn text-white" onClick={() =>addToCart(product.id)}><FontAwesomeIcon icon={faShoppingCart} />Add to Card</button>
                    </div>
                </div>
                <div className="product_content">
                    <h3><a href="#">{product.productName}</a></h3>
                    <div className="product_price">
                        <span className="old_price">{product.oldPrice} </span>
                        <span className="new_price">{product.newPrice} </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapToDispatch= dispatch =>{
    return {
        addToCart: (id) =>dispatch(addToCart(id))
    }
}

export default connect(null, mapToDispatch)(SingleProduct)
