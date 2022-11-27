import React, { Component } from 'react'
import './Box.css'
import {choice} from './helper'
class Box extends Component{
    static defauliProps = {
        allColors : ["purple", "magenta", "lilac", "pink"]
    }
    constructor(props){
        super(props);
        const rndClr = choice(this.props.allColors)
         this.state = {color: rndClr}
       this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){

    }
    render(){
        return(
            <div className='Box' style={{backgroundColor: this.state.color}} onclick=
            {this.handleClick}>

            </div>
        )
    }
}
export default Box
