import { spawn } from "redux-saga/effects";
import watchSignin from "./SigninSaga";

export default function* rootSaga() {
	yield spawn(watchSignin);
}