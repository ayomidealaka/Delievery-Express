import React from 'react';

import style from './../App.css';

const BookADeliveryForm = () => {
  return (
    <form className={style.BookADeliveryForm}>
      <input placeholder="Pickoff" />
      <input placeholder="Dropoff" />
      <input placeholder="Kg"></input>
    </form>
  );
};

export default BookADeliveryForm;
