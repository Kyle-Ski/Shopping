import React, { Component } from 'react';
import './App.css';
import Header from './header';
import CartFooter from './cartFooter';
import CartItems from './cartItems';
import AddItem from './addItem';



class App extends Component {

  constructor(props){
    super(props)
    this.state = {
    }
  } 
  

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

