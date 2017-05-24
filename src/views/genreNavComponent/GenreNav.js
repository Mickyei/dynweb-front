import React, { Component } from 'react';
import './GenreNav.css';
import { Nav, NavItem } from 'react-bootstrap';

class GenreNav extends Component {
    render() {
        return (
            <Nav className="genreNav" bsStyle="pills" stacked activeKey={1}>
                <NavItem eventKey={1} href="/games/all">All Games</NavItem>
                <NavItem eventKey={2} href="/games/rpg">RPG</NavItem>
                <NavItem eventKey={3} href="/games/action">Action</NavItem>
                <NavItem eventKey={4} href="/games/shooter">Shooters</NavItem>
                <NavItem eventKey={5} href="/games/jrpg">JRPG</NavItem>
            </Nav>
        )
    }
}
export default GenreNav;