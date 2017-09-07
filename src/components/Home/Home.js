import React, { Component } from 'react'
import Banner from '../Banner/Banner.js'
import Count from '../Count/Count.js'


class Home extends Component {
  render(){
    return(
      <div className="home">
        <Banner/>
        <Count/>
      </div>
    )
  }
}

export default Home
