import React from 'react';
import './BlogPageBanner.css';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import breadcrumbOne from '../../../img/breadcrumb-1.png';
import breadcrumbTwo from '../../../img/breadcrumb-2.png';


const BlogPageBanner = () => {
    return (
        <div className="blogPageBanner_area">
            <div className="blogPageBanner_breadcrumb_area bg-gray-4 breadcrumb-padding-1">
                <div className="container">
                    <div className="blogPageBanner_content">
                        <h2>Blog</h2>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><FontAwesomeIcon icon={faAngleRight} /></li>
                            <li>Blog Standert</li>
                        </ul>
                    </div>
                </div>
                <div className="blogPageBanner_area_breadcrumb-img-1">
                    <img src={breadcrumbOne} alt="breadcrumbOne" />
                </div>
                <div className="blogPageBanner_area_breadcrumb-img-2">
                    <img src={breadcrumbTwo} alt="breadcrumbTwo" />
                </div>
            </div>
        </div>
        
    );
};

export default BlogPageBanner;