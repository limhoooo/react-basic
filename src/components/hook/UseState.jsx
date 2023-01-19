import React, { useState } from 'react';

const UseState = () => {
    const [state, setState] = useState({ count: 0 });
    const countUp = () => {
        setState({ count: state.count + 1 })
    }
    return (
        <div>
            <span>count : {state.count}</span>
            <button onClick={countUp}>up!</button>
        </div>
    );
};

export default UseState;

