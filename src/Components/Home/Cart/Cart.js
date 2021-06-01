import React, { useState, useEffect } from 'react'
import './Cart.css';
import breadcamp1 from '../../../img/breadcrumb-1.png';
import breadcamp2 from '../../../img/breadcrumb-2.png';
import Header from '../Header/Header';

import Footer from '../Footer/Footer';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import PaymentDetails from './PaymentDetails';

import CartItem from './CartItem';
import { connect } from 'react-redux';
import { removeFromCart } from '../../../redux/actions/cardAction';

function Cart({ cart }) {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItem, setTotalItem] = useState(0);
    const [display, setDisplay] = useState(true);


 main

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach(item => {
            items += item.qty;
            price += item.qty * item.newPrice;
        })
        setTotalItem(items);
        setTotalPrice(price);
    }, [cart, totalPrice, totalItem, setTotalPrice, setTotalItem])

    // console.log(cart)
    return (
        <div className="cart_area">
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
            <div class={display ? 'd-block':'d-none'}>
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
                                            cart.map(pd => <CartItem product={pd} key={pd.id}></CartItem>)
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row container m-auto">


                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="grand-total-wrap">
                            <div class="grand-total-content">
                                <h3>Subtotal <span>${totalPrice}</span></h3>
                                <div className="d-flex justify-content-between"><p>Total Item </p> <p>{totalItem}</p></div>
                                <hr />

                                <div class="grand-total">
                                    <h4>Total <span>${totalPrice}</span></h4>
                                </div>
                            </div>
                            <div class="grand-total-btn btn-hover">
                                <a class="btn theme-color" onClick={() => { setDisplay(false) }}>Proceed to checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class={display ? 'd-none' : 'd-block'}>
            <PaymentDetails></PaymentDetails>
            </div>
            <Footer></Footer>
 main
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart,
    }
}
export default connect(mapStateToProps)(Cart);