import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment, decrement } from '../action/app.action';

export class Button extends Component {
    render () {
        return (
            <div>
                <button onClick={this.props.increment}>Increment</button>
                <button onClick={this.props.decrement}>Decrement</button>
                <br />
                <h4>{this.props.counter}</h4>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    counter: state.appReducer.counter
});

const mapDispatchToProps = {
    increment,
    decrement
};
Button.propTypes = {
    increment: PropTypes.func,
    decrement: PropTypes.func,
    counter: PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
