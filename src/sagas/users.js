import {takeEvery, takeLatest, call, fork, put, take} from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/users'

function* getUsers(){
    try {
        const result = yield call(api.getUsers);
        console.log(result);
        yield put(actions.getUserSuccess({
            items: result.data.data
        }))
        //after code will run once result got its value
    } catch (error) {
        console.log(error)
    }
}
function* createUser(action){
    try {
        yield call(api.createUser,{firstName: action.payload.firstName, lastName: action.payload.lastName});
        yield call(getUsers);
    } catch (error) {
        console.log(error)
    }
}

//function* deleteUser(action){
    // try {
    //     yield call(api.deleteUser,{id: action.payload.id});
    //     yield call(getUsers);
    // } catch (error) {
    //     console.log(error)
    // }
//}

function* deleteUser(id){
    try {
        yield call(api.deleteUser,id);
        yield call(getUsers);
    } catch (error) {
        console.log(error)
    }
}

function* watchGetUserRequest() {
    yield takeEvery(actions.Types.GET_USER_REQUEST, getUsers)
}

function* watchcreateUserRequest() {
    yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser)
}

function* watchdeleteUserRequest() {
  //  yield takeLatest(actions.Types.DELETE_USER_REQUEST, deleteUser)
    while(true) {
        const action = yield take(actions.Types.DELETE_USER_REQUEST);
        yield call(deleteUser, {
            id: action.payload.id
        })
    }
}
const userSaga = [
    fork(watchGetUserRequest),
    fork(watchcreateUserRequest),
    fork(watchdeleteUserRequest)
]    

export default userSaga;