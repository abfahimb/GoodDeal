import React from 'react';
import Cart from '../../Home/Cart/Cart';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';
import Navbar from '../../Home/Navbar/Navbar';
import ShopArea from './ShopArea';

const Shop = () => {
    return (
        <div>
           <Header></Header>
           <Navbar></Navbar>
           <ShopArea></ShopArea>
           <Footer></Footer>
        </div>
    );
};

export default Shop;