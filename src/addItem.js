import React from 'react';


const AddItem = ({products, submit, selectQuantity, showState, setProduct}) => {
    const addItem = (arr) => {
        return arr.map(item => {
                return(
                    <option key={item.name} value={item.id}>{item.name}</option>
                )
            })        
    }

    return (
        <form>
            <label htmlFor="quantity">Quantity</label>
            <input onChange={selectQuantity} type="number" min="0" className="form-control" id="quantity" placeholder="Choose a quantity"/>
            <label htmlFor="products">Products</label>
            <button onClick={showState}>console.log all of my stuff</button>
            <select onChange={setProduct} className="form-control col-10" id="products">
                <option value = '' disabled default>Please Select A Product</option>
                {addItem(products)}
            </select>
            <button onClick={submit} className="btn btn-primary">Submit</button>
        </form>
    )
    
}


export default AddItem