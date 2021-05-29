import React from 'react';
import Body from './Body/Body/Body';
import NavBody from './Body/Body/NavBody/NavBody';
import styles from './Dashboard.module.css';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
  return (
    <main className={styles.Dashboard + ' container-fluid'}>
      <div className='row'>
        <div className='col-2 m-0 p-0'>
          <Sidebar />
        </div>
        <div className='col-10 m-0 p-0'>
          <NavBody />
          <Body />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
