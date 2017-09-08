import React, { Component } from 'react'
import Carttitle from '../Carttitle/Carttitle.js'
import Cartnav from '../Cartnav/Cartnav.js'
import Cartmain from '../Cartmain/Cartmain.js'
import './cart.css'

class Cart extends Component {
  render(){
    return(
      <div className="cart">
        <Carttitle/>
        <Cartnav/>
        <Cartmain/>
        <Cartmain/>
      
      </div>
    )
  }
}

export default Cart
