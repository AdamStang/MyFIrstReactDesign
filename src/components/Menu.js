import React from 'react';
import ReactDOM from 'react-dom';
import './Menu.css';

function MyMenu(){
    return (
        <nav className="navBar">
            <h2>MyBookShop</h2>
            <ul>
                <li><a href="#">Link1</a></li>
                <li><a href="#">Link2</a></li>
                <li><a href="#">Link3</a></li>
            </ul>
        </nav>
    )
}

export default MyMenu;