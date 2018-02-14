import React, { PureComponent } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import MainSketch from './component/app';

class App extends PureComponent {
  state = { data: '' };

  setStateAsync = state =>
    new Promise(resolve => {
      this.setState(state, resolve);
    });

  render = () => <P5Wrapper sketch={MainSketch} />;
}

export default App;
