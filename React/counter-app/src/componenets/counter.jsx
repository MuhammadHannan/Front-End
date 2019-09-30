import React, { Component } from 'react';

class Counter extends Component {
   
    render() 
    {       
        return (
                <div>                   
                    <span className ={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button 
                    onClick={() => this.props.onIncrement(this.props.counter)} 
                    className = "btn btn-secondary btn-sm">Increment</button>            
                    <button onClick={()=>this.props.onDelete(this.props.counter.id)} 
                    className = "btn btn-danger btn-sm m-2">Delete</button>            
                </div>
         ); 
    }

    getBadgeClasses()
    {
        // Remember 
        // we cannot use const if we are goint to change the vaule assigned to in the future 
        // therefore we have let, using let wil help use to chagne the value ... 
        // 
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount()
    {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value
    }
}
export default Counter;