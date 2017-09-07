import React, { Component } from 'react'
import img from '../images/yugou_03.png'

class Count extends Component {
  render(){
    return(
      <div className="count">
        <div className="main_left">
            <div className="le_up">
              <img src={img} alt="" />
              <p>龙之谷六周年限定礼包大Boss冰龙款男士T恤</p>
            </div>
            <div className="le_down">
              <p>距预售结束</p>
              <div className="over">
                <span className="day">
                <em>08</em>
                <b>:</b>
                <br />
                <b>天</b>
                </span>
                <span className="hour">
                <em>30</em>
                <b>:</b>
                <br />
                <b>时</b>
                </span>
                <span className="minute">
                <em>10</em>
                <b>:</b>
                <br />
                <b>分</b>
                </span>
                <span className="second">
                <em>50</em>
                <br />
                <b></b>
                <b>秒</b>
                </span>
              </div>
              <p>
                <span>注:</span>商品将于<span>2017/8/31</span>统一发货！
              </p>
            </div>
          </div>
      </div>
    )
  }
}

export default Count
