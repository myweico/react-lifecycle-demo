import { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    console.log("contructor");
    this.state = {
      value: 0,
    };
  }

  increase = (value) => {
    this.setState((state) => {
      return {
        value: state.value + value,
      };
    });
  };

  add = () => {
    this.increase(1);
  };

  render() {
    return (
      <>
        <h1>生命周期</h1>
        <p>你点击了{this.state.value}次</p>
        <button onClick={this.add}>Click</button>
        {(this.state.value % 5) !== 0 && (
          <Child count={this.state.value}></Child>
        )}
      </>
    );
  }
}

class Child extends Component {
  constructor(props) {
    super(props);
    console.log("Child constructor");
    this.state = {
      parentValue: "",
    };
  }

  static getDerivedStateFromProps(nextProps) {
    console.log("child getDerivedStateFromProps", nextProps);
    return {
      parentValue: nextProps.count,
    };
  }

  componentDidMount() {
    console.log("child componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("child shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("child getSnapshotBeforeUpdate", prevProps, prevState);
    return { data: "snapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("child componentDidUpdate", prevProps, prevState, snapshot);
  }

  componentWillUnmount() {
    console.log("child componentWillUnmount");
  }

  render() {
    if (this.props.count > 10) {
      throw new Error("child error");
    }
    return (
      <div>
        父组件点击了{this.props.count}次，deriveValue：{this.state.parentValue}
      </div>
    );
  }
}

export default App;
