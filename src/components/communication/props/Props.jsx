import React, { useState } from 'react';

const Props = () => {
    const [strValue, setStrValue] = useState('');
    const push = () => {
        setStrValue('하이');
    }
    return (
        <div>
            <div>
                <p>A component</p>
                <button onClick={push}>
                    A -{'>'} E 값 보내기
                </button>
            </div>
            <B strValue={strValue} />
        </div>
    );
};
const B = ({ strValue }) => {
    return (
        <div>
            <p>
                B component
            </p>
            <C strValue={strValue} />
        </div>
    );
};
const C = ({ strValue }) => {
    return (
        <div>
            <p>
                C component
            </p>
            <D strValue={strValue} />
        </div>
    );
};
const D = ({ strValue }) => {
    return (
        <div>
            <p>
                D component
            </p>
            <E strValue={strValue} />
        </div>
    );
};
const E = ({ strValue }) => {
    return (
        <div>
            <p>
                E component
            </p>
            <h3>{strValue}</h3>
        </div>
    );
};



export default Props;