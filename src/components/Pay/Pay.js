import React, { Component } from 'react'
import './pay.css'
import img from "../images/success_03.png"
import { Link } from 'react-router-dom'
class Pay extends Component {
  render(){
    return(
      <div className="pay">
        <div className="pay_main">
        <div className="pay_up">
          <div className="pay_up_con1">
            <p className="pay_up_left">收银台</p>
            <p className='pay_up_right'>
              <span>购物车</span>
              <span>填写订单</span>
              <span>付款,购买成功</span>
            </p>
          </div>
          </div>
          <div className="pay_down">
          <div className="pay_suc_le">
              <img src={img} alt="" />
          </div>
          <div className="pay_suc_ri">
              <div className="pay_pay">支付成功！</div>
              <div className="pay_other">
                  <span>订单号：12345678912345<br />成功支付:￥168.00</span>
                  <span>
                      <Link to="/add">继续逛逛</Link>
                    <Link className='pay_look' to="order">查看订单</Link>
                  </span>
              </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Pay
