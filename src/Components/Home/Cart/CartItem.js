import React, { useState } from 'react';
import {faTrash, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CartItem(props) {
    console.log(props)

    const { product, removeFromCart } = props;
    const { productName, newPrice, productImage } = props.product.item;
    const [value, setValue] = useState(1)

    
    const handleIncrement = () => {
        setValue(value+1)
    }
    const handleDecrement = () => {
        if(value>1){
            setValue(value-1)
        }
        
    }
    
    const cartPrice =value * newPrice;

    

    return (
        <tr>
            <td class="product-thumbnail">
                <a href="#"><img src={productImage} alt="" /></a>
            </td>
            <td class="product-name">
                <h5><a href="#">{productName}</a></h5>
            </td>
            <td class="product-cart-price"><span class="amount">${newPrice}</span></td>
            <td class="cart-quality">
                <div class="product-quality d-flex justify-content-between align-items-center" style={{ width: '80px' }}>
                    <div class=""><button onClick={() => handleDecrement()} style={{ backgroundColor: 'white', border: "none" }}><FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faMinusCircle} /></button></div>
                    <input class="cart-plus-minus-box input-text qty text text-center" name="qtybutton" value={value} style={{ width: '30px', border: 'none', backgroundColor: 'white' }} disabled />
                    <div class=""><button onClick={() => handleIncrement()} style={{ backgroundColor: 'white', border: "none" }}><FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faPlusCircle} /></button></div>
                </div>
            </td>
            <td class="product-total"><span>${cartPrice}</span></td>
            <td class="product-remove"><><button class="btn btn-danger" onClick={() => removeFromCart(product.cartId)}><FontAwesomeIcon icon={faTrash} /></button></></td>
        </tr>
    )
}

export default CartItem;
