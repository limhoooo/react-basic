import React, { useState } from 'react';
import styles from './Button.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Button = () => {
    const [flag, setFlag] = useState(false)
    const changeFnc = (value) => {
        setFlag(value);
        setTimeout(() => { setFlag(false) }, 1000)
    }
    return (
        <>
            <button className={styles['button']} onClick={() => changeFnc(!flag)}>버튼 {flag ? 'OFF' : 'ON'}</button>
            {
                flag &&
                <div className={cx({ lodaing: flag }, 'button')}>
                    로딩중입니다..
                </div>
            }
        </>
    );
};

export default Button;

