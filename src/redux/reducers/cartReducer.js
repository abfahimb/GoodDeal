import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cardAction";
import productOne from '../../img/product-1.png';
import productTwo from '../../img/product-2.png';
import productThree from '../../img/product-3.png';
import productFour from '../../img/product-4.png';
import productFive from '../../img/product-5.png';
import productSix from '../../img/product-6.png';
import productSeven from '../../img/product-7.png';
import productEight from '../../img/product-8.png';
import productNine from '../../img/product-9.png';


const initialState = {
    cart: [],
    products: [
        {
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
        }
    ],
    hotProducts: [
        {
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
            productImage: productThree
        },
        {
            id: 4,
            productName: 'New Modern Sofa Set',
            oldPrice: 25.89,
            newPrice: 20.25,
            productImage: productFour
        },
        {
            id: 5,
            productName: 'New Modern Sofa Set',
            oldPrice: 25.89,
            newPrice: 20.25,
            productImage: productFive
        },
        {
            id: 6,
            productName: 'New Modern Sofa Set',
            oldPrice: 25.89,
            newPrice: 20.25,
            productImage: productSix
        },
        {
            id: 7,
            productName: 'New Modern Sofa Set',
            oldPrice: 25.89,
            newPrice: 20.25,
            productImage: productSeven
        },
        {
            id: 8,
            productName: 'New Modern Sofa Set',
            oldPrice: 25.89,
            newPrice: 20.25,
            productImage: productEight
        },
        {
            id: 9,
            productName: 'New Modern Sofa Set',
            oldPrice: 25.89,
            newPrice: 20.25,
            productImage: productNine
        }
    ]
};

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = {
                productId: action.id,
                item: action.item,
                name: action.name,
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart, newItem];
            return { ...state, cart: newCart };
        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item.cartId !== id);
            return { ...state, cart: remainingCart };
        default:
            return state;
    }
};


export default cartReducers;