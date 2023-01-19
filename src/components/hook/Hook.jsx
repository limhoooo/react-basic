import React from 'react';
import UseState from './UseState';
import UseEffect from './UseEffect';
import UseWindowWidth from './useWindowWidth';
import UseReducer from './UseReducer';

const hook = () => {
    const width = UseWindowWidth();

    return (
        <div>
            <h2>
                hook
            </h2>
            <UseState />
            <UseEffect />
            <UseReducer />
            {width}

        </div>
    );
};

export default hook;