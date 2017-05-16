import React from 'react'

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
      <a className="navbar-brand" href="#">Navbar</a>
      <div className="collapse navbar-collapse frame-navbar-default" id="navbarDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
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
