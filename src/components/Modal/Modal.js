import React, { Component } from 'react'
import './modal.css'
import img1 from "../images/999_03.jpg"
import img2 from "../images/code_07.jpg"

class Modal extends Component {
  state = {
    username:'',
    password:''
  }
  changeUserName = (e) => {
    this.setState({
      username:e.target.value
    })
  }
  changePassWord = (e) => {
    this.setState({
      password:e.target.value
    })
  }
  handleLogin = () => {
    this.props.login(this.state.username)
    
  }
  render(){
    const { handleClear, currentUsra } = this.props
    const { username, password } = this.state
    return(
      <div className="modal">
          <div className="modal_card clearfix">
              <h3><a href="javascript:;" className="clear1" onClick={handleClear}>X</a></h3>
              <img src={img1} alt="" />
              <div className="modal_login">
                  <input type="text" onChange={this.changeUserName} value={username}
                    className="modal_username" placeholder="请输入手机号" />
                  <input type="password" onChange={this.changePassWord} value={password}
                    className="modal_password" placeholder="请输入银行卡密码" />
                  <input type="text" className="modal_code" placeholder="请输入验证码" />
                  <img src={img2} alt="" />
                  <a href="javascript:;" className="modal_phone"><i className="iconfont">&#xe606;</i></a>
                  <a href="javascript:;" className="modal_pass"><i className="iconfont">&#xe60a;</i></a>
                  <a href="javascript:; "
                    onClick={this.handleLogin}
                    className="modal_log">登录</a>
                  <a href="javascript:;" className="modal_forget">忘记密码？</a>
                  <a href="javascript:;" className="modal_sign">注册</a>
              </div>
          </div>
          <div className="modal_connect">
              <a href="javascript:;" className="modal_qq"><i className="iconfont">&#xe62d;</i></a>
              <a href="javascript:;" className="modal_weixin"><i className="iconfont">&#xe659;</i></a>
              <a href="javascript:;" className="modal_weibo"><i className="iconfont">&#xe629;</i></a>
          </div>
      </div>
    )
  }
}

export default Modal
