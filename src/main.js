import React, { Component } from 'react';
import ReactDom from 'react-dom';

import P5Wrapper from 'react-p5-wrapper';
import sketch from './component/app';

class App extends Component {
  state = { data: '' };

  setStateAsync = state =>
    new Promise(resolve => {
      this.setState(state, resolve);
    });

  render = () => {
    console.log('is rendering');
    return (
      <div style={{ width: '100%', border: '1px solid black' }}>
        <P5Wrapper sketch={sketch} />
      </div>
    );
  };
}

ReactDom.render(<App />, document.getElementById('root'));
