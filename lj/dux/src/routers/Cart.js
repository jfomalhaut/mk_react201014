import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
	const cart = useSelector(({ CartReducer }) => CartReducer.cart);
	
	return (
		<div>
			<h1>장바구니</h1>
			<ul>
				{cart.map(item => (
					<li>{item.name}</li>
				))}
			</ul>
		</div>
	);
};

export default Cart;

// global State를 변경할 때에는 dispatch
// global State를 구독할 때에는 useSelector
