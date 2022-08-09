import React, { Component } from 'react'
export default class Ref extends Component {
  
    Submit=()=>{
        var FirstName = this.FistName.value;
        var LastName = this.LastName.value
        alert(FirstName + LastName)
    }
  
    render() {
        return (
            <div>
                <input ref={(FN)=>{this.FistName=FN}}placeholder='First Name' type="text"/>           
                <input ref={(LN)=>{this.LastName=LN}} placeholder='Last Name' type="text"/>        
                <br/>
                <button onClick={this.Submit}>Submit</button>
            </div>
        )
    }
}