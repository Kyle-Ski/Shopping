import React, { Component } from 'react';
import './App.css';
import Header from './header';
import CartFooter from './cartFooter';
import AddItem from './addItem';
import CartItems from './cartItems'



class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
        total: 0,
        products: [
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
        id: null, 
        product: {
            id: null,
            name: '',
            priceInCents: null
        }, 
        quantity: null,
        cartItemsList:[
            { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 3.99 }, quantity: 1 },
            { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 4.99 }, quantity: 2 },
            { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 19.99 }, quantity: 1 },
        ]       
    }   
}

submitButton = (e) => {
  e.preventDefault()
  let currentList = this.state.cartItemsList
  let newItem = {id: this.state.id ,product: this.state.product, quantity: this.state.quantity }
  this.setState({
      cartItemsList: currentList.concat(newItem)
  })
}

selectQuantity = (e) => {
  e.preventDefault()
  this.setState({quantity: Number(e.target.value)})
}

showState = (e) => {
  e.preventDefault()
  console.log('getTotal', this.state.total)
  console.log('The new id will be:',this.state.id) 
  console.log('the product to add is:',this.state.product)
  console.log('the quantity is:',this.state.quantity)
  console.log('the cartItemList:',this.state.cartItemsList)
}
setProduct = (e) => {
  let selectedProduct = this.state.products.filter(product => {
      return product.id === Number(e.target.value)
  })
  this.setState({product:{id:selectedProduct[0].id, name:selectedProduct[0].name, priceInCents:(selectedProduct[0].priceInCents/100)*this.state.quantity},
  id: this.state.cartItemsList.length + 1}) 
}

  render() {
    let total = (this.state.cartItemsList.reduce((accum, current) => {
      return accum + current.product.priceInCents
    },0))
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <CartItems cartItemsList={this.state.cartItemsList}/>
        <h3>Total Price: ${total.toFixed(2)}</h3>
        <AddItem
          products={this.state.products}
          cartItemsList={this.state.cartItemsList}
          submit={this.submitButton}
          selectQuantity={this.selectQuantity}
          showState={this.showState}
          setProduct={this.setProduct}
        />
        <CartFooter year="2018" />
      </div>
    );
  }
}

export default App;

