import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './header/header.js';

class Home extends Component{

    render(){
        return(
            <div>
                <Header></Header>

                <div className="body">
                    <h1 className="body-title">What is my app estimated cost?</h1>
                    <p className="body-text">This website is going to help you to calculate the total estimated value of your next App</p>
                    <div className="buttons">
                    <Link to='/questions'><button className="back-btn">Start</button></Link>
                    </div>
                </div> 

                <style>
                    @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
                </style>
            </div>
        );
    }
}

export default Home;