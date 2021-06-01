import React from 'react'

function PaymentDetails() {
    return (
        <div>
            <div class="checkout-wrap pt-30 container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="billing-info-wrap">
                                <h3>Billing Details</h3>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="billing-info mb-20">
                                            <label>First Name <abbr class="required" title="required">*</abbr></label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="billing-info mb-20">
                                            <label>Last Name <abbr class="required" title="required">*</abbr></label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12">
                                        <div class="billing-info mb-20">
                                            <label>Email Address <abbr class="required" title="required">*</abbr></label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12">
                                        <div class="billing-info mb-20">
                                            <label>Phone <abbr class="required" title="required">*</abbr></label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="billing-select select-style mb-20">
                                            <label>Division <abbr class="required" title="required">*</abbr></label>
                                            <select class="select-two-active form-control">
                                                <option>Select a Division</option>
                                                <option>Dhaka</option>
                                                <option>Rajshahi</option>
                                                <option>Sylhet</option>
                                                <option>Rangpur</option>
                                                <option>Citagong</option>
                                                <option>Barishal</option>
                                                <option>Mymensing</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="billing-select select-style mb-20">
                                            <label>Distric <abbr class="required" title="required">*</abbr></label>
                                            <select class="select-two-active form-control">
                                                <option>Select a Distric</option>
                                                <option>Nillphamary</option>
                                                <option>Dinajpur</option>
                                                <option>Kurigram</option>
                                                <option>Takurgaong</option>
                                                <option>Barguna</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="billing-info mb-20">
                                            <label>Street Address <abbr class="required" title="required">*</abbr></label>
                                            <input class="billing-address form-control" placeholder="House number and street name" type="text" />
                                            <input placeholder="Apartment, suite, unit etc." type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-12 col-md-12">
                                        <div class="billing-info mb-20">
                                            <label>Postcode / ZIP <abbr class="required" title="required">*</abbr></label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="your-order-area">
                                <h3>Your order</h3>
                                <div class="your-order-wrap gray-bg-4">
                                    <div class="your-order-info-wrap">
                                        <div class="your-order-info">
                                            <ul>
                                                <li>Product <span>Total</span></li>
                                            </ul>
                                        </div>
                                        <div class="your-order-middle">
                                            <ul>
                                                <li>Product Name X 1 <span>$329 </span></li>
                                                <li>Product Name X 1 <span>$329 </span></li>
                                            </ul>
                                        </div>
                                        <div class="your-order-info order-subtotal">
                                            <ul>
                                                <li>Subtotal <span>$329 </span></li>
                                            </ul>
                                        </div>
                                        <div class="your-order-info order-shipping">
                                            <ul>
                                                <li>Shipping <p>Enter your full address </p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="your-order-info order-total">
                                            <ul>
                                                <li>Total <span>$273.00 </span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="payment-method">
                                        <div class="pay-top sin-payment">
                                            <input id="payment_method_1" class="input-radio" type="radio" value="cheque" checked="checked" name="payment_method" className="form-control"/>
                                            <label for="payment_method_1"> Direct Bank Transfer </label>
                                            <div class="payment-box payment_method_bacs">
                                                <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference.</p>
                                            </div>
                                        </div>
                                        <div class="pay-top sin-payment">
                                            <input id="payment-method-2" class="input-radio" type="radio" value="cheque" name="payment_method" className="form-control"/>
                                            <label for="payment-method-2">Check payments</label>
                                            <div class="payment-box payment_method_bacs">
                                                <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference.</p>
                                            </div>
                                        </div>
                                        <div class="pay-top sin-payment">
                                            <input id="payment-method-3" class="input-radio" type="radio" value="cheque" name="payment_method" className="form-control"/>
                                            <label for="payment-method-3">Cash on delivery </label>
                                            <div class="payment-box payment_method_bacs">
                                                <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference.</p>
                                            </div>
                                        </div>
                                        <div class="pay-top sin-payment sin-payment-3">
                                            <input id="payment-method-4" class="input-radio" type="radio" value="cheque" name="payment_method" className="form-control"/>
                                            <label for="payment-method-4">PayPal <img alt="" src="assets/images/icon-img/payment.png"/><a href="#">What is PayPal?</a></label>
                                            <div class="payment-box payment_method_bacs">
                                                <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="Place-order btn-hover">
                                    <a href="#">Place Order</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default PaymentDetails
