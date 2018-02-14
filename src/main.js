// import React application reqs
import React, { Component } from 'react';
import ReactDom from 'react-dom';

// import p5 library
import P5Wrapper from 'react-p5-wrapper';

// import pong file
import pong from '../pong';

// define base Appm component
class App extends Component {
  state = { data: '' };

  setStateAsync = state =>
    new Promise(resolve => {
      this.setState(state, resolve);
    });
  // render for main app component, invoke React wrapper with sketch prop including pong component
  render = () => (
    <div style={{ width: '100%', border: '1px solid black' }}>
      <P5Wrapper sketch={pong} />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('root'));
