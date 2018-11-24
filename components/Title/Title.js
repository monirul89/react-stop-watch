import React, { Component } from 'react';
import './Title.css';

class Title extends Component{

    constructor(props){
        super(props)

        this.state ={
            title: 'This is dummy title',
            isInput: false
        }
    }
    editHandler(){
        this.setState({
            ...this.state,
            isInput:true
        })
    }
    inputChangeHandeler(event){
        this.setState({
        ...this.state,
                title: event.target.value
        })
    }
    keyPressHandler(event){
        if(event.key==='Enter'){
            this.setState({
                ...this.state,
                isInput:false
            })
        }
    }
    blurHandeler(event){
        this.setState({
            ...this.state,
            isInput:false
        })
    }
    render(){
        let output = null;

        if(this.state.isInput){
        output=<div className="Title">
                <input 
                className="form-control"
                 type="text"
                 onChange={(event)=> this.inputChangeHandeler(event)}
                 onKeyPress={ event =>this.keyPressHandler(event)}
                 onBlur={ event => this.blurHandeler(event)}
                 value={this.state.title } />
                </div>
        }else{
            output = (
                <div className="d-flex Title">
                    <h2 className="display-4">{this.state.title}</h2>
                    <span onClick={()=>this.editHandler()} className="ml-auto edit-icon">
                        <i className="fas fa-pencil-alt"></i>
                    </span>
                </div>
            )
        }
        return(
            <div>
                {output}
            </div>
        )
    }
}
export default Title;