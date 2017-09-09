import React, { Component } from 'react'
import './orderadd.css'
class Orderadd extends Component {
  render(){
    return(
      <div className="orderadd">
          <p>
            <span>收货地址</span>
            <span><a href="#"><i className="address1">&#xe82c;</i></a>新增地址</span>
          </p>
      </div>
    )
  }
}

export default Orderadd
