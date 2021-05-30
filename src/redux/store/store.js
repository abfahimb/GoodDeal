import {createStore} from 'redux';
import cartReducers from '../reducers/cartReducer'; 

const store = createStore(cartReducers);


export default  store;