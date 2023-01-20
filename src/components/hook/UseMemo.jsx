import React from 'react';
import { useState } from 'react';

const useMemo = () => {
    const [value, setValue] = useState('');
    const [persons] = useState([
        { name: 'Mark', age: 39 },
        { name: 'Hanna', age: 28 },
    ]);
    const sum = persons => {
        return persons.map(person => person.age).reduce((l, r) => l + r, 0);
    }
    const count = sum(persons);
    const change = e => {
        setValue(e.target.value)
    }

    return (
        <div>
            <input type="text" value={value} onChange={change} />
            <p>{count}</p>
        </div>
    );
};

export default useMemo;