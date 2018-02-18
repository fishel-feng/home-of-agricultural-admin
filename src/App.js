import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import MyLayout from './components/my_layout';

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
