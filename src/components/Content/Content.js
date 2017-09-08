import React, { Component } from 'react'
import Count from '../Count/Count.js'
import Size from '../Size/Size.js'
import './content.css'

class Content extends Component {
  render(){
    return(
      <div className="content">
        <Count/>
        <Size/>
      </div>
    )
  }
}

export default Content
