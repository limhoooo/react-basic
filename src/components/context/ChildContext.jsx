import React, { useContext } from 'react';
import { Personcontext } from './Context';

const ChildContext = () => {
    const persons = useContext(Personcontext)
    return (
        <ul>
            {persons.map((person) => <li key={person.id}>{person.name}</li>)}
        </ul>
    );
};

export default ChildContext;

