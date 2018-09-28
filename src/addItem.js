import React, { Component } from 'react';

class AddItem extends Component{

    constructor(props){
        super(props),
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
    
    grabId = (idCheck) => {
        return this.state.products.filter(product => {
            return product.id === idCheck
        })
        .map(key => key.id)
    }

    selecdedProduct = (e) => {
        e.preventDefault()
        let newId = this.filterProducts(this.state.products,e.target.value).map(key => key.id).join()
        let newName = this.filterProducts(this.state.products,e.target.value).map(key => key.name).join()
        let newPriceInCents = this.filterProducts(this.state.products,e.target.value).map(key => key.priceInCents).join()
        
        this.setState({product: {
            id: newId,
            name: newName,
            priceInCents: newPriceInCents
        }})
        console.log(this.filterProducts(this.state.products,e.target.value))
    }

    addItem = (arr) => {
        return arr.map(item => {
                return(
                    <option value={item.id}>{item.name}</option>
                )
            })        
    }

    filterProducts = (e) => {
        this.grabId(e.target.value)
            console.log(this.grabId(e.target.value))
            //setState to values
        }
    render(){
        return (
            <select onChange={this.filterProducts} className="form-control col-10" id="products">
                <option value = '' disabled>Please Select A Product</option>
                {this.addItem(this.state.products)}
            </select>

        )
    }
}


export default AddItem