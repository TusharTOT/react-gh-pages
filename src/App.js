import React, { Component } from 'react';
import PureComponent from './Components/PureComponent';
import Button from './Components/Button';
import LifeCycle from './Components/LifeCycle';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      // items: [],
    }
  }




  componentDidUpdate(prevProps, prevState) {
    debugger
    // Typical usage (don't forget to compare props):
    if (prevState.count !== this.state.count) {
      // api call
    }
  }

  handleChange = () => {
    debugger
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 },
      () => {
        console.log();
      })
  }

  handleClickDec = () => {
    this.setState({ count: this.state.count - 1 })
  }

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         items: result
    //       });
    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (error) => {

    //     }
    //   )
  }

  render() {
    const { count } = this.state;
    return (
      <div className="text-center jumbotron">
        <div className="m-2">
          <Button title={'Increment'} clicked={() => this.handleClick()} count23={this.state.count} />
        </div>
        <button onClick={this.handleChange}>HandleChange</button>
        {/* <ul>
          {
            this.state.items.map(item => {
              return <li>{item.title}</li>
            })
          }
        </ul> */}
        <div>
          <Button title={'Decrement'} clicked={() => this.handleClickDec()} />
          <PureComponent count={count} />
          {/* <TestComponent /> */}
        </div>
      </div>
    );
  }
}

export default App;