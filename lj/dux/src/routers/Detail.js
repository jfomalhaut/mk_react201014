import React from 'react';
import { useSelector } from 'react-redux';

const Detail = () => {
	const count = useSelector(({ CartReducer }) => CartReducer.count);

	return (
		<div>
			<h1>Detail Component, COUNT: {count}</h1>
		</div>
	);
};

export default Detail;
