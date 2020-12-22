import React, { useEffect, useState } from	'react'
import Axios  from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { AuthAcion } from '../actions';
import AuthReducer from '../reducer/AuthReducer';

const Signin = () => {
	const dispatch = useDispatch();
	const [info, setInfo] = useState({username: '', password: ''});
	const {username, password} = info;

	const failure = useSelector(({AuthReducer}) => AuthReducer.failure);

	const signin = (ev) => {
		ev.preventDefault();
		dispatch(AuthAcion.login(info));
		
	};

	const onChangeValue = (ev) => {
		const {target: {name , value}} = ev;
		setInfo({
			...info,
			[name]: value
		});
	};

	useEffect(() => {
		console.log('실패', failure);
		setInfo({
			...setInfo,
			password: ''
		})
	}, [failure]);

	return (
		<form onSubmit={signin}>
			<div>
				<input value={username} name="username" onChange={onChangeValue} />
			</div>
			<div>
				<input value={password} name="password" onChange={onChangeValue} />
			</div>
			<button>로그인</button>
			{failure > 0 && 
				<p>실패 아디 비번 확인, {failure}</p>
			}
		</form>
	)
}

export default Signin;