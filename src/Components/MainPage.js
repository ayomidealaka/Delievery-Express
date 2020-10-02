import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import style from './../App.css';
import About from './About';
import Navbar from './Navbar';
import PageBody from './PageBody';

export class MainPage extends Component {
  state = {
    delivery: [
      {
        trackingId: '16365617960',
        sender: 'Jack Bauer',
        reciever: 'Mason Mount',
        senderAddress: 'Clonee, Dublin',
        recieverAddress: 'Carrigtwohill, Cork',
      },
      {
        trackingId: '67911192596',
        sender: 'Bilbo Baggins',
        reciever: 'Gandalf the great',
        senderAddress: 'Clonee, Dublin',
        recieverAddress: 'Carrigtwohill, Cork',
      },
      {
        trackingId: '16303230871',
        sender: 'Adewale Ayuba',
        reciever: 'Alabi Pasuma',
        senderAddress: 'Magodo, Lagos',
        recieverAddress: 'Ajah, Lagos',
      },
    ],
  };

  compareTrackingID = (id) => {
    let obj = this.state.delivery.find(
      (deliverys) => deliverys.trackingId === id
    );
    console.log(obj);
    return obj;
  };

  render() {
    return (
      <div className={style.MainPage}>
        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <PageBody
                {...props}
                delivery={this.state.delivery}
                compareTrackingID={this.compareTrackingID}
              />
            )}
          />
          <Route path="/about" component={About} exact />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    );
  }
}

export default MainPage;
