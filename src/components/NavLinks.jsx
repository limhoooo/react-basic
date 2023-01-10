import React from 'react';
import { NavLink } from "react-router-dom";


const NavLinks = () => {
    const activeFnc = (isActive) => isActive ? 'red' : 'gray';
    const randomNum = Math.floor(Math.random() * 10);
    const querySt = 'name=mark&age=19'
    return (
        <ul>
            <li>
                <NavLink to="/" style={({ isActive }) => ({ color: activeFnc(isActive) })}>home</NavLink>
            </li>
            <li>
                <NavLink to={`/params/${randomNum}`} style={({ isActive }) => ({ color: activeFnc(isActive) })}>params</NavLink>
            </li>
            <li>
                <NavLink to={`/queryStr?${querySt}`} style={({ isActive }) => ({ color: activeFnc(isActive) })}>queryStr</NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;




