import React, { Component } from 'react'
import './size.css'

class Size extends Component {
  render(){
    return(
      <div className="size">
        <ul>
          <li className="price">
            <span>预售价</span>
            <p><b>￥700</b><br/><span>正价￥960.00</span></p>
          </li>
          <li className="style">
            <span>款式</span>
            <p><a href="javascript:;">iphone 5</a>
            <a href="javascript:;">iphone 6</a>
            <a href="javascript:;">iphone 6+</a></p>
          </li>
          <li className="sizes">
            <span>尺码</span>
            <p>
              <a href="javascript:;">XXS</a>
              <a href="javascript:;">XS</a>
              <a href="javascript:;">S</a>
              <a href="javascript:;">M</a><br/>
              <a href="javascript:;">L</a>
              <a href="javascript:;">XL</a>
              <a href="javascript:;">XXL</a>
            </p>
          </li>
          <li className="quantity">
            <span>数量</span>
            <p>
              <a href="javascript:;" className="size_sub">-</a>
              <span className="size_count">1</span>
              <a href="javascript:;" className="size_add">+</a>
            </p>
          </li>
        </ul>
        </div>
    )
  }
}

export default Size
