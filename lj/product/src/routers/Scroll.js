import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Scroll = () => {
	const [top, setTop] = useState(0);

	const onScroll = (ev) => {
		const { srcElement: { scrollingElement: { scrollTop } } } = ev;
		setTop(scrollTop);
	};
	
	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => { // 뒷정리 함수
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	return (
		<Wrap>
			<header style={{ backgroundColor: top > 0 ? 'black' : 'white', color: top > 0 ? 'white' : 'black' }}>HEADER</header>
			<article>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
				<h1>Hello</h1>
			</article>
		</Wrap>
	);
};

export default Scroll;

const Wrap = styled.div`
	header {
		height: 100px;
		line-height: 100px;
		position: fixed;
		top: 0; left: 0;
		width: 100%;
		background-color: white;
		font-size: 50px;
		text-align: center;
		font-weight: bold;
		border-bottom: 2px solid;
		transition: .5s;
	}
	article {
		padding-top: 100px;
	}
`;