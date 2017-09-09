import React, { Component } from 'react'
import './ordergoods.css'
import img1 from '../images/img1_03.png'
import img2 from '../images/a_03.png'
import img3 from "../images/b_03.png"
class Ordergoods extends Component {
  render(){
    return(
      <div className="ordergoods">
        <h3>商品信息<a href="./shop.html">返回购物车修改</a></h3>
          <ul>
            <li>
              <img src={img1} alt="" />
              <span>龙之谷六周年限定礼包大Boss冰龙款男士T恤</span>
              <span>款式:iphone 5</span>
              <span>尺码:XL</span>
              <span>￥79:00</span>
              <span>X 1</span>
            </li>
            <li>
              <img src={img1} alt="" />
              <span>龙之谷六周年限定礼包大Boss冰龙款男士T恤</span>
              <span>款式:iphone 5</span>
              <span>尺码:XL</span>
              <span>￥79:00</span>
              <span>X 1</span>
            </li>
          </ul>
          <div className="orderway">
          <div className='way1'>
            <h3>支付方式</h3>
            <img src={img2} alt="" />
          </div>
          <div className='logistics'>
            <h3>物流方式</h3>
            <img src={img3} alt="" />
          </div>
          <div className='bill'>
            <h3>发票信息</h3>
            <a className='no_fapiao' href="javascript:;">不开发票</a>
            <a className='fapiao' href="javascript:;">开发票</a>
          </div>
          <div className='conserve'>
          <input type="text" placeholder="请输入个人/单位名称" />
          <a href="#">保存</a>
          </div>
          </div>
      </div>
    )
  }
}

export default Ordergoods
