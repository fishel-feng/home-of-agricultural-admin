import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import MyLayout from './components/MyLayout/index';

class App extends Component {
  render() {
    return (
      <div>
        <MyLayout/>
      </div>
    );
  }
}

export default App;
