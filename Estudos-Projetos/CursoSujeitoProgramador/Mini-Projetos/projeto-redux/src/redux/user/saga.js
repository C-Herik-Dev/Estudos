import { all, takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import { fetchUsersSuccess, fetchUsersFailure, fetchUserByIdFailure, fetchUserByIdSuccess } from './slice';

import axios from 'axios';
// API USERS: https://jsonplaceholder.typicode.com/users

// function gnerator
function* fetchUsers() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users')
    yield put(fetchUsersSuccess(response.data))

  } catch (error) {
    yield put(fetchUsersFailure(error.message))
  }
}

function* fetchUserById(action) {
  try {
    const userId = action.payload;
    const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/users/${userId}`)
    yield put(fetchUserByIdSuccess(response.data))
  } catch (error) {
    yield put(fetchUserByIdFailure(error.message))
  }
}

export default all([
  //takeEvery("user/fetchUsers", fetchUsers) // toda vez que a action for disparada, a função será executada.
  takeLatest("user/fetchUsers", fetchUsers), // toda vez que a action for disparada, a função será executada, mas se a action for disparada novamente antes da função ser finalizada, a função anterior será cancelada e a nova função será executada. Sempre pega a última action disparada.
  takeEvery("user/fetchUserById", fetchUserById)
])