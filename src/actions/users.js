export const Types = {
    GET_USER_REQUEST: 'GET_USER_REQUEST',
    GET_USER_SUCCESS: 'GET_USER_SUCCESS',
    CREATE_USER_REQUEST : 'create_user_request',
    DELETE_USER_REQUEST: 'delete_user_request'
} 

export const getUserRequest = () => ({
    type: Types.GET_USER_REQUEST
})

export const getUserSuccess = ({items}) => ({
    type: Types.GET_USER_SUCCESS,
    payload:{items}
})

export const createUserRequest = ({firstName, lastName}) => ({
    type: Types.CREATE_USER_REQUEST,
    payload:{
        firstName,
        lastName
    }
})
export const deleteUserRequest = (id) => ({
    type: Types.DELETE_USER_REQUEST,
    payload:{
        id
    }
})