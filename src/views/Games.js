import React, { Component } from 'react';
import {Link} from 'react-router';
import axios from 'axios';

class Games extends Component {

    constructor(props) {
        super(props);

        this.state = {
            games : []
        }

        this.fetchData = this.fetchData.bind(this);

        console.log(this.state.data);
    }

    handleSearchInput(e) {
        const searchInput = e.target.value;
        console.log(e.target.value);
        this.setState({
            searchInput
        });
    }


    componentDidMount() {
        console.log("starting fetch");
        this.fetchData();
    }

    setGames() {
        const games = [
                {
                    img: '../img/gamepic.png',
                    name: "Bear Game",
                    genre: ["RPG"],
                    desc: "Great Bear game",
                    stock: 3
                },
            {
                img: '../img/gamepic.png',
                name: "Bear Game 2",
                genre: ["Action", "Shooter"],
                desc: "Another game with bears!",
                stock: 2
            },
            {
                img: '../img/flowergarden.png',
                name: "Flower Anime Battle",
                genre: ["JRPG"],
                desc: "Play as a flower in an Anime world",
                stock: 3
            },
            {
                img: '../img/flowergarden.png',
                name: "Flower Anime: The Shooter",
                genre: ["JRPG", "Shooter"],
                desc: "Sequel to Flower Anime Battle. Now with more guns!",
                stock: 2
            },    {
                img: '../img/hotel.png',
                name: "Hotel service",
                genre: ["Action"],
                desc: "Play as room service in this thrilling game",
                stock: 3
            },
            {
                img: '../img/hotel.png',
                name: "Hotel Service 2: The reckoning",
                genre: ["RPG", "JRPG"],
                desc: "Battle against angry customers",
                stock: 1
            },    {
                img: '../img/penitentiary.png',
                name: "Escape the pen",
                genre: ["Shooter"],
                desc: "Escape the pen with Michael Schofield",
                stock: 3
            },
            {
                img: '../img/penitentiary.png',
                name: "Escape the pen..again?",
                genre: ["RPG", "Action"],
                desc: "You got locked up again, how?",
                stock: 2
            },    {
                img: '../img/roomescape.png',
                name: "Escape the room",
                genre: ["Shooter"],
                desc: "Escape the room using guns homie.",
                stock: 3
            },
            {
                img: '../img/roomescape.png',
                name: "Escape the room 2",
                genre: ["RPG", "Shooter", "JRPG"],
                desc: "Another room escape game",
                stock: 2
            },    {
                img: '../img/roomescape.png',
                name: "Escape the room 3",
                genre: ["RPG", "Shooter"],
                desc: "Great Bear game",
                stock: 3
            },
            {
                img: '../img/roomescape.png',
                name: "Escape the room 4",
                genre: ["RPG", "Shooter"],
                desc: "Another game with bears!",
                stock: 2
            }
            ]
    }


    fetchData() {
        axios.get("/workorders")
            .then( (res) => {
                console.log("fetch done");
                console.log(res.data);
                this.setState({data: res.data});
            });
    }

    render() {
        return (
            <div className="games">
                <div className="searchBar">
                    <span className="glyphicon glyphicon-search"/>
                    <input className="inputField" onChange={this.handleSearchInput.bind(this)} />
                </div>
                <p>Games</p>
            </div>
        );
    }
}
export default Games;