import React, { Component } from 'react'
import './size.css'

class Size extends Component {
  state = {
    types:[
      {type:'iphone 5'},
      {type:'iphone 6'},
      {type:'iphone 6+'}
    ],
    sizes:[
      {size:'XXS'},
      {size:'XS'},
      {size:'S'},
      {size:'M'},
      {size:'L'},
      {size:'XL'},
      {size:'XXL'}
    ],
    styleIndex:0,
    sizeIndex:0,
    num:1
  }
  handleClick = (i) => {
    this.setState({
      styleIndex:i
    })
  }
  handleClick1 = (i) => {
    this.setState({
      sizeIndex:i
    })
  }
  handleSub = () => {
    if(this.state.num <1){
      return
    }
    this.setState({
        num:this.state.num-1
    })
  }
  handleAdd = () => {
    this.setState({
        num:this.state.num+1
    })
  }
  render(){
    const newtype = this.state.types.map((item,i) =>(<a
      className={`${this.state.styleIndex===i&& 'type'}`} key={i} onClick={() => this.handleClick(i)} href="javascript:;">
      {item.type}
    </a>))
    const newsizes = this.state.sizes.map((item,i)=>(
      <a className= {`${this.state.sizeIndex===i&& 'type'}`} key={i} onClick={() => this.handleClick1(i)} href="javascript:;">
        {item.size}
      </a>
    ))
    return(
      <div className="size">
        <ul>
          <li className="price">
            <span>预售价</span>
            <p><b>￥700</b><br/><span>正价￥960.00</span></p>
          </li>
          <li className="style">
            <span>款式</span>
            <p>
              {newtype}
            </p>
          </li>
          <li className="sizes">
            <span>尺码</span>
            <p>
              {newsizes}
            </p>
          </li>
          <li className="quantity">
            <span>数量</span>
            <p>
              <a href="javascript:;" className="size_sub" onClick={this.handleSub}>-</a>
              <span className="size_count">{this.state.num}</span>
              <a href="javascript:;" className="size_add" onClick={this.handleAdd}>+</a>
            </p>
          </li>
        </ul>
        </div>
    )
  }
}

export default Size
