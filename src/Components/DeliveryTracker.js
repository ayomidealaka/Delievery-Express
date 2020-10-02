import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import style from './../App.css';
import MainPage from './MainPage';

class DeliveryTracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trackingID: '',
      delivery: '',
    };
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    let newObj = this.props.compareTrackingId(this.state.trackingID);
    this.setState({
      delivery: newObj,
    });

    console.log(newObj);
    console.log('the new state is', this.state);

    this.props.history.push('/about');
  };

  render() {
    return (
      <form>
        <div className={style.inputdiv}>
          <input
            name="trackingID"
            type="text"
            placeholder="Enter your shipment/Tracking ID"
            onChange={this.onChangeHandler}
          />
          <button onClick={this.onSubmitHandler}>Track my parcel</button>
        </div>
      </form>
    );
  }
}

export default withRouter(DeliveryTracker);
