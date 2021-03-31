// Include React
import React, { Component } from 'react';
import Nav from './children/Nav'

require('./main.css');

// Here we include all of the sub-components
// var Form = require("./children/Form");
// var Results = require("./children/Results");
// var History = require("./children/History");

// // Helper for making AJAX requests to our API
// var helpers = require("./utils/helpers");

// Creating the Main component
export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav
          authenticated={this.props.authenticated}
          authenticate={this.props.authenticate}
          deAuthenticate={this.props.deAuthenticate}
          logout={this.props.logout}
        />   
        <header className="intro">
            <div className="intro-body">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <h1 className="brand-heading">Sortis.</h1>
                            <h3 className="intro-text">Consumer Relationship Management</h3>
                            {/*<a href="#about" className="btn btn-circle page-scroll">
                                <i className="fa down-arrow animated">
                                   <img className="down-arrow" src={require("../img/shapes/HomeDown.png")} alt="Down Arrow" />
                                </i>
    </a>*/}
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section id="about" className="container content-section text-center">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                    <h2>LOG IN TO BEGIN</h2>
                    {/*<button className="btn" >Get Started</button>*/}
                </div>
            </div>
        </section>

        {/*<section id="user-comments" className="content-section text-center">
            <div className="user-feedback-section">
                <div className="container">
                    <div className="col-lg-8 col-lg-offset-2">
                        <h2>TravelSafe User Comments</h2>
                        <p>Without your journeys, we would be lost</p>
                        <p>Thank you for letting us help you be safe in your travels.</p>
                        <div className="container content">
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3">
                                    <div className="testimonials">
                                        <div className="active item">
                                          <blockquote><p>Denim you probably haven't heard of. Lorem ipsum dolor met consectetur adipisicing sit amet, consectetur adipisicing elit, of them jean shorts sed magna aliqua. Lorem ipsum dolor met.</p></blockquote>
                                          <div className="carousel-info">
                                            <img alt="" src="http://keenthemes.com/assets/bootsnipp/img1-small.jpg" className="pull-left" />
                                            <div className="pull-left">
                                              <span className="testimonials-name">Lina Mars</span>
                                              <span className="testimonials-post">Commercial Director</span>
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

        <footer>
            <div className="container text-center">
                <p>Copyright &copy; Your Website 2016</p>
            </div>
        </footer>
      </div>
    );
  }
}
