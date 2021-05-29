import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.admin + ' pt-5'}>
      <nav>
        <ul className={styles.ul + ' text-justify'}>
          <NavLink to='/DealDay' activeClassName={styles.selected}>
            Deal Of The Day
          </NavLink>
          <NavLink to='/ShopProduct' activeClassName={styles.selected}>
            Shop Product
          </NavLink>
          <NavLink to='/HotProduct' activeClassName={styles.selected}>
            Hot Product
          </NavLink>
          <NavLink to='/ManageDeal' activeClassName={styles.selected}>
            Manage Deal
          </NavLink>

          <NavLink to='/ManageHotProduct' activeClassName={styles.selected}>
            Manage Hot Product
          </NavLink>

          <NavLink to='/ManageOrder' activeClassName={styles.selected}>
            Manage Order
          </NavLink>
          <NavLink to='/ManageUser' activeClassName={styles.selected}>
            Manage User
          </NavLink>
          <NavLink to='/MangeShopProduct' activeClassName={styles.selected}>
            Manage Shop Product
          </NavLink>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
