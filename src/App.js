import React, { Component } from 'react';

import style from './App.css';
import MainPage from './Components/MainPage';

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <MainPage />
      </div>
    );
  }
}

export default App;
