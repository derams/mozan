import React, { Component } from 'react'
import './ordertitle.css'
class Ordertitle extends Component {
  render(){
    return(
      <div className="ordertitle">
          <p className="ordertitle_left">填写订单</p>
          <p className='ordertitle_right'>
            <span>购物车</span>
            <span>填写订单</span>
            <span>付款,购买成功</span>
          </p>
      </div>
    )
  }
}

export default Ordertitle
