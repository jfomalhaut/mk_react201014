import React from 'react';
import { useSelector } from 'react-redux';
import CartReducer from '../reducer/CartReducer';

const Detail = () => {
  const count = useSelector(({ CartReducer }) => CartReducer.count);

  return (
    <h1>Detail component, COUNT: {count}</h1>
  )
}

export default Detail;