import React, { Component } from 'react'
import './header.css'
import More from './svg/More'
import Search from './svg/Search'
import img1 from '../images/logo.png'
import Shop from './svg/Shop'

class Header extends Component {
  render(){
    return(
      <div className="header">
          <div className="top ">
            <a className='home' href="javascript:;"><More color='#CCCCCC' wid='44' hei='30'/></a>
            <a className='logo' href="javascript:;"><img src={img1} alt=""/></a>
            <a className='search' href="javascript:;"><Search color='#CCCCCC' wid='44' hei='30'/></a>
            <a className='car' href="javascript:;"><Shop color='#CCCCCC' wid='44' hei='30'/></a>
            <a className='login' href="javascript:;">登录/注册</a>
          </div>
      </div>
    )
  }
}

export default Header
