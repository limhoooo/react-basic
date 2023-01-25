import React from 'react';
import UseState from './UseState';
import UseEffect from './UseEffect';
import UseWindowWidth from './useWindowWidth';
import UseReducer from './UseReducer';
import UseMemo from './UseMemo';
import UseRef from './UseRef';

const hook = () => {
    const width = UseWindowWidth();

    return (
        <div>
            <h2>
                hook
            </h2>
            {width}
            <h1>UseState</h1>
            <UseState />
            <h1>UseEffect</h1>
            <UseEffect />
            <h1>UseReducer</h1>
            <UseReducer />
            <h1>UseMemo</h1>
            <UseMemo />
            <h1>UseRef</h1>
            <UseRef />
        </div>
    );
};

export default hook;