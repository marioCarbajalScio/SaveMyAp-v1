import React, { Component } from 'react';
import Question from './Question';
import FromEmail from './form-email';

class Questions2 extends Component{

    constructor(props){
        super(props)
        this.state={
            nextPage:1,
            value:0,
            valores:[0,0,0,0,0,0,0,0,0,0,0],
            questions: [],
            loading: true
        };
    }

    //Info process functions
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

    //added API func
    componentDidMount(){
        fetch('http://10.16.0.64:9999')
        .then(res => res.json())
        .then((data) => {
            this.setState({questions:data, loading:false})
        })
        .catch(console.log)
    }

    render(){
    console.log(this.state.questions)
    if(!this.state.loading){
        switch(this.state.nextPage){
            case 1:
                return(
                    
                    <div>
                        {!this.state.loading &&
                        <Question 
                            //data={this.state} 
                            page={this.state.nextPage}
                            question={this.state.questions[this.state.nextPage-1].content}
                            answers={this.state.questions[this.state.nextPage-1].answers}//Contiene respuestas y valores
                            //Metodos para modificar los valores de este componente
                            sumar={this.sum}
                            resta={this.res}
                            contador={this.cambiarContador}
                            pagina={this.cambiarPagina}
                        ></Question>
                        }
                    </div>

                    
                )
            case 2:
                return(
                    <Question></Question>
                )
            case 3:
                return(
                    <Question></Question>
                )
            case 4:
                return(
                    <Question></Question>
                )
            case 5:
                return(
                    <Question></Question>
                )
            case 6:
                return(
                    <Question></Question>
                )
            case 7:
                return(
                    <Question></Question>
                )
            case 8:
                return(
                    <Question></Question>
                )
            case 9:
                return(
                    <Question></Question>
                )
            case 10:
                return(
                    <Question></Question>
                )
            case 11:
                return(
                    <FromEmail></FromEmail>
                )
            }
        }else{
            return <div>Loading...</div>
        }
    }

}

export default Questions2;