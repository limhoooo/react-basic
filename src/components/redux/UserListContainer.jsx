import React, { useCallback } from 'react';
import UserList from './UserList';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersPromise, getUsersSagaStart, getUsersThunk } from '../../redux/modules/users';

const UserListContainer = () => {
    const users = useSelector(state => state.users.data);
    const dispatch = useDispatch();
    const getUsers = useCallback(() => {
        dispatch(getUsersThunk());
        // dispatch(getUsersSagaStart());
    }, [dispatch])


    return <UserList users={users} getUsers={getUsers} />
};

export default UserListContainer;