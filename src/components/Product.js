import React from 'react';
import ReactDOM from 'react-dom';
import './Product.css';

function MyProduct(props){
    return (
        <div className="mainProduct">
            <p className="productName">{props.name}</p>
            <p className="productPrice">{props.price} $</p>
            <img src={props.obr} alt=""></img>
            <button>Add to cart</button>
        </div>
    )
}

export default MyProduct;