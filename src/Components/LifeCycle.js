import React, { Component } from 'react'

class LifeCycle extends Component {
    componentDidMount() {
        console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {
        debugger
        console.log('Component WILL RECIEVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
        debugger
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        debugger
        if (this.props.myNumber === 5) {
            throw new Error('I crashed!');
        }
        console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        debugger
        console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }
    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}

export default LifeCycle;
