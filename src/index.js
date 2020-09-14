import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './components/Menu'
import Banner from './components/Banner'
import Product from './components/Product'
import Footer from './components/Footer'
import book from './images/book.jpg'
import book1 from './images/book1.jpg'
import book2 from './images/book2.jpg'
import book3 from './images/book3.jpg'
import book4 from './images/book4.jpg'
import book5 from './images/book5.jpg'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <Banner />
    <div className="line">
      <Product name="This is not a book" price="0.50" obr={book} />
      <Product name="Know my name" price="1.39" obr={book1} />
    </div>
    <div className="line">
      <Product name="StarWars book of Sith" price="4.29" obr={book2} />
      <Product name="Once more we saw star" price="1.69" obr={book3} />
      <Product name="Eyes to the wind" price="0.99" obr={book4} />
    </div>
    <div className="line">
      <Product name="Safari" price="3.49" obr={book5} />
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
