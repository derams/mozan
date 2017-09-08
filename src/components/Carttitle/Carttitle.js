import React, { Component } from 'react'
import './carttitle.css'

class Carttitle extends Component {
  render(){
    return(
      <div className="carttitle">
        <p>
            购物车<span>[<span class="sum">99</span>件]</span>
        </p>
        <ul>
            <li>购物车</li>
            <li>填写订单</li>
            <li>付款，购买成功</li>
        </ul>
      </div>
    )
  }
}

export default Carttitle
