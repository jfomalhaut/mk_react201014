import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthAction } from '../actions';

const Signin = () => {
	const dispatch = useDispatch();
	const [info, setInfo] = useState({ username: '', password: '' });
	const { username, password } = info;

	const failure = useSelector(({ AuthReducer }) => AuthReducer.failure);

	const signin = (ev) => {
		ev.preventDefault();
		dispatch(AuthAction.login(info));
	};
	
	const onChangeValue = (ev) => {
		const { target: { name, value } } = ev;
		setInfo({
			...info,
			[name]: value
		});
	};

	useEffect(() => {
		console.log('실패횟수: ', failure);
		setInfo({
			...info,
			password: ''
		});
	}, [failure]);

	return (
		<form onSubmit={signin}>
			<div>
				<input placeholder="insert username.." value={username} name="username" onChange={onChangeValue} />
			</div>
			<div>
				<input placeholder="insert password.." value={password} type="password" name="password" onChange={onChangeValue} />
			</div>
			<button>로그인</button>
			{failure > 0 && (
				<p style={{ color: '#ff0000'}}>*실패! 아이디와 비밀번호를 확인해주세요, 실패횟수: {failure}</p>
			)}
		</form>
	);
};

export default Signin;
