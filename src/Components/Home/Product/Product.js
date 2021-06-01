import React from 'react';
import { connect } from 'react-redux';
import './Product.css';
import SingleProduct from '../SingleProduct/SingleProduct'



const Product = ({ products }) => {
    return (
        <div className="product_area">
            <div className="container">
                <div className="product_title_wrapper">
                    <div className="product_title">
                        <h3>Deal Of The Day</h3>
                    </div>
                    <div className="product_time">
                        <h5>End In:</h5>
                    </div>
                </div>
                <div className="row">
                    {
                        products.map(pd => <SingleProduct product={pd} key={pd.id}></SingleProduct>)
                    }
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        products: state.shop.products
    }
}
export default connect(mapStateToProps)(Product);