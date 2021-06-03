import React from 'react';
import styles from './Body.module.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ManageOrder from '../BodyUtili/ManageOrder';
import ManageUser from '../BodyUtili/ManageUser';
import DealDay from '../BodyUtili/DealDay/DealDay';
import HotProduct from '../BodyUtili/HotProduct/HotProduct';
import ShopProduct from '../BodyUtili/ShopProduct/ShopProduct';
import ManageDealDay from '../BodyUtili/Manage/ManageDealDay/ManageDealDay';
import ManageHotProduct from '../BodyUtili/Manage/ManageHotProduct/ManageHotProduct';
import ManageShop from '../BodyUtili/Manage/ManageShop/ManageShop';
const Body = () => {
  return (
    <section className={styles.body}>
      <Switch>
        <Route exact path='/'>
          <ManageOrder />
        </Route>
        <Route path='/ManageOrder'>
          <ManageOrder />
        </Route>
        <Route path='/ManageUser'>
          <ManageUser />
        </Route>
        <Route path='/DealDay'>
          <DealDay />
        </Route>
        <Route path='/HotProduct'>
          <HotProduct />
        </Route>
        <Route path='/ShopProduct'>
          <ShopProduct />
        </Route>
        <Route path='/ManageDeal'>
          <ManageDealDay />
        </Route>
        <Route path='/ManageHotProduct'>
          <ManageHotProduct />
        </Route>
        <Route path='/MangeShopProduct'>
          <ManageShop />
        </Route>
      </Switch>
    </section>
  );
};

export default Body;
