import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../action/app.action';

export class Button extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
        <br/>
        <h4>{this.props.counter}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.appReducer.counter,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
