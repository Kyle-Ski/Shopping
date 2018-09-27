import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import CartFooter from './cartFooter';
import CartItems from './cartItems';
import AddItem from './addItem';
import Form from './form'
class App extends Component {

  constructor(props){
    super(props)
  }
state = [
    { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
    { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
    { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
    { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
    { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
    { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
    { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
    { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
    { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
  ]
  render() {
    const cartItemsList = [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      ]  
    
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <CartItems cart={cartItemsList} />
        <form>
            <label for="quantity">Quantity</label>
            <input type="number" class="form-control" id="quantity" placeholder="Choose a quantity"/>
            <label for="products">Products</label>
            <select className="form-control col-10" id="products">
                <AddItem list={this.state}/>
            </select>
        </form>
        <CartFooter year="2018" />
      </div>
    );
  }
}

export default App;
