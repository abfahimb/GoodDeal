import React, { useState } from 'react'
import './Cart.css';
import cart1 from '../../../img/cart-1.jpg';
import cart2 from '../../../img/cart-2.jpg';
import cart3 from '../../../img/cart-3.jpg';
import breadcamp1 from '../../../img/breadcrumb-1.png';
import breadcamp2 from '../../../img/breadcrumb-2.png';
import Header from '../Header/Header';
import CartItem from './CartItem';
import { connect } from 'react-redux';
import { removeFromCart } from '../../../redux/actions/cardAction';
import Footer from '../Footer/Footer';


function Cart(props) {
    const { cart, removeFromCart } = props;

    // console.log(props)
    return (
        <div>
            <Header></Header>
            <div class="breadcrumb-area bg-gray-4 breadcrumb-padding-1 d-flex justify-content-between " style={{ paddingTop: '200px', zIndex: '100' }}>
                <div class="breadcrumb-img-1">
                    <img src={breadcamp1} alt="" />
                </div>
                <div class="">
                    <div class="breadcrumb-content text-center">
                        <h2>Cart</h2>
                        <ul className="d-flex">
                            <li><a href="#">Home</a></li>
                            <li>{">"}</li>
                            <li>Cart</li>
                        </ul>
                    </div>
                </div>

                <div class="breadcrumb-img-2">
                    <img src={breadcamp2} alt="" />
                </div>
            </div>
            <div class="row pt-5  p-5 m-auto">
                <div class="col-12">
                    <div class="cart-table-content">
                        <div class="table-content table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th class="width-thumbnail"></th>
                                        <th class="width-name">Product</th>
                                        <th class="width-price"> Price</th>
                                        <th class="width-quantity">Quantity</th>
                                        <th class="width-subtotal">Subtotal</th>
                                        <th class="width-remove">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.map(pd => <CartItem product={pd} removeFromCart={removeFromCart} key={pd.id}></CartItem>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="cart-shiping-update-wrapper">
                                <div class="cart-shiping-update btn-hover">
                                    <a href="#">Continue Shopping</a>
                                </div>
                                <div class="cart-shiping-update btn-hover">
                                    <a href="#">Checkout Process</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           {/* <Footer></Footer> */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}


const mapDispatchToProps = {
    removeFromCart: removeFromCart
}
// console.log(mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(Cart);