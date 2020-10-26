import React from 'react';

const Page2 = ({ history }) => {

	const goPage1 = () => {
		history.push('/page1/malpa');
	};

	return (
		<div>
			<h1>Page2 Component</h1>
			<button onClick={goPage1}>Page1로 가기</button>
		</div>
	);
};

export default Page2;