import React from 'react';
import { useEffect } from 'react';
const UserList = ({ users, getUsers }) => {
    useEffect(() => {
        getUsers()
    }, [getUsers])

    if (users.length === 0) return <p>현재 유저정보 없음</p>
    return (
        <>
            <h2>async Data + REDUX</h2>
            <ul>{users.map(user => <li key={user.id}>{user.login}</li>)}</ul>
        </>
    )
};

export default UserList;