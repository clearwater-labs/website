import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import './App.css'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Layout>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Layout>
    )
  }
}

export default App
