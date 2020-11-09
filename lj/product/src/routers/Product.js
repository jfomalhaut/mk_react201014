import React, { useEffect, useState } from 'react';
import Data from '../jsons/items.json';

export default ({ history, match: { params: { category }} }) => {
	const [items, setItems] = useState([]);

	const trans = (cate) => {
		switch(cate) {
			case 'fish': return 1;
			case 'fruit': return 2;
			case 'vegetable': return 3;
			default: return 0;
		}
	};

	const color = (type) => {
		switch(type) {
			case 1: return '#0071B3';
			case 2: return '#C9242B';
			case 3: return '#198942';
		}
	};

	useEffect(() => {
		if (category === 'all') {
			setItems(Data);
		} else {
			const type = trans(category);
			if (type === 0) {
				history.push('/product/all');
				return;
			}
			const list = Data.filter(item => item.type === type);
			setItems(list);
		}
	}, [category]);

	useEffect(() => {
		console.log('componentDidMount');
	}, []);

	return (
		<div>
			<h1>Product Component</h1>
			<h1>value : {category}</h1>
			<section style={gridLayout}>
				{items.map(item => (
					<div key={`ITEM${item.id}`} style={{border: '1px solid #ddd'}}>
						<div style={{ height: '100px', backgroundColor: color(item.type)}} />
						<h3>{item.name}</h3>
						<h3>{item.price}원</h3>
					</div>
				))}
			</section>
		</div>
	);
};

const gridLayout = {
	display: 'grid',
	width: '1000px',
	margin: '0 auto',
	gridTemplateColumns: 'repeat(4, 1fr)',
	gridGap: '30px',
	textAlign: 'center',
};