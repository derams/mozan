import React, { Component } from 'react'
import './cartnav.css'
class Cartnav extends Component {
  render(){
    return(
      <div className="cartnav clearfix">
        <ul class="clearfix">
          <li>
          <input type="checkbox" class="all" />全选
          </li>
          <li>商品</li>
          <li>单价</li>
          <li>数量</li>
          <li>小计</li>
          <li>操作</li>
        </ul>
      </div>
    )
  }
}

export default Cartnav
