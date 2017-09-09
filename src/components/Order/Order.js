import React, { Component } from 'react'
import Ordertitle from '../Ordertitle/Ordertitle.js'
import Orderadd from '../Orderadd/Orderadd.js'
import Ordersite from '../Ordersite/Ordersite.js'
import Ordergoods from '../Ordergoods/Ordergoods.js'
import Ordercoupon from '../Ordercoupon/Ordercoupon.js'
import './order.css'
class Order extends Component {
  render(){
    return(
      <div className="order">
        <div className="order_wrap">
          <Ordertitle/>
          <Orderadd/>
          <Ordersite/>
          <Ordergoods/>
          <Ordercoupon/>
        </div>
      </div>
    )
  }
}

export default Order
