import React from 'react';
import UseState from './UseState';
import UseEffect from './UseEffect';
import UseWindowWidth from './useWindowWidth';
import UseReducer from './UseReducer';
import UseMemo from './UseMemo';

const hook = () => {
    const width = UseWindowWidth();

    return (
        <div>
            <h2>
                hook
            </h2>
            <h1>UseState</h1>
            <UseState />
            <h1>UseEffect</h1>
            <UseEffect />
            <h1>UseReducer</h1>
            <UseReducer />
            <h1>UseMemo</h1>
            <UseMemo />
            {width}

        </div>
    );
};

export default hook;