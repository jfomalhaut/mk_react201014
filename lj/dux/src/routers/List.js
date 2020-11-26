import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartAction } from '../actions';

const List = () => {
	const dispatch = useDispatch();
	const count = useSelector(({ CartReducer }) => CartReducer.count);
	
	const increase = () => {
		dispatch(CartAction.increasement());
	};

	return (
		<div>
			<h1>List Component, COUNT: {count}</h1>
			<button onClick={increase}>증가</button>
		</div>
	);
};

export default List;
