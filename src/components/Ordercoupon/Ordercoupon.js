import React, { Component } from 'react'
import './Ordercoupon.css'
import img1 from "../images/img_03.png"
import img2 from "../images/img_03.png"
import img3 from "../images/img_03.png"
import img4 from "../images/img_03.png"
import img5 from "../images/img_04_03.png"
import img6 from "../images/img_04_03.png"
import { Link } from 'react-router-dom'
class Ordercoupon extends Component {
  render(){
    return(
      <div className="Ordercoupon">
        <div className="Ordercoupon_value">
              <p>
                <span>使用优惠券<i className="Ordercoupon_sanjiao">&#xe617;</i></span>
                <input type="text" placeholder="请输入优惠码" />
                <input type="text" placeholder="请输入优惠券密码" />
                <a href="#">绑定</a>
              </p>
              <div className="Ordercoupon_img">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
              </div>
            </div>
            <div className="Ordercoupon_remark">
              <div className="Ordercoupon_beizhu"><span>备注</span>
              <textarea></textarea>
              </div>
              <div className="Ordercoupon_number">
                <ul className='Ordercoupon_number1'>
                  <li>数量</li>
                  <li>单价</li>
                  <li>小计</li>
                  <li>优惠</li>
                  <li>运费</li>
                  <li>实际应付</li>
                </ul>
                <ul className='Ordercoupon_number2'>
                  <li>2</li>
                  <li>X</li>
                  <li>￥79.00</li>
                  <li>=</li>
                  <li>￥158.00</li>
                  <li>-</li>
                  <li>￥0.00</li>
                  <li>+</li>
                  <li>￥10.00</li>
                  <li>=</li>
                  <li>￥168.00</li>
                </ul>
                <Link className='Ordercoupon_submit' to="/cashier">提交订单 </Link>
              </div>
            </div>
      </div>
    )
  }
}

export default Ordercoupon
