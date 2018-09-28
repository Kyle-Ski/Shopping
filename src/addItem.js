import React, { Component } from 'react';

class AddItem extends Component{

    constructor(props){
        super(props)
        this.state = {
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
            quantity: null
        }    
    }
    
    showState = (e) => {
        e.preventDefault()
        console.log(this.state.product)
    }
    setProduct = (e) => {
        let doIt = this.state.products.filter(product => {
            return product.id == e.target.value
        })
        this.setState({product: doIt[0]})  
    }

    addItem = (arr) => {
        return arr.map(item => {
                return(
                    <option value={item.id}>{item.name}</option>
                )
            })        
    }

    render(){
        return (
            <form>
            <label for="quantity">Quantity</label>
            <input type="number" className="form-control" id="quantity" placeholder="Choose a quantity"/>
            <label for="products">Products</label>
            <div>
            <div>
                <button onClick={this.showState}>Show this.state.product</button>
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

        )
    }
}


export default AddItem