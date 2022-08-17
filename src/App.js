import React, { Component } from 'react';
import AppCSS from './App.module.css';

import Layout from './components/Layout/Layout';
class App extends Component {
  
  render() {
    return (
        <div>
          <Layout>
            <p> Test Body</p>
          </Layout>
        </div>
    );
  }

}

export default App;
