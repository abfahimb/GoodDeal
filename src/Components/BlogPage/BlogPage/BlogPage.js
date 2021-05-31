import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';
import Navbar from '../../Home/Navbar/Navbar';
import BlogPageBanner from '../BlogPageBanner/BlogPageBanner';
import BlogPageBlog from '../BlogPageBlog/BlogPageBlog';

const BlogPage = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <BlogPageBanner></BlogPageBanner>
            <BlogPageBlog></BlogPageBlog>
            <Footer></Footer>
        </div>
    );
};

export default BlogPage;