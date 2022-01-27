import {Types} from '../actions/users';

export default function users(state=[], action){
    switch(action.type){
        case Types.GET_USER_SUCCESS:
            return {
                items: action.payload.items
            }
        default:
            return state;
    }
}