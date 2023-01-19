import React from 'react';
import ControlledComponent from './ControlledComponent';
import UnControlledComponent from './UnControlledComponent';

const ParentComponent = () => {
    return (
        <div>
            <ControlledComponent />
            <UnControlledComponent />
        </div>
    );
};

export default ParentComponent;