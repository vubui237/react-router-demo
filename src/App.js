import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import routes from './routes'
import Nav from './components/Nav/Nav'
// import Home from './components/Home/Home'
// import Other from './components/Other/Other'
// import Contact from './components/Contact/Contact'
// import About from './components/About/About'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Nav />
        { routes }
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
