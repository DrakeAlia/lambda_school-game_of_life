import React, { Component} from 'react';
import './App.css';
import Buttons from '/buttons';
import Grid from './Grid';

class App extends Component {
  constructor() {
    super();
    this.rows = 30;
    this.cols = 50; 

    this.state = {
      generation: 0,
      gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    }
  }
}


export default App;
