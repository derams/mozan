import React, { Component } from 'react'
import './cashier.css'
import img1 from "../images/zhifubao.jpg"
import img2 from "../images/1_03.png"
import img3 from "../images/xuankuang.png"
import { Link } from 'react-router-dom'
class Cashier extends Component {
  render(){
    return(
      <div className="cashier">
        <div className="cashier_main">
          <div className="cashier_up_con1">
            <p className="cashier_up_left">收银台</p>
            <p className='cashier_up_right'>
              <span>购物车</span>
              <span>填写订单</span>
              <span>付款,购买成功</span>
            </p>
          </div>
          <div className="cashier_down">
          <div className="cashier_down_con1">
            <p>
              <span>订单提交成功,请您尽快付款！</span><br />
              <span>请您在提交订单后<em>24小时</em>内完成支付,否则订单会自动取消。</span>
            </p>
            <p>应付金额：<span>￥168.00</span></p>
          </div>
          <div className="cashier_down_con2">
            <p>订单号:12345678912345</p>
            <p className='clearfix'>
              <span><i className="cashier_name">&#xe6ee;</i>迪里木拉提<i className="cashier_iphone">&#xe6b9;</i>186****0734</span><br />
              <span><i className="cashier_address">&#xe618;</i>新疆维吾尔自治区伊犁哈萨克自治县奎屯市乌鲁木齐西路56园72幢1单元1103号</span>
            </p>
          </div>
          <div className="cashier_choose">
            <p className='clearfix'>
              <span>选择支付方式</span>
              <a href="#"><img src={img1} alt="" /></a>
              <a href="#"><img src={img2} alt="" /></a>
            </p>
            <div className="cashier_active">
              <a href="#"><img src={img3} alt="" /></a>
            </div>
          </div>
          <div className="cashier_payment clearfix">
            <Link to='/pay'>提交订单</Link>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Cashier
