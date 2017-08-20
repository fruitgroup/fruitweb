import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Cart from './components/Cart'

const App = () => (
  <Router basename='/'>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route  path="/cart" component={Cart}/>
      <Route  path="/login" component={Login}/>
      <Route  component={NotFound}/>
      </Switch>
  </Router>
)

export default App
