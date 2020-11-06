import React, { useState } from 'react';

const Phonebook = () => {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [phone, setPhone] = useState("");
	const [list, setLsit] = useState([]);

	const onChangeName = (event) => {
		const value = event.target.value;
		setName(value);
	};

	const onChangeAge = (event) => {
		const value = event.target.value;
		setAge(value);
	};

	const onChangePhone = (event) => {
		const value = event.target.value;
		setPhone(value);
	};

	const onSubmit = (ev) => {
		ev.preventDefault();
		const payload = {
			name,
			age,
			phone,
			vote: 0
		};
		const newList = list.concat(payload);
		setLsit(newList);
		setName("");
		setAge("");
		setPhone("");
	};

	const vote = (index) => {
		const newList = list.map((item, idx) => {
			if (index === idx) {
				return ({ ...item, vote: item.vote + 1 });
			} else {
				return item;
			}
		});
		const newList2 = list.map((item, index) => index === idx ? ({ ...item, vote: item.vote + 1 }) : item);
		setLsit(newList);
	};


	return (
		<section>
			<form onSubmit={onSubmit}>
				<div>
					<input value={name} onChange={onChangeName} placeholder="이름을 입력하세요" />
				</div>
				<div>
					<input value={age} onChange={onChangeAge} placeholder="나이를 입력하세요" />
				</div>
				<div>
					<input value={phone} onChange={onChangePhone} placeholder="전화번호를 입력하세요" />
				</div>
				<button>입력</button>
			</form>
			{list.map((item, index) => (
				<li>{index + 1}. {item.name} {item.phone} 득표수: {item.vote} <button onClick={() => vote(index)}>추첨</button></li>
			))}
		</section>
	);
};

export default Phonebook;
