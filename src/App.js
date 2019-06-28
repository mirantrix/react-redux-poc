import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          Current number: <span>{this.props.number}</span>
        </div>
        <button onClick = { this.props.OnChangeUp }> Number Up</button>
        <button onClick = { this.props.OnChangeDown }> Number Down</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    number: state.number
  };
};

const mapDispachToProps = dispatch => {
  return {
    OnChangeUp: () => dispatch({type: 'NUMBER_UP', value: 1}),
    OnChangeDown: () => dispatch({type: 'NUMBER_DOWN', value: 1})
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);