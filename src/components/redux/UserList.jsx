import React from 'react';
import { useEffect } from 'react';
const UserList = ({ users, getUsers }) => {
    useEffect(() => {
        getUsers()
    }, [getUsers])
    const userList = users.length === 0 ? <p>현재 유저정보 없음</p> : users.map(user => <li key={user.id}>{user.login}</li>)
    return (
        <>
            <h2>async Data + REDUX</h2>
            <ul>{userList}</ul>
        </>
    )
};

export default UserList;