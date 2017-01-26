import React, { Component } from 'react';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className="App-header">
          <h2>Welcome to Webpack</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
