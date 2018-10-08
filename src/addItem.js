import React, { Component } from 'react';
import CartItems from './cartItems'


class AddItem extends Component{
    
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
            }, 
            quantity: null,
            cartItemsList:[
                { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
                { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
                { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
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
        let doIt = this.state.products.filter(product => {
            return product.id === Number(e.target.value)
        })
        this.setState({product: doIt[0],
        id: this.state.cartItemsList.length + 1}) 
    }

    addItem = (arr) => {
        return arr.map(item => {
                return(
                    <option key={item.name} value={item.id}>{item.name}</option>
                )
            })        
    }

    render(){
        let total = this.state.cartItemsList.reduce((accum, current) => {
            return accum + current.product.priceInCents
        },0)
        return (
        <div>
            <CartItems cart={this.state.cartItemsList}/>
            <h3>Total Price: ${total}</h3>
            <form>
                <label htmlFor="quantity">Quantity</label>
                <input onChange={this.selectQuantity} type="number" className="form-control" id="quantity" placeholder="Choose a quantity"/>
                <label htmlFor="products">Products</label>
                <div>
                <div>
                    <button onClick={this.showState}>console.log all of my stuff</button>
                </div>
                <div>
                    <select onChange={this.setProduct} className="form-control col-10" id="products">
                        <option value = '' disabled>Please Select A Product</option>
                        {this.addItem(this.state.products)}
                    </select>
                </div>
                </div>
                <button onClick={this.submitButton}>Submit</button>
            </form>
        </div>
        )
    }
}


export default AddItem