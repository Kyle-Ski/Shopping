import React, { Component } from 'react';
const AddItem = (props) => {
    return props.list.map(item => {
            return(
                <option value={item.id}>{item.name}</option>
            )
        })        
}

export default AddItem