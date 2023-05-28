import React from 'react'

import ComponentError from './component-fallback';
import PageError from './page-fallback';

class ErrorBoundary extends React.Component{
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error) {
        console.log(error);
    }

    render() {
        if (this.state.hasError) {
            if(this.props.type === "component"){
              return <ComponentError /> ;
            }
            else{
              return <PageError /> ;
            }
            }
        return this.props.children;
    }
}

export default ErrorBoundary;