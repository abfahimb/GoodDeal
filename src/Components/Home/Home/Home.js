import React from 'react';
import Slider from '../Slider/Slider';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import BannerTwo from '../BannerTwo/BannerTwo';
import Service from '../Service/Service';
import ProductTwo from '../ProductTwo/ProductTwo';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <Slider></Slider>
           <Banner></Banner>
           <Product></Product>
           <BannerTwo></BannerTwo>
           <Service></Service>
           <ProductTwo></ProductTwo>
        </div>
    );
};

export default Home;