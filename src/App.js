import React, { Component } from 'react';
import './App.css';
import Header from './header';
import CartFooter from './cartFooter';
import CartItems from './cartItems';
import AddItem from './addItem';
import cartItemsList from './cartItemsList'



class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      
      products : [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ],
      cartItemsList: cartItemsList,
      
        id: null, 
        product: {
          id: null, 
          name: '', 
          priceInCents: null
        }, 
        quantity: null
      
    }
  } 

  filterProducts = (list, idCheck) => {
    return list.filter(product => {
      return product.id === idCheck
    })
  }

  selecdedProduct = (e) => {
    e.preventDefault()
    let newId = this.filterProducts(this.state.products,e.target.value).map(key => key.id).join()
    let newName = this.filterProducts(this.state.products,e.target.value).map(key => key.name).join()
    let newPriceInCents = this.filterProducts(this.state.products,e.target.value).map(key => key.priceInCents).join()
    //add filter function here to graba all the 'new' information and then add to setState
    
    this.setState({product: {
      id: newId,
      name: newName,
      priceInCents: newPriceInCents
    }})
    console.log(this.filterProducts(this.state.products,e.target.value))
  }
  
  submitButton = (e) => {
    e.preventDefault()
    let currentList = this.state.cartItemsList
    let newItem = {
      id: /*add id somehow */'', 
      product: {
        id: this.state.id, 
        name: this.state.name, 
        priceInCents: this.state.priceInCents
      }, 
      quantity: this.state.newQuantity
    }
    currentList.push(newItem)
    this.setState({cartItemsList: currentList})
    console.log(newItem)
    console.log(this.state.product)
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <CartItems cart={this.state.cartItemsList} />
        <form>
            <label for="quantity">Quantity</label>
            <input type="number" className="form-control" id="quantity" placeholder="Choose a quantity"/>
            <label for="products">Products</label>
                <AddItem />
            <button onClick={this.submitButton}>Submit</button>
        </form>
        <CartFooter year="2018" />
      </div>
    );
  }
}

export default App;
