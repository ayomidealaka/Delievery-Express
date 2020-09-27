import React, { Component } from 'react';

import style from './../App.css';
import Navbar from './Navbar';
import PageBody from './PageBody';

export class MainPage extends Component {
  render() {
    return (
      <div className={style.MainPage}>
        <Navbar />
        <PageBody />
      </div>
    );
  }
}

export default MainPage;
