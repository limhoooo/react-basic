import React, { useState } from 'react';

const SetState = () => {
    const [state, setState] = useState({ count: 0 });
    const countUp = () => {
        setState({ count: state.count + 1 })
    }
    return (
        <div>
            <p>count : {state.count}</p>
            <button onClick={countUp}>up!</button>
        </div>
    );
};

export default SetState;

