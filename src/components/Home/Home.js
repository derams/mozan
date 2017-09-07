import React, { Component } from 'react'
import Banner from '../Banner/Banner.js'
import Content from '../Content/Content.js'

class Home extends Component {
  render(){
    return(
      <div className="home">
        <Banner/>
        <Content/>
      </div>
    )
  }
}

export default Home
