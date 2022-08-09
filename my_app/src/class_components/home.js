import React, { Component } from 'react'

import Header from './header'
import Footer from './footer'

export default class home extends Component {

    constructor(){
        super()
    }


  render() {

    const page = "/footer";

    if(page === "/header"){
        return (
            <div>
              <Header />
            </div>
          )
    }else if(page === "/footer"){
        return (
            <div>
              <Footer />
            </div>
          )
    }else{
        return (
            <div>
                <h1>Home Page</h1>
            </div>
        )
    }
  }
}
