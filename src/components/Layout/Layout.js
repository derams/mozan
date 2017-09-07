import React, { Component } from 'react'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'

class Layout extends Component {

  render(){
    return(
      <div className="layout">
        <div>
          <Header/>
            </div>
              {this.props.children}
            <div>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default Layout
