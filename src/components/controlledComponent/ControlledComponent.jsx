import React, { useState } from 'react';

const ControlledComponent = () => {
    const [value, setValue] = useState('');

    const handleSubmit = () => {
        alert(value);
    };

    return (
        <div>
            <h3>controlledComponent</h3>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={handleSubmit}>전송</button>
        </div>
    );
};

export default ControlledComponent;