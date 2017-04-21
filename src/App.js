import React, { Component } from 'react';
import './App.css';
import Nav from './nav/Nav';
import GenreNav from './views/genreNavComponent/GenreNav';

class App extends Component {

    render() {
        return (
            <div>
                <Nav />
                <div  className="content">
                    <GenreNav/>
                    <div className="view">
                    {this.props.children}
                    </div>
                </div>
            </div>
        );
    }


}

export default App;
