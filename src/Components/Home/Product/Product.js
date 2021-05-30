import React from 'react';
import './Product.css';
import SingleProduct from '../SingleProduct/SingleProduct';
import { addToCart } from '../../../redux/actions/cardAction';
import { connect } from 'react-redux';



const Product = (props) => {
    console.log(props)
    const { products, addToCart}=props;
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
                        products.map(pd=><SingleProduct product={pd} addToCart={addToCart} key={pd.id}></SingleProduct>)
                    }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state=>{
    return {
        cart: state.cart, 
        products: state.products,
        hotProducts: state.hotProducts
    }
}


const mapDispatchToProps = {
    addToCart:addToCart  
}
// console.log(mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(Product);