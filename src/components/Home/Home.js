import React, { Component } from 'react'
import Banner from '../Banner/Banner.js'
import Content from '../Content/Content.js'
import Button from '../Button/Button.js'
import img from '../images/pic_03.png'

class Home extends Component {
  render(){
    return(
      <div className="home">
        <Banner/>
        <Content/>
        <Button/>
        <img src={img} alt=""/>
      </div>
    )
  }
}

export default Home
