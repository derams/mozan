import React, { Component } from 'react'
import img1 from '../images/shop_07.jpg'
import img2 from '../images/88_03.jpg'
import './add.css'
class Add extends Component {
  render(){
    return(
      <div className="add">
        <div className="add_con">
            <p>已成功加入购物车!</p>
            <div className="add_comment clearfix">
                <p>
                    <img src={img1} alt="" />
                    <span>龙之谷六周年限定礼包大Boss<br />冰龙款男士T恤</span>
                </p>
                <span>款式：iphone5 <br />尺码：XL <br />数量：X1</span>
                <a href="./shop.html" className="account">去购物车结算</a>
                <a href="../index.html" className="return">返回</a>
            </div>
            <div className="add_tip">
                <span>你可能还需要</span>
                <div></div>
            </div>
            <div className="add_shop clearfix">
                <div className="clearfix">
                    <img src={img2} alt="" />
                    <p className="clearfix">
                    <strong>龙之谷六周年限定礼包<br />大Boss冰龙款男士T恤</strong>
                    <span>￥<b className="add_pic">88.00</b></span>
                    <a href="javascript:;" className="add_shop1"><i className="iconfont">&#xe7a8;</i></a>
                    </p>
                </div>
                <div className="clearfix">
                    <img src={img2} alt="" />
                    <p className="clearfix">
                    <strong>龙之谷六周年限定礼包<br />大Boss冰龙款男士T恤</strong>
                    <span>￥<b className="add_pic">88.00</b></span>
                    <a href="javascript:;" className="add_shop1"><i className="iconfont">&#xe7a8;</i></a>
                    </p>
                </div>
                <div className="clearfix">
                    <img src={img2} alt="" />
                    <p className="clearfix">
                    <strong>龙之谷六周年限定礼包<br />大Boss冰龙款男士T恤</strong>
                    <span>￥<b className="add_pic">88.00</b></span>
                    <a href="javascript:;" className="add_shop1"><i className="iconfont">&#xe7a8;</i></a>
                    </p>
                </div>
                <div className="clearfix">
                    <img src={img2} alt="" />
                    <p className="clearfix">
                    <strong>龙之谷六周年限定礼包<br />大Boss冰龙款男士T恤</strong>
                    <span>￥<b className="add_pic">88.00</b></span>
                    <a href="javascript:;" className="add_shop1"><i className="iconfont">&#xe7a8;</i></a>
                    </p>
                </div>
                <div className="clearfix">
                    <img src={img2} alt="" />
                    <p className="clearfix">
                    <strong>龙之谷六周年限定礼包<br />大Boss冰龙款男士T恤</strong>
                    <span>￥<b className="add_pic">88.00</b></span>
                    <a href="javascript:;" className="add_shop1"><i className="iconfont">&#xe7a8;</i></a>
                    </p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Add
