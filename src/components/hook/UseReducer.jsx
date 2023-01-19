import React, { useReducer } from 'react';

// reducer => state 를 변경하는 로직이 담겨 있는 함수
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREASE':
            return { count: state.count - 1 }
        default:
            return state;
    }
}
// dispatch => action 객체를 넣어서 실행
// action => 객체이고 필수 프로퍼티로 type 을 가진다.
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    const onIncrease = () => {
        dispatch({ type: 'INCREMENT' })
    }
    const onDecrease = () => {
        dispatch({ type: 'DECREASE' })
    }
    return (
        <div>
            <span>count : {state.count}</span>
            <button onClick={onIncrease}>up!</button>
            <button onClick={onDecrease}>down!</button>
        </div>
    );
};

export default UseReducer;


