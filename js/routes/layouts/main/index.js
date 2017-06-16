import React, { Component, PropTypes } from "react";
import Navbar from "./Navbar";

export default class MainLayout extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div className="main-layout">
        <Navbar />
        <div className="container-main-layout">
          {this.props.children}
        </div>
        <div className="container">
          <hr />
          <footer>
            <p>© 2017</p>
          </footer>
        </div>
      </div>
    );
  }
}
