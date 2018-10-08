import React, { Component } from 'react';
import './App.css';
import Header from './header';
import CartFooter from './cartFooter';
import AddItem from './addItem';



class App extends Component {
  
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <AddItem />
        <CartFooter year="2018" />
      </div>
    );
  }
}

export default App;

