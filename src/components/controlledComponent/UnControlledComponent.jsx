import React, { useRef } from 'react';

const UnControlledComponent = () => {
    const inputRef = useRef();
    const subitFnc = () => {
        alert(inputRef.current.value)
    }
    return (
        <div>
            <h3>ParentControlledComponent</h3>
            <input type="text" ref={inputRef} />
            <button onClick={subitFnc}>전송</button>
        </div>
    );
};

export default UnControlledComponent;