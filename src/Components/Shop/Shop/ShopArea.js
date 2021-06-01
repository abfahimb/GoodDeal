import React from 'react';
import './ShopArea.css';
import { faTh, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





const ShopArea = () => {

    return (
        <div className="shop_area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="shop_area_topbar">
                            <div className="shop_area_left">
                                <div className="showing_item">
                                    <span>Showing 1–12 of 60 results</span>
                                </div>
                            </div>
                            <div className="shop_area_right d-flex align-items-center">
                                <div className="shop_sorting_area">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Default Sorting</option>
                                        <option value="1">Sorting</option>

                                    </select>
                                </div>
                                <div className="shop_view_area">
                                    <a href="#" className="gride"><FontAwesomeIcon icon={faTh} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faBars} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                </div>
            </div>
        </div>
    );
};

export default ShopArea;