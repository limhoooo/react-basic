import { useState } from 'react';

const Emit = () => {
    const [strValue, setStrValue] = useState('');
    const change = (value) => {
        setStrValue(value);
    }
    return (
        <div>
            <div>
                <p>A component</p>
            </div>
            <p>
                {strValue}
            </p>
            <B change={change} />
        </div>
    );
};
const B = ({ change }) => {
    return (
        <div>
            <p>
                B component
            </p>
            <C change={change} />
        </div>
    );
};
const C = ({ change }) => {
    return (
        <div>
            <p>
                C component
            </p>
            <D change={change} />
        </div>
    );
};
const D = ({ change }) => {
    return (
        <div>
            <p>
                D component
            </p>
            <E change={change} />
        </div>
    );
};
const E = ({ change }) => {
    const Evalue = '잘가';
    return (
        <div>
            <p>
                E component
            </p>
            <button onClick={() => change(Evalue)}>E -{'>'} A 값 변경하기</button>
        </div>
    );
};



export default Emit;