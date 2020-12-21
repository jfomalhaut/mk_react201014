import { spawn } from 'redux-saga/effects';
import watchAuth from './SigninSaga';

export default function* rootSaga() {
	yield spawn(watchAuth);
};