// src/features/auth/authSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { loginRequest } from './authRequest';
import { loginRequest as loginAction, loginSuccess, loginFailure } from './authSlice';

function* handleLogin(action) {
  try {
    const response = yield call(loginRequest, action.payload);
    yield put(loginSuccess(response));
  } catch (error) {
    yield put(loginFailure(error.response?.data?.message || 'Login failed'));
  }
}

export default function* authSaga() {
  yield takeLatest(loginAction.type, handleLogin);
}
