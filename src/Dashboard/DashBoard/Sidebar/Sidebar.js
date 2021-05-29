import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.admin + ' pt-5'}>
      <nav>
        <ul className={styles.ul + ' text-justify'}>
          <li>
            <Link to='/ManageOrder'>Manage Order</Link>
          </li>
          <li>
            <Link to='/ManageUser'> Manage User</Link>
          </li>
          <li>
            <Link to='/DealDay'>Deal Of The Day</Link>
          </li>
          <li>
            <Link to='/ManageDeal'>Manage Deal</Link>
          </li>
          <li>
            <Link to='/HotProduct'>Hot Product</Link>
          </li>
          <li>
            <Link to='/ManageHotProduct'>Manage Hot Product</Link>
          </li>
          <li>
            <Link to='/ShopProduct'>Shop Product</Link>
          </li>
          <li>
            <Link to='/MangeShopProduct'>Manage Shop Product</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
