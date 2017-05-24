import React, { Component } from 'react';
import './Nav.css';
import {Link} from 'react-router';
import { connect } from 'react-redux';

// import logo from '../images/urho-logo.png';

class Nav extends Component {

    render() {
        return (
            <div className="Nav">
                <header className="header">
                    <h1 className="headline"> Jamppa E-Store</h1>
                    <ul className="header-subnav">
                        <li><Link to="/games"> Games </Link></li>
                        <li><Link to="/contact"> Contact</Link> </li>
                        <li><Link to="/shoppingcart">Shopping Cart</Link></li>
                    </ul>
                </header>
            </div>

        );
    }
}

export default Nav;