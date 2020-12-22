import React from 'react';
import { useSelector } from 'react-redux';
import CartReducer from '../reducer/CartReducer';

const Cart = () => {

	const cart = useSelector(({ CartReducer }) => CartReducer.cart)
	return (
		<div>
			<h1>장바구니</h1>
			<ul>
				<li>
					{cart.map(item => (
						<li>{item.name}</li>
					))}
				</li>
			</ul>
		</div>
	)
}

export default Cart;


// global state를 변경할때는 dispatch
// global state를 구독할 때에는 useSelector