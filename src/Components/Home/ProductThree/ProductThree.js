import React from 'react';
import './ProductThree.css';
import { connect } from 'react-redux';
import SingleProduct from '../SingleProduct/SingleProduct'

const ProductThree = ({ allProducts }) => {
    // console.log(allProducts)
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
                            {
                                allProducts.map(pd => <SingleProduct product={pd} key={pd.id}></SingleProduct>)
                            }
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div className="row">
                            {
                                allProducts.map(pd => <SingleProduct product={pd} key={pd.id}></SingleProduct>)
                            }
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div className="row">
                            {
                                allProducts.map(pd => <SingleProduct product={pd} key={pd.id}></SingleProduct>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        allProducts: state.shop.allProducts
    }
}
export default connect(mapStateToProps)(ProductThree);