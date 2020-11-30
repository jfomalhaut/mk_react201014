import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartAction } from '../actions';
import Items from '../jsons/items.json';

const List = () => {
	const dispatch = useDispatch();
	const count = useSelector(({ CartReducer }) => CartReducer.count);
	
	const increase = () => {
		dispatch(CartAction.increasement());
	};

	const addItem = (item) => {
		// dispatch({ type: 'ADD_ITEM', item });
		dispatch(CartAction.addItem(item));
	};

	return (
		<div>
			<h1>List Component, COUNT: {count}</h1>
			<button onClick={increase}>증가</button>
			<ul>
				{Items.map(item => (
					<li style={{ marginBottom: 20 }}>
						<div>{item.name}</div>
						<button onClick={() => addItem(item)}>담기</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default List;
