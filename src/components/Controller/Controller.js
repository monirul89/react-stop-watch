import React, {Component} from 'react';

class Controller extends Component{
    constructor(props){
        super(props)

        this.state = {
            start:true,
            pause:false,
            lap:false,
            reset:false 
        }
    }
    startHandeler(){
        this.setState({
            ...this.state,
            start:false,
            pause:true,
            lap:true
        })
        this.props.start()
    }
    pauseHandeler(){
        this.setState({
           ...this.state,
           start:true,
           pause:false,
           lap:false,
           reset:true
        })
        this.props.pause(); 
    }
    lapHandeler(){
        this.props.lap();
    }
    resetHandeler(){
        this.setState({
            start:true,
            pause:false,
            lap:false,
            reset:false 
        })
        this.props.reset();
    }
    getController(){
        let output = null;
        if(this.state.start && !this.state.reset){
            output = (
                <div>
                    <button 
                    className="btn btn-success btn-lg px-5"
                    onClick={event=>this.startHandeler(event)}
                    >Start</button>
                </div>
            )
        }else if(this.state.pause && this.state.lap){
            output = (
                <div>
                    <button 
                    className="btn btn-primary btn-lg px-5 mx-3"
                    onClick={event=>this.pauseHandeler(event)}
                    >Pause</button>
                    <button 
                    className="btn btn-warning btn-lg px-5 mx-3"
                    onClick={event=>this.lapHandeler(event)}
                    >Lap</button>
                </div>
            )
        }else if(this.state.start && this.state.reset){
            output = (
                <div>
                    <button 
                    className="btn btn-success btn-lg px-5"
                    onClick={event=>this.startHandeler(event)}
                    >Continue</button>
                    <button 
                    className="btn btn-danger btn-lg px-5 mx-3"
                    onClick={event=>this.resetHandeler(event)}
                    >Reset</button>
                </div>
            )
        }
        return output;
    }
    render(){
        return(
            this.getController()
        )
    }
}

export default Controller;