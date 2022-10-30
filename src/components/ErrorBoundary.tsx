import React from 'react';

import {Component } from 'react';


interface ErrorBoundaryProps{}
interface ErrorBoundaryState{
    hasError:boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps , ErrorBoundaryState> {
    constructor(props:ErrorBoundaryProps) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError() {
      return { hasError: true };
    }
  
  
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }


  export default  ErrorBoundary;