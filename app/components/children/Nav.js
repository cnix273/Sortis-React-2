import React, { Component } from 'react';
import { Link } from 'react-router-dom';

require('./nav.css');

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div className="container nav-container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
              <i className="fa fa-bars"></i>
            </button>
            <button type="button" className="navbar-toggle navbar-toggle-right" data-toggle="collapse" data-target=".navbar-main-collapse1">
              <i className="glyphicon glyphicon-plus"></i>
            </button>
            <Link to={"/"} ><img className="icon-middle-nav-mobile" src={require("../../img/shapes/shape.png")} /></Link>
          </div>

          {/* <div className="collapse navbar-collapse navbar-left navbar-main-collapse"> */}
          <div className="collapse navbar-collapse navbar-right navbar-main-collapse1">
            <ul className="nav navbar-nav">
              <li className="hidden">
                <a href="#page-top"></a>
              </li>

              <li>
                <Link to={"/search"} ><div className="page-scroll nav-left-text"><p>SEARCH</p></div></Link>
              </li>
              <li>
                <Link to={"/mailinglist"} ><div className="page-scroll nav-left-text"><p>MAILING-LIST</p></div></Link>
              </li>
              {this.props.authenticated ? (
                <li>
                  <a href="#" onClick={this.props.logout} ><div className="page-scroll nav-left-text" data-toggle="modal"><p>LOGOUT</p></div></a>
                </li>
              ) : (
                <li>
                  <Link to={"/login"} ><div className="page-scroll nav-left-text" data-toggle="modal"><p>LOGIN</p></div></Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}