import React, { useReducer, useState } from 'react';
import CounterReducer from '../reducers/CountReducer';
import { CountAction } from '../actions';

const REGEX = /[0-9]/;

const Reducer = () => {
	const [number, dispatch] = useReducer(CounterReducer, 0);
	const [custom, setCustom] = useState("");

	const increasement = () => {
		dispatch(CountAction.increase());
	};

	const decreasement = () => {
		dispatch(CountAction.decrease());
	};
	
	const addCustom = () => {
		dispatch(CountAction.addCustomNumber(custom));
	};

	const onChangeCustom = (ev) => {
		const { target: { value } } = ev;
		if (value === '') {
			setCustom("");
			return;
		}
		if (REGEX.test(value)) {
			const _value = value.replace(/[^0-9]/g, '');
			setCustom(_value);
		}
	};

	const onSubmit = (ev) => {
		ev.preventDefault();
		addCustom();
		setCustom("");
	};

	return (
		<div>
			<h1> Number is : {number}</h1>
			<h1> Custom number is : {custom}</h1>
			<form onSubmit={onSubmit}>
				<input value={custom} onChange={onChangeCustom} maxLength={5} />
				<button>등록</button>
			</form>
			<button onClick={decreasement}>감소</button>
			<button onClick={increasement}>증가</button>
		</div>
	);
};

export default Reducer;
