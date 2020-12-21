import { AuthAction } from "../actions";
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchSigninSaga(action) {
	try {
		const { payload } = action;
		const { data } = yield call([axios, 'post'], 'http://localhost:4000/signin', payload);
		if (data) {
			yield put(AuthAction.loginSuccess(data));
		} else {
			console.log('throw false');
			throw false;
		}
	} catch (error) {
		yield put(AuthAction.loginFailure());
	}
};

export default function* watchSignin() {
	yield takeLatest(AuthAction.LOGIN, fetchSigninSaga);
};