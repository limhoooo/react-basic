import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
    const navigate = useNavigate();
    const login = () => {
        setTimeout(() => {
            navigate("/")
        }, 1000)
    }
    return (
        <div>
            <button onClick={() => navigate('/')}>Home 가기</button>
            <button onClick={login}>1초뒤 Home 가기</button>
        </div>
    );
};

export default LoginButton;