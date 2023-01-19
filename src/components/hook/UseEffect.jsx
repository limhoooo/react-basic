import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [state, setState] = useState({ count: 0 });
    const countUp = () => {
        setState({ count: state.count + 1 })
    }

    useEffect(() => {
        console.log('componentDidMount');
        return () => {
            // cleanup
            // componentWillUnmount
            console.log('componentWillUnmount');
        }
    }, []); // 디펜던시 : 빈배열 넣을시 최초랜더 에만 실행

    useEffect(() => {
        console.log('componentDidMount & componentDidUpdate by count', state.count);
        return () => {
            // cleanup
            // componentWillUnmount & state.count가 업데이트 되기전 리턴
            console.log("cleanup by count", state.count);
        }
    }, [state.count]); // state.count 가 업데이트 될때만 실행



    return (
        <div>
            <span>count : {state.count}</span>
            <button onClick={countUp}>up!</button>
        </div>
    );
};

export default UseEffect;

