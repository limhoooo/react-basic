import React from 'react';
import Loading from './Loading';

const withLoading = (WrappedComponent) => props => {

    if (props.isLoading) return <Loading />
    return <WrappedComponent {...props} />
}

export default withLoading;




