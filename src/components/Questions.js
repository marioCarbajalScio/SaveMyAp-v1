import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Home from './Home';
import Header from './header/header.js';
import Footer from './footer/footer.js'
import './home.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

class Questions extends Component{

    constructor(props){
        super(props);
        this.state={
            nextPage:1,
            value:0,
            previusVal:0,
            valores:[0,0,0,0,0,0,0,0,0,0,0]
        };
    }

    sum=(value)=>{
        this.state.valores[this.state.nextPage]=value
        this.cambiarContador(this.state.value+value)
        this.cambiarPagina(this.state.nextPage+1)
     }
 
     rest=()=>{
        
        this.cambiarContador(this.state.value-this.state.valores[this.state.nextPage-1])
        this.cambiarPagina(this.state.nextPage-1)
     }

     cambiarContador=(n)=>{
         this.setState({value:n})
     }

     cambiarPagina=(n)=>{
        this.setState({nextPage:n})
    }


    render(){
        if(this.state.nextPage===1){
            return(
                <div>
                    <Header></Header>
                    <Footer></Footer>
                    <Container className="themed-container" fluid={true}>
                    <div className="body">
                        <Row>
                            <Col sm="0" md="4">
                            </Col>
                            <Col sm="6" md="4">
                            <h1 className="body-title">What kind of app are you looking for ?</h1>
                            </Col>
                            <Col sm="6" md="4">
                            <header className="header-text">Question {this.state.nextPage} of 10</header>
                            </Col>
                        </Row>

                    <Row>
                        <Col md="3"></Col>
                        <Col md="1">
                        <Button variant="primary" size="lg" onClick={(Event)=>(this.sum(32000))}>Web App</Button>
                        </Col>
                        <Col  md="1">
                        <Button variant="primary" size="lg" onClick={(Event)=>(this.sum(32000))}>Web App</Button>
                        </Col>
                        <Col sm="12" md="1">
                        <Button variant="primary" size="lg" onClick={(Event)=>(this.sum(24000))}>iOS</Button>
                        </Col>
                        <Col sm="12" md="1">
                        <Button variant="primary" size="lg" onClick={(Event)=>(this.sum(24000))}>Android</Button>
                        </Col>
                        <Col sm="12" md="1">
                        <Button variant="primary" size="lg" onClick={(Event)=>(this.sum(40000))}>Android/iOS</Button>
                        </Col>
                        <Col md="4"></Col>
                    </Row>
                    <Link to="/" >Back</Link>

                    <br></br> 
                    {this.state.value}
                    </div>
                    </Container>

                </div>
            );
        }else if(this.state.nextPage===2){
            return(
                <div >
                        <Header></Header>
                        <Footer></Footer>
                        <header>Page {this.state.nextPage} of 10</header>
                        <h1>2.Does your app needs a login?</h1> <Link onClick={(Event)=>(this.rest())} >Back</Link>
                        <button>Email</button>
                        <button onClick={(Event)=>(this.sum(10000))}>Social networks</button>
                        <button >No</button>
                        <button >I don't know</button>
                        <br></br> 
                        {this.state.value}
                    </div>
            )
        }else if(this.state.nextPage===3){
            return(
                <div >
                        <Header></Header>
                        <Footer></Footer>
                        <header>Page {this.state.nextPage} of 10</header>
                        <h1>Does the user has his or profile?</h1> <Link onClick={(Event)=>(this.rest())}>Back</Link>
                        <button>Yes</button>
                        <button onClick={(Event)=>(this.sum(5000))}>No</button>
                        <button >I don't know</button>
                        <br></br> 
                        {this.state.value}
                    </div>
            )
        }else if(this.state.nextPage===4){
            return(
                <div >
                        <Header></Header>
                        <Footer></Footer>
                        <header>Page {this.state.nextPage} of 10</header>
                        <h1>What kind of design do you want to your app?</h1> <Link onClick={(Event)=>(this.rest())}>Back</Link>
                        <button>User-friendly interface</button>
                        <button onClick={(Event)=>(this.sum(10000))}>Customized interface</button>
                        <button >Replicated web interface</button>
                        <button >I don't need design</button>
                        <br></br> 
                        {this.state.value}
                    </div>
            )
        }else if(this.state.nextPage===5){
            return(
                <div >
                        <Header></Header>
                        <Footer></Footer>
                        <header>Page {this.state.nextPage} of 10</header>
                        <h1>How do you want to take benefit from your app?</h1> <Link onClick={(Event)=>(this.rest())}>Back</Link>
                        <button>Free application with advertising</button>
                        <button onClick={(Event)=>(this.sum(10000))}>Advertising-free payment application</button>
                        <button >Shopping within the app</button>
                        <button>I don't know</button>
                        <br></br> 
                        {this.state.value}
                    </div>
            )
        }else if(this.state.nextPage===6){
            return(
                <div >
                        <Header></Header>
                        <Footer></Footer>
                        <header>Page {this.state.nextPage} of 10</header>
                        <h1>How do you want to take benefit from your app?</h1> <Link onClick={(Event)=>(this.rest())}>Back</Link>
                        <button>Free application with advertising</button>
                        <button onClick={(Event)=>(this.sum(10000))}>Advertising-free payment application</button>
                        <button >Shopping within the app</button>
                        <button>I don't know</button>
                        <br></br> 
                        {this.state.value}
                    </div>
            )
        }else if(this.state.nextPage===7){
            return(
                <div >
                        <Header></Header>
                        <Footer></Footer>
                        <header>Page {this.state.nextPage} of 10</header>
                        <h1>How do you want to take benefit from your app?</h1> <Link onClick={(Event)=>(this.rest())}>Back</Link>
                        <button>Free application with advertising</button>
                        <button onClick={(Event)=>(this.sum(10000))}>Advertising-free payment application</button>
                        <button >Shopping within the app</button>
                        <button>I don't know</button>
                        <br></br> 
                        {this.state.value}
                    </div>
            )
        }else if(this.state.nextPage===8){
            return(
                <div >
                        <Header></Header>
                        <Footer></Footer>
                        <header>Page {this.state.nextPage} of 10</header>
                        <h1>How do you want to take benefit from your app?</h1> <Link onClick={(Event)=>(this.rest())}>Back</Link>
                        <button>Free application with advertising</button>
                        <button onClick={(Event)=>(this.sum(10000))}>Advertising-free payment application</button>
                        <button >Shopping within the app</button>
                        <button>I don't know</button>
                        <br></br> 
                        {this.state.value}
                    </div>
            )
        }else if(this.state.nextPage===9){
            return(
                <div >
                        <Header></Header>
                        <Footer></Footer>
                        <header>Page {this.state.nextPage} of 10</header>
                        <h1>How do you want to take benefit from your app?</h1> <Link onClick={(Event)=>(this.rest())}>Back</Link>
                        <button>Free application with advertising</button>
                        <button onClick={(Event)=>(this.sum(10000))}>Advertising-free payment application</button>
                        <button >Shopping within the app</button>
                        <button>I don't know</button>
                        <br></br> 
                        {this.state.value}
                    </div>
            )
        }else if(this.state.nextPage===10){
            return(
                <div >
                        <Header></Header>
                        <Footer></Footer>                    
                        <header>Page {this.state.nextPage} of 10</header>
                        <h1>How do you want to take benefit from your app?</h1> <Link onClick={(Event)=>(this.rest())}>Back</Link>
                        <button>Free application with advertising</button>
                        <button onClick={(Event)=>(this.sum(10000))}>Advertising-free payment application</button>
                        <button >Shopping within the app</button>
                        <button>I don't know</button>
                        <br></br> 
                        {this.state.value}
                    </div>
            )
        }else if(this.state.nextPage===11){
            ///Poner formulario de correo
            //Precio final en el div
            return(
                <div>
                   <span>${this.state.value/18} total cost </span> 
                </div>
                
            )
            
        }
        
    }
}

export default Questions;