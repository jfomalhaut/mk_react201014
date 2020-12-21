import React, { useState } from 'react';
import Axios from 'axios';

const Signin = () => {
	const [info, setInfo] = useState({ username: '', password: '' });
	const { username, password } = info;

	const signin = (ev) => {
		ev.preventDefault();
		console.log(info);
		Axios.post('http://localhost:4000/signin', info).then(res => {
			console.log(res);
		}).catch(error => {
			console.log(error);
		});
	};
	
	const onChangeValue = (ev) => {
		const { target: { name, value } } = ev;
		setInfo({
			...info,
			[name]: value
		});
	};

	return (
		<form onSubmit={signin}>
			<div>
				<input placeholder="insert username.." value={username} name="username" onChange={onChangeValue} />
			</div>
			<div>
				<input placeholder="insert password.." value={password} type="password" name="password" onChange={onChangeValue} />
			</div>
			<button>로그인</button>
		</form>
	);
};

export default Signin;
