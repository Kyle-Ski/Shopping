import React, { Component } from 'react';
import AddItem from './addItem';

const Form = (props) => {
    return (
        <form>
            <label for="quantity">Quantity</label>
            <input type="number" class="form-control" id="quantity" placeholder="Choose a quantity"/>
            <label for="products">Products</label>
            <select className="form-control col-10" id="products">
                <AddItem list={this.state}/>
            </select>
        </form>
    )
}
export default Form