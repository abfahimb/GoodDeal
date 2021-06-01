import React from 'react';
import './Blog.css';
import blogOne from '../../../img/blog-1.png';
import blogTwo from '../../../img/blog-2.png';
import blogThree from '../../../img/blog-3.png';

const Blog = () => {
    return (
        <div className="blog_part">
            <div className="container">
                <div className="title">
                    <h2>Latest News</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div class="card">
                            <div className="img">
                                <img src={blogOne} class="card-img-top" alt="blogOne" />
                            </div>
                            <div className="round">
                                    <h5>05<span>May</span></h5>
                                </div>
                            <div class="card-body">
                                <a href="#">FURNITURE,<span>BY</span>: ADMIN</a>
                                <p className="card-text">Lorem ipsum dolor consectet adipisicing elit</p>
                            </div>

                            <div className="card-body">
                                <a href="#" className="card-link text-decoration-underline">read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div class="card">
                            <div className="img">
                                <img src={blogTwo} class="card-img-top" alt="blogTwo" />
                            </div>
                            <div className="round">
                                    <h5>05<span>May</span></h5>
                                </div>
                            <div class="card-body">
                                <a href="#">FURNITURE,<span>BY</span>: ADMIN</a>
                                <p class="card-text">Morbi dignissim sit amet velit id vestibulum.</p>
                            </div>

                            <div class="card-body">
                                <a href="#" class="card-link text-decoration-underline">read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="card">
                            <div className="img">
                                <img src={blogThree} class="card-img-top" alt="blogThree" />
                            </div>
                            <div className="round">
                                    <h5>05<span>May</span></h5>
                                </div>
                            <div className="card-body">
                                <a href="#">FURNITURE,<span>BY</span>: ADMIN</a>
                                <p className="card-text">Fusce euismod varius tellus, nec molestie turpis.</p>
                            </div>

                            <div className="card-body">
                                <a href="#" className="card-link text-decoration-underline">read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;