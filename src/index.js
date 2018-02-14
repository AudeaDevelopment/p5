import React, { PureComponent } from 'react';

class App extends PureComponent {
  state = { data: '' };

  async componentDidMount() {
    const res = await fetch('https://someapi');
    const { data } = await res.json();
    await this.setStateAsync(...data);
  }

  setStateAsync = state =>
    new Promise((resolve) => {
      this.setState(state, resolve);
    });
  render = () => <div>{this.state.data}</div>;
}

export default App;
