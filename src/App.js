import React, { Component } from 'react';
import logo from './logo.svg';
import icon from './icon.png';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header center">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}

          <img src={icon} className="App-icon" alt="logo" />
          <div>
            <label className="App-title">QUEJAPP</label>
          </div>
          <div className="dark">Alza la voz.</div>
        </header>

        <p className="dark mp3">
          Gráfica de la cantidad de denuncias por estado
        </p>

        <Chart />
      </div>
    );
  }
}

export default App;

// azul: #08acd5;
// verde birllante: #b2ff81;

// blanco: E0E0E2
// otro blanco: FFFEFF

// azul: 0382EC
// azul bajito: 0896FF

// pistache: 05E8AC
// pistache bajito: 81FF83

// negro reac: #222

// 50C6D1