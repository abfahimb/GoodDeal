import React, { useState } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import {adjustQTY, removeFromCart} from '../../../redux/Shopping/shopping-actions'

function CartItem({ product, removeFromCart, adjustQTY }) {
    const [input, setInput]=useState(product.qty);
    const [subtotal, setSubtotal] =useState(0);

    const onChangeHandler=(e) => {
        setInput(e.target.value);
        adjustQTY(product.id, e.target.value);
        const newPrice=product.newPrice;
        const value=e.target.value;
        const totalPrice=(newPrice*value);
        setSubtotal(totalPrice);
    }

    // console.log(subtotal)
    return (
        <tr>
            <td class="product-thumbnail">
                <a href="#"><img src={product.productImage} alt="" /></a>
            </td>
            <td class="product-name">
                <h5><a href="#">{product.productName}</a></h5>
            </td>
            <td class="product-cart-price"><span class="amount">${subtotal}</span></td>
            <td class="cart-quality">
                <div class="product-quality d-flex justify-content-between align-items-center" style={{ width: '80px' }}>
                    <input type="number" min="1" onChange={onChangeHandler} class="form-control text-center" name="qtybutton" value={input} />
                </div>
            </td>
            <td class="product-total"><span>${product.newPrice}</span></td>
            <td class="product-remove"><button class="btn btn-danger" onClick={() => removeFromCart(product.id)}><FontAwesomeIcon icon={faTrash} /></button></td>
        </tr>
    )
}

const mapToDispatch = (dispatch) => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQTY: (id, value) => dispatch(adjustQTY(id, value)),
    }
}
export default connect(null, mapToDispatch)(CartItem);
