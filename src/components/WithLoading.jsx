import React from 'react';
import Loading from '../components/Loading';

const withLoading = (WrappedComponent) => props => {

    if (props.isLoading) return <Loading />
    return <WrappedComponent {...props} />
}

export default withLoading;




