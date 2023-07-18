import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './component/Login'
import Register from './component/Register'
import Dashboard from './component/Dashboard'
import Navbar from './component/Navbar'
import Content from './component/Content'
import Dash from './component/Dash'
import BodyContent from './component/BodyContent'
import Footer from './component/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/dashboard">
          <Navbar />
          <br></br>
          <Dash />
          <br></br>
          <Content />
          <br></br>
          <Dashboard />
          <br></br>
          <br></br>
          <br></br>
          <BodyContent />
          <br></br>
          <Footer />
        </Route>
      </Switch>

    </BrowserRouter>
  )
}

export default App