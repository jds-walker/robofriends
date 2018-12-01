import React, { Component } from "react";

interface IErrorBoundaryProps {}

interface IErrorBoundaryState {
  hasError: Boolean;
}

class ErrorBoundry extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(err: any, info: any) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ooops. That was not expected</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
