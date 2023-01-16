import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div>
  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    <ul className="navbar-nav">
         <li className="nav-item d-none d-sm-inline-block">
        <a href="#" className="nav-link">Overview</a>
      </li>
    </ul>
    </nav>
      </div>
    )
  }
}

export default Header
