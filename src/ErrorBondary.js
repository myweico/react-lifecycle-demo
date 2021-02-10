/*
 * @Description:
 * @Author: myweico
 * @LastEditors: myweico
 * @Date: 2021-02-10 16:45:57
 * @LastEditTime: 2021-02-10 16:49:13
 */
import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: "",
    };
  }

  componentDidCatch(error, stack) {
    console.log("componentDidCatch", error, stack);
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error: JSON.stringify(error),
    };
  }

  render() {
    if (this.state.hasError) {
      return <h1>发生了错误，{this.state.error}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
