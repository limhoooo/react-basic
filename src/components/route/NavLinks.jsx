import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';


const NavLinks = () => {
    //const activeFnc = (isActive) => isActive ? 'red' : 'gray';
    const randomNum = Math.floor(Math.random() * 10);
    const querySt = 'name=mark&age=19'
    const NavStyle = styled(NavLink)`
    color : red;
    &.active {
    color: aqua;
    position: relative;
    top: 2px;
  }
    `
    return (
        <ul>
            {/* <li>
                <NavLink to="/" style={({ isActive }) => ({ color: activeFnc(isActive) })}>home</NavLink>
            </li>
            <li>
                <NavLink to={`/params/${randomNum}`} style={({ isActive }) => ({ color: activeFnc(isActive) })}>params</NavLink>
            </li>
            <li>
                <NavLink to={`/queryStr?${querySt}`} style={({ isActive }) => ({ color: activeFnc(isActive) })}>queryStr</NavLink>
            </li> */}
            <li>
                <NavStyle to="/" >home</NavStyle>
            </li>
            <li>
                <NavStyle to={`/params/${randomNum}`} >params</NavStyle>
            </li>
            <li>
                <NavStyle to={`/queryStr?${querySt}`} >queryStr</NavStyle>
            </li>
            <li>
                <NavStyle to={`/hoc`} >HOC</NavStyle>
            </li>
            <li>
                <NavStyle to={`/controlledComponent`} >controlledComponent</NavStyle>
            </li>
            <li>
                <NavStyle to={`/hook`} >Hook</NavStyle>
            </li>
            <li>
                <NavStyle to={`/communication`} >Communication</NavStyle>
            </li>
            <li>
                <NavStyle to={`/context`} >Context</NavStyle>
            </li>
            <li>
                <NavStyle to={`/redux`} >Redux</NavStyle>
            </li>
        </ul>
    );
};

export default NavLinks;




