import React, { useCallback } from 'react';
import UserList from './UserList';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersPromise, getUsersThunk } from '../../redux/actions';

const UserListContainer = () => {
    const users = useSelector(state => state.users.data);
    const dispatch = useDispatch();

    // const getUsers = useCallback(async () => {
    //     try {
    //         dispatch(getUsersStart());
    //         const res = await axios.get('https://api.github.com/users');
    //         dispatch(getUsersSuccess(res.data));
    //     } catch (error) {
    //         dispatch(getUsersFail(error));
    //         console.error(error)
    //     }
    // }, [dispatch])
    const getUsers = useCallback(() => {
        dispatch(getUsersPromise());
    }, [dispatch])


    return <UserList users={users} getUsers={getUsers} />
};

export default UserListContainer;