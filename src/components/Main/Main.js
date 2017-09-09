import React, { Component } from 'react'
import Home from '../Home/Home.js'
import Cart from '../Cart/Cart.js'
import Add from '../Add/Add.js'
import './main.css'

class Main extends Component {
  render(){
    return(
      <div className="main">
        <Add/>
      </div>
    )
  }
}

export default Main
