import React, { Component } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from '../../types/types';
import { CONSTANTS } from "../../utilities/constants";
import './ErrorBoundary.scss';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Hata yakalandı:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2 className="errorBoundaryMessage">{CONSTANTS.ERROR_BOUNDARY.MESSAGE}</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
