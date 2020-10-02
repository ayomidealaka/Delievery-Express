import React from 'react';

import style from './../App.css';

const BookADeliveryForm = () => {
  return (
    <form className={style.BookADeliveryForm}>
      <span>
        <input placeholder="Pickoff" />
        <input placeholder="Dropoff" />
        <input placeholder="Kg" name="kg"></input>
      </span>
      <button>Book a delivery.</button>
    </form>
  );
};

export default BookADeliveryForm;
