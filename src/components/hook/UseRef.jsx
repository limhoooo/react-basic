import React, { createRef, useRef } from 'react';
import { useState } from 'react';

const UseMemo = () => {
    const [value, setValue] = useState('');
    const input1Ref = createRef();
    const input2Ref = useRef();

    console.log(input1Ref.current);
    console.log(input2Ref.current);

    const change = e => {
        setValue(e.target.value)
    }

    return (
        <div>
            <input type="text" value={value} onChange={change} />
            <input type="text" ref={input1Ref} />
            <input type="text" ref={input2Ref} />
            <p>{value}</p>

        </div>
    );
};

export default UseMemo;

