import React from 'react';
import LoginButton from '../components/LoginButton';
import root from 'react-shadow';
const Login = () => {

    const styles = `
    h2 {
        color : blue
    }`;

    return (
        <root.div>
            <div>
                <h2>Login 페이지 입니다.</h2>
                <LoginButton />
            </div>

            <style type="text/css">
                {styles}
            </style>

        </root.div>
    );
};

export default Login;