import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import PigDetail from './PigDetail'
import PigList from './PigList'
import hogs from '../porkers_data'

class App extends Component {
  state = {
    currentPig: '',
    clickedGrease: false
  }

  setPigState = (clickedPig) => {
    this.setState({
      currentPig: clickedPig
    })
  }

  filterGrease = () => {
    this.setState((prevState) => {
      return {clickedGrease: !prevState.clickedGrease}
    })
  }

  render() {
    return (
        <div className="App">
            <button onClick={this.filterGrease}></button>
            < Nav />
            < PigList hogs={hogs} getPig={this.setPigState} clickedGrease={this.state.clickedGrease} />
            < PigDetail hog={this.state.currentPig}/>
        </ div >
    )
  }
}

export default App;
