import React, { Component } from 'react'
import Home from '../Home/Home.js'
import Cart from '../Cart/Cart.js'
import Add from '../Add/Add.js'
import Order from '../Order/Order.js'
import Cashier from '../Cashier/Cashier.js'
import Pay from '../Pay/Pay.js'
import './main.css'
import { Route, Link } from 'react-router-dom'
class Main extends Component {
  render(){
    return(
      <div className="main">
        <Route path='/' exact component={Home}/>
        <Route path='/order' component={Order}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/add' component={Add}/>
        <Route path='/pay' component={Pay}/>
        <Route path='/cashier' component={Cashier}/>
      </div>
    )
  }
}

export default Main
