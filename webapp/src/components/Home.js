import React, { Component } from 'react'
import '../pages/Home.css';
import { Link } from 'react-router-dom'

export default class Home extends Component {

  render() {
    return (
        <div className="nav-container">
          <ul className="navbar-left">
            <li><Link to="/login"> 登录 </Link> </li>
            <li><Link to="/login"> 注册 </Link> </li>
          </ul>

          <ul className="navbar-right">
            <li><span id="cart"> <Link to="/cart">购物车 </Link> </span> <span className="badge">3</span></li>
          </ul>
        </div>
    )
  }
}

