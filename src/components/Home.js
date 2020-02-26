import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './header/header.js';
import Footer from './footer/footer.js'

import './home.css';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';

class Home extends Component{

    render(){
        return(
            <div>
                <Header></Header>

                <div className="body">
                    <h1 className="body-title">How much does my app cost</h1>
                    <p className="body-text">This website is going to help you to calculate the total price of your next App</p>
                    <div className="buttons">
                    <Link to='/questions'><Button variant="primary" size="lg">Start</Button></Link>
                    </div>
                </div> 

                <Footer></Footer>

                <style>
                    @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
                </style>
            </div>
        );
    }
}

export default Home;