import React, { Component } from 'react';

class App extends Component {
  state = { user: '', age: '', people: '' };
  initialState = { ...this.state };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = () => {
    const values = Object.assign(
      {},
      ...Object.keys(this.state).map(v => ({
        [`display${v}`]: this.state[v],
      })),
    );
    this.setState({
      ...values,
      ...this.initialState,
      showName: true,
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          name="user"
          value={this.state.user}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit} />
        {this.state.showName ? (
          <h1>{`${this.state.displayuser} ${this.state.displayage}`}</h1>
        ) : null}
      </div>
    );
  }
}

export default App;
