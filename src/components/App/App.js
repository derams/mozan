import React, { Component } from 'react'
import Main from '../Main/Main'
import Layout from '../Layout/Layout'
import './app.css'

class App extends Component {
  render(){
    return(
      <div className="app">
        <Layout>
          <Main/>
        </Layout>
      </div>
    )
  }
}

export default App
