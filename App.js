import React, { Component } from 'react';
import './index.css';

import Conversor from './componets/Conversor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      </div>
    );
  }
}


export default App;
