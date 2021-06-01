import * as actionTypes from "./shopping-types";

import productOne from '../../img/product-1.png';
import productTwo from '../../img/product-2.png';
import productThree from '../../img/product-3.png';
import productFour from '../../img/product-4.png';
import productFive from '../../img/product-5.png';
import productSix from '../../img/product-6.png';
import productSeven from '../../img/product-7.png';
import productEight from '../../img/product-8.png';
import productNine from '../../img/product-9.png';

const INITIAL_START = {
    products: [{
        id: 1,
        productName: 'New Modern Sofa Set',
        oldPrice: 25.89,
        newPrice: 20.25,
        productImage: productOne
    },
    {
        id: 2,
        productName: 'New Modern Sofa Set',
        oldPrice: 25.89,
        newPrice: 20.25,
        productImage: productTwo
    },
    {
        id: 3,
        productName: 'New Modern Sofa Set',
        oldPrice: 25.89,
        newPrice: 20.25,
        productImage: productFour
    },
    {
        id: 4,
        productName: 'New Modern Sofa Set',
        oldPrice: 25.89,
        newPrice: 20.25,
        productImage: productOne
    }],

    allProducts: [
        {
            id: 5,
            productName: 'New Modern Sofa Set',
            oldPrice: 25.89,
            newPrice: 20.25,
            productImage: productOne
        },
        {
            id: 6,
            productName: 'New Modern Sofa Set',
            oldPrice: 25.89,
            newPrice: 20.25,
            productImage: productTwo
        },
        {
            id: 7,
            productName: 'New Modern Sofa Set',
            oldPrice: 25.89,
            newPrice: 20.25,
            productImage: productThree
        },
        {
            id: 8,
            productName: 'New Modern Sofa Set',
            oldPrice: 25.89,
            newPrice: 20.25,
            productImage: productFour
        },
        {
            id: 9,
            productName: 'New Modern Sofa Set',
            oldPrice: 25.89,
            newPrice: 20.25,
            productImage: productFive
        },
        {
            id: 10,
            productName: 'New Modern Sofa Set',
            oldPrice: 25.89,
            newPrice: 20.25,
            productImage: productSix
        },
        {
            id: 11,
            productName: 'New Modern Sofa Set',
            oldPrice: 25.89,
            newPrice: 20.25,
            productImage: productSeven
        },
        {
            id: 12,
            productName: 'New Modern Sofa Set',
            oldPrice: 25.89,
            newPrice: 20.25,
            productImage: productEight
        }],
    cart: [],
    currenIte: null,
}

const shopReducer = (state = INITIAL_START, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = state.products.find(prod => prod.id === action.payload.id)
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false);

            return {
                ...state,
                cart: inCart
                    ? state.cart.map(item =>
                        item.id === action.payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                    : [...state.cart, { ...item, qty: 1 }]
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: action.payload.qty }
                        : item
                ),
            };
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            };
        default:
            return state;
    }
}


export default shopReducer;