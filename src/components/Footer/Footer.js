import React, { Component } from 'react'
import img1 from '../images/erweima_07_07.png'
import img2 from '../images/taobao_07.png'
import img3 from '../images/weixn_07.png'
import img4 from '../images/logo.png'
import './footer.css'

class Footer extends Component {
  render(){
    return(
      <div className="footer">
          <div className="f_up">
            <div className="up_con ">
              <div className="help">
                <h3>帮助信息</h3><br />
                <p>
                  <i className="iconfont">&#xe65d;</i><a href="javascript:;">购物指南</a>
                  <i className="iconfont">&#xe6b9;</i><a href="javascript:;">服务中心</a><br />
                  <i className="iconfont">&#xe611;</i><a href="javascript:;">支付方式</a>
                  <i className="iconfont">&#xe640;</i><a href="javascript:;">关于我们</a><br />
                  <i className="iconfont">&#xe63b;</i><a href="javascript:;">配送方式</a>
                  <i className="iconfont">&#xe6c9;</i><a href="javascript:;">免责条款</a><br />
                  <i className="iconfont">&#xe501;</i><a href="javascript:;">售后服务</a>
                  <i className="iconfont">&#xe636;</i><a href="javascript:;">友情链接</a>
                </p>
              </div>
              <div className="about">
                <h3>关于我们</h3><br />
              <div className="size1">
                  <p className='taobao'>
                    <img src={img1} alt="" /><br />
                    <img src={img2} alt="" className="ico"/>
                  </p>
                  <p className='weixin'>
                    <img src={img1} alt="" /><br />
                    <img src={img3} alt="" className="ico"/>
                  </p>
                </div>
              </div>
              <div className="people">
                <h3>客服热线</h3>
                <p>
                  <i className="iconfont phone">&#xe6b9;</i>
                  <span>400 113 5353 <br />[周一至周五 9:00-18:00]</span>
                </p>
              </div>
            </div>
          </div>
          <div className="f_down">
            <div className="f_con">
              <div className="down_le">
                <img src={img4} alt="" />
              </div>
              <div className="down_ri">
                <p>北京开普乐科技有限公司©版权所有 Copyright 2015-2025 Morethan.cc All rights reserved<br />地址：北京市朝阳区建国路93号院4号楼4层505</p>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Footer
