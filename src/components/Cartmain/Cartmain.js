import React, { Component } from 'react'
import img from '../images/img1_03.png'
import './cartmain.css'
class Cartmain extends Component {
  render(){
    return(
      <div className="cartmain">
        <ul class="clearfix com">
            <li><input type="checkbox" className="shop" /></li>
            <li className="clearfix">
                <img src={img} alt="" />
                <p>
                    龙之谷六周年限定礼包大Boss冰龙款男<br />士T恤
                    <span>
                        款式：iphone 5<br />
                        尺码：XL
                    </span>
                </p>
            </li>
            <li>￥<span className="price">79.00</span></li>
            <li><a href="javascript:;" className="cart_add">+</a></li>
            <li><input type="text" value="1" className="int" /></li>
            <li><a href="javascript:;" className="cart_sub">-</a></li>
            <li>￥<span className="subtotal">79.00</span></li>
            <li><a href="javascript:;" className="remove">X</a></li>
            <li className="show">
                <a href="javascript:;" className="ok">确定删除</a>
                <a href="javascript:;" className="clear">不删除</a>
            </li>
        </ul>
      </div>
    )
  }
}

export default Cartmain
