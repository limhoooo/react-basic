import React from 'react';
import withLoading from "../components/WithLoading";
import Params from "../pages/Params";

const HocTest = () => {
    const CompoenetWithLoding = withLoading(Params);

    return (
        <div>
            <CompoenetWithLoding isLoading />
            <CompoenetWithLoding isLoading={false} />
        </div>
    );
};

export default HocTest;


