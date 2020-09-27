import React from 'react';

import style from './../App.css';

const DeliveryTracker = () => {
  return (
    <form>
      <div className={style.inputdiv}>
        <input type="text" placeholder="Track your shipment/Tracking ID" />
        <button>Track my parcel</button>
      </div>
    </form>
  );
};

export default DeliveryTracker;
