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
      // cartItemsList:[
      //   { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      //   { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      //   { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      // ]       
    }
  } 
  

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        {/* <CartItems cart={this.state.cartItemsList} /> */}
        <AddItem />
        <CartFooter year="2018" />
      </div>
    );
  }
}

export default App;










// submitButton = (e) => {
//   e.preventDefault()
//   let currentList = this.state.cartItemsList
//   let newItem = {
//     product: {
//       id: this.state.id, 
//       name: this.state.name, 
//       priceInCents: this.state.priceInCents
//     }, 
//     quantity: this.state.newQuantity
//   }
//   currentList.push(newItem)
//   this.setState({cartItemsList: currentList})
// }
