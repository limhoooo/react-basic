import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
const Communication = () => {
    const NavStyle = styled(NavLink)`
    color : #555;
    &.active {
    color: aqua;
    position: relative;
    top: 2px;
  }`
    return (
        <div>
            <h1>Communication</h1>
            <ul>
                <li>
                    <NavStyle to='/communication/props'>props</NavStyle>
                </li>
                <li>
                    <NavStyle to='/communication/emit'>emit</NavStyle>
                </li>
            </ul>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Communication;