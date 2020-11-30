import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const Detail = () => {
	const field = useRef();
	const count = useSelector(({ CartReducer }) => CartReducer.count);

	const onkeypress = (ev) => {
		// console.log('key입력');
		field.current.focus();
	};

	useEffect(() => {
		field.current.focus();

		window.addEventListener('keypress', onkeypress);
		return () => {
			window.removeEventListener('keypress', onkeypress);
		}
	}, []);

	return (
		<div>
			<h1>Detail Component, COUNT: {count}</h1>
			<input ref={field} />
		</div>
	);
};

export default Detail;
