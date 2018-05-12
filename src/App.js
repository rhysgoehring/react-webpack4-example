import React, { Component } from 'react';
import { injectGlobal, styled, css } from 'styled-components';

import { RED } from './utils/colors';

import NavBar from './components/Navbar/Navbar';

// import Features from './components/Features/Features';
// import Footer from './components/Footer/Footer';

injectGlobal([
  `
  * {
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0;
    width: 100%;
  }
`,
]);


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default App;
