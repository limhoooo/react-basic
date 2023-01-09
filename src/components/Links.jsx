import React from 'react';
import { Link } from "react-router-dom";

const Links = () => {
    const randomNum = Math.floor(Math.random() * 10);
    const querySt = 'name=mark&age=19'
    return (
        <ul>
            <li>
                <Link to="/">home</Link>
            </li>
            <li>
                <Link to={`/params/${randomNum}`}>params</Link>
            </li>
            <li>
                <Link to={`/queryStr?${querySt}`}>queryStr</Link>
            </li>
        </ul>
    );
};

export default Links;