import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App';
import { browserHistory } from 'react-router';
import ShoppingCart from './views/ShoppingCart';
import Contact from './views/Contact';
import Games from './views/Games';
import './index.css';

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Games}/>
        <Route path="/games" component={Games} />
        <Route path="/contact" component={Contact} />
        <Route path="/shoppingcart" component={ShoppingCart} />
      </Route>
    </Router>,
  document.getElementById('root')
);
