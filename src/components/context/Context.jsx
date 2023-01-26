import React from 'react';
import { createContext } from 'react';
import ChildContext from './ChildContext';

export const Personcontext = createContext();
const Context = () => {
    const persons = [
        { id: 0, name: 'Mark', age: 39 },
        { id: 1, name: 'bob', age: 23 },
        { id: 2, name: 'ho', age: 52 },
    ]
    return (
        <Personcontext.Provider value={persons}>
            <div>
                <h1>Context</h1>
                <ChildContext />
            </div>
        </Personcontext.Provider>
    );
};

export default Context;


