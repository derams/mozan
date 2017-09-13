import React, { Component } from 'react'
import Main from '../Main/Main'
import Layout from '../Layout/Layout'
import { BrowserRouter as Router } from 'react-router-dom'
import './app.css'

class App extends Component {
  render(){
    return(
      <div className="app">
        <Router>
          <Layout>
            <Main/>
          </Layout>
        </Router>
      </div>
    )
  }
}

export default App
