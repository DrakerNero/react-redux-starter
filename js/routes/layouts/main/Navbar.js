import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <div className="main-layout-navbar">
    <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button" data-toggle="collapse"
        data-target="#navbarDefault"
        aria-controls="navbarDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <Link className="navbar-brand" to="#">Starter</Link>
      <div className="collapse navbar-collapse frame-navbar-default" id="navbarDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/todo">Todo</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/form">Form</Link>
          </li>
        </ul>
        <div className="form-inline my-2 my-lg-0 form-search">
          <input className="form-control mr-sm-2 input-search" type="text" placeholder="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0 btn-submit-search" type="submit">Search</button>
        </div>
      </div>
    </nav>
  </div>
)

export default Navbar
