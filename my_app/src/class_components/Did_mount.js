import React, { Component } from 'react'

export default class Did_mount extends Component {
 
 
    constructor(){
        super()
    }

    componentDidMount() {

        //এই ব্লক টি কল করা ছাড়াই রান হবে।
        //এখানে api ব্যবহার করা হয়। 
        // কারন componentDidMount কে কল করা ছাড়াই লোড হয়ে যায়। 

    }
 
 
 
    render() {
    return (
      <div>Did_mount</div>
    )
  }
}
