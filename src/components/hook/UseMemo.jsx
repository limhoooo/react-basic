import React, { useCallback } from 'react';
import { useState, useMemo } from 'react';

const UseMemo = () => {
    const [value, setValue] = useState('');
    const [persons] = useState([
        { name: 'Mark', age: 39 },
        { name: 'Hanna', age: 28 },
        { name: 'bob', age: 18 },
    ]);
    const sum = persons => {
        console.log('sum...');
        return persons.map(person => person.age).reduce((l, r) => l + r, 0);
    }
    const count = useMemo(() => {
        return sum(persons);
    }, [persons])

    const click = useCallback(() => {
        console.log(value);
    }, [value])

    const change = e => {
        setValue(e.target.value)
    }

    return (
        <div>
            <input type="text" value={value} onChange={change} />7
            <p>{value}</p>
            <p>{count}</p>
            <button onClick={click}>click</button>
        </div>
    );
};

export default UseMemo;

