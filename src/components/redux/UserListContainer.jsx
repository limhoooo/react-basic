import React, { useCallback } from 'react';
import UserList from './UserList';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersStart, getUsersSuccess, getUsersFail } from '../../redux/actions';
import axios from "axios"

const UserListContainer = () => {
    const users = useSelector(state => state.users.data);
    const dispatch = useDispatch();

    const getUsers = useCallback(async () => {
        try {
            dispatch(getUsersStart());
            const res = await axios.get('https://api.github.com/users');
            dispatch(getUsersSuccess(res.data));
        } catch (error) {
            dispatch(getUsersFail(error));
            console.error(error)
        }
    }, [dispatch])

    const deleteUsers = () => {
        dispatch(getUsersSuccess([]));
    }

    return <UserList users={users} deleteUsers={deleteUsers} getUsers={getUsers} />
};

export default UserListContainer;