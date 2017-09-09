import React, { Component } from 'react'
import './ordersite.css'
class Ordersite extends Component {
  state = {
    address:[
      {
        name:'阿不来提·阿不杜热西提',
        ages:'新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭9连5区13号木村',
        phone:'186***5194'
      },
      {
        name:'阿不来提·阿不杜热西提',
        ages:'新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭9连5区13号木村',
        phone:'186***5194'
      },
      {
        name:'阿不来提·阿不杜热西提',
        ages:'新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭9连5区13号木村',
        phone:'186***5194'
      },
      {
        name:'阿不来提·阿不杜热西提',
        ages:'新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭9连5区13号木村',
        phone:'186***5194'
      },
      {
        name:'阿不来提·阿不杜热西提',
        ages:'新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭9连5区13号木村',
        phone:'186***5194'
      },
      {
        name:'阿不来提·阿不杜热西提',
        ages:'新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭9连5区13号木村',
        phone:'186***5194'
      }
    ],
    addressIndex:0
  }
  handleAdd1 = (i) => {
    this.setState({
      addressIndex:i
    })
  }
  render(){
    const add = this.state.address.map((item,i) => (
      <div className={`ordersite1 ${this.state.addressIndex===i&&'addresspic'}`} onClick={()=>this.handleAdd1(i)} key={i}>
        <p>
          <i className="news1">&#xe6ee;</i>{item.name}<br/>
        <i className="news1">&#xe618;</i>{item.ages}<br/>
      <i className="news1">&#xe6b9;</i>{item.phone}
        </p>
        <p>
          <a href="javascript:;">设为默认</a>
        <a href="javascript:;"> <i className="news1">&#xe69d;</i>编辑</a>
      <a className='clear' href="javascript:;"><i className="news1">&#xe608;</i>删除</a>
    <a className='ordersite_moren' href="javascript:;">默认</a>
        </p>
        <p className="ordersite_remo">
          <a href="javascript:;">确定删除</a>
        <a href="javascript:;">不删除</a>
        </p>
      </div>
    ))
    return(
      <div className="ordersite">
        {add}
        <div className="ordermore">
          <a href="javascript:;" className="order_more">显示更多</a>
        </div>
      </div>

    )
  }
}

export default Ordersite
