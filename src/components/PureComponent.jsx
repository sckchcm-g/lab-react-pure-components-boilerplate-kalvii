import React from 'react';

class PureComponents extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      toggle: true
    };
  }

  increment = () => {
    if (this.state.toggle) {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    }
  };

  toggle = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  };

  render() {
    console.log('PureComponent');
    return (
      <div className='mainDiv'>
        <p>The counter is {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.toggle}>Toggle</button>
      </div>
    );
  }
}

export default PureComponents;