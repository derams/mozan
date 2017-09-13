import React, { Component } from 'react'
import './button.css'
import { Link } from 'react-router-dom'
class Button extends Component {
  render(){
    return(
      <div className="button">
        <p></p>
      <Link to="/add">立即预购</Link>
      </div>
    )
  }
}

export default Button
