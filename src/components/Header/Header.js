import React, { Component } from 'react'
import './header.css'
import More from './svg/More'
import Search from './svg/Search'
import img1 from '../images/logo.png'
import Shop from './svg/Shop'
import Modal from '../Modal/Modal.js'

class Header extends Component {
  state = {
    show:false,
    currentUsra:''
  }
  handleLogin = () => {
    this.setState({
      show:true
    })
  }
  loginOut = () =>{
    console.log(1);
    this.setState({
      currentUsra:''

    })
  }
  handleClear = () => {
    this.setState({
      show:false
    })
  }
  login = (username) => {
    this.setState({
      currentUsra:username,
      show:false
    })
  }
  render(){
    let { show, currentUsra } = this.state
    const UE = <div>
        {currentUsra} | <span onClick={this.loginOut}>
        退出
        </span>
    </div>
    return(
      <div className="header">
          <div className="top ">
            <a className='home' href="javascript:;"><More color='#CCCCCC' wid='44' hei='30'/></a>
            <a className='logo' href="javascript:;"><img src={img1} alt=""/></a>
            <a className='search' href="javascript:;"><Search color='#CCCCCC' wid='44' hei='30'/></a>
            <a className='car' href="javascript:;"><Shop color='#CCCCCC' wid='44' hei='30'/></a>
          {currentUsra? UE :<a className='login' href="javascript:;" onClick={this.handleLogin}>登录/注册</a>}
          </div>
          {show&&<Modal
            login={this.login}
            handleClear={this.handleClear}/>}
      </div>
    )
  }
}

export default Header
