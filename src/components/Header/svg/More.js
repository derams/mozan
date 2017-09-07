import React, { Component } from 'react'

class More extends Component {
  render(){
    const {color,wid,hei} = this.props
    return(
      <div className="more">
        <svg t="1504683453735" fill={color} class="icon" viewBox="0 0 1235 1024" version="1.1" width={wid} height={hei}>
        <path d="M0 0l1234.805371 0L1234.805371 180.703225 0 180.703225 0 0z" p-id="2347"></path><path d="M0 843.266658l1234.805371 0 0 180.733342L0 1024 0 843.266658z" p-id="2348"></path><path d="M0 421.640858l1234.805371 0 0 180.673108L0 602.313966 0 421.640858z" p-id="2349"></path>
        </svg>

      </div>
    )
  }
}

export default More
