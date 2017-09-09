import React, { Component } from 'react'
import './cartcon.css'

class Cartcon extends Component {
  render(){
    return(
      <div className="cartcon ">
        <ul>
          <li>
              <input type="checkbox" className="all" />
              <a href="javascript:;">全选</a>
            <a href="javascript:;" className="remo">删除</a>
          </li>
          <li>
              共<span class="order">4</span>件商品，已选择<span class="order1">1</span>件
          </li>
        </ul>
          <a href="javascript:;" className="close">结算</a>
        <span>￥<b className="total">0.00</b></span>
        <p>
            合计：<br />[不含运费]
        </p>
      </div>
    )
  }
}

export default Cartcon
