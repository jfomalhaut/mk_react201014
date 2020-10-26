import React, { useState } from 'react';
import { REGEX } from '../vaildators/regex';

const Page1 = ({ match: { params: { lolname }} }) => {
	const [number, setNumber] = useState(0);
	const [addNumber, setAddNumber] = useState(""); // input과 연결할 때에는 문자열로 초기값을 잡아준다.
	
	const increase = () => {
		setNumber(number + 1);
	};

	const decrease = () => {
		setNumber(number - 1);
	};

	const onChangeAddNumber = (ev) => {
		const { target: { value } } = ev;
		if (REGEX.test(value)) {
			setAddNumber(value);
		}
	};

	const onKeyEnter = (ev) => {
		const { key } = ev;
		if (key === 'Enter') {
			add();
		}
	}

	const add = () => {
		setNumber(number + (addNumber * 1));
		setAddNumber("");
	};

	return (
		<div>
			<h1>Page1 Component value: { lolname }</h1>
			<h1>Number is <span style={{color: 'red'}}>{number}</span></h1>
			<div>
				<input value={addNumber} onKeyPress={onKeyEnter} onChange={onChangeAddNumber} />
				<button onClick={add}>add</button>
			</div>
			<button onClick={increase}>increase</button>
			<button onClick={decrease}>decrease</button>
		</div>
	);
};

export default Page1;
