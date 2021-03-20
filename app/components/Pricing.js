import React, { Component } from 'react';
import Nav from './children/Nav'

require('./Pricing.css');

export default class Pricing extends Component {
  render() {
    return (
        <div>
            <Nav
            authenticated={this.props.authenticated}
            authenticate={this.props.authenticate}
            deAuthenticate={this.props.deAuthenticate}
            logout={this.props.logout}
            />  
            <section id="plans">
                <div className="search-container container">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <form>
                                <div className="form-group">
                                    <h3>Search for Investor</h3>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="search">Criteria</label>
                                            <input
                                                onChange={this.props.handleInputChange}
                                                value={this.props.search}
                                                type="text"
                                                name="searchText"
                                                className="form-control"
                                                placeholder="Any.."
                                                id="search-input"></input>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div className="col">
                                            <button
                                                onClick={this.props.handleFormSubmit}
                                                type="submit"
                                                className="primary button expanded search-button responsive-width"
                                                id="submitSearch"
                                                href="/search/new/"
                                                >SEARCH
                                            </button>
                                            <button type="button" class="primary button expanded search-button responsive-width">RESET</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div class="product-card">
                            <ul>
                                <li>Name: <h3 id="name"> </h3></li>
                                <li>Email: <span id="email"> </span></li>
                                <li>Title: <span class="product-card-desc" id="title"></span></li>
                                <li>Address: <span class="product-card-desc" id="address"></span></li>
                                <li>City: <span class="product-card-desc" id="city"></span></li>
                                <li>State: <span class="product-card-desc" id="state"></span></li>
                                <li>Zip Code: <span class="product-card-desc" id="zip"></span></li>
                                <li>Number: <span class="product-card-desc" id="phone"></span></li>
                                <li>Open to Call? <span class="product-card-desc" id="nocall"></span></li>
                                <li>Open to Email? <span class="product-card-desc" id="noemail"></span></li>
                                <li>Is Active? <span class="product-card-desc" id="active"></span></li>
                                <li>Is Accredited? <span class="product-card-desc" id="accurated"></span></li>
                                <li>Is Investor? <span class="product-card-desc" id="investor"></span></li>
                                <li>Avg Investment: <span class="product-card-desc" id="investment"></span></li>
                                <li>Contact Type: <span class="product-card-desc" id="contact-type"></span></li>
                                <li>Is Registered? <span class="product-card-desc" id="registered"></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>



/* 
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <div className="panel panel-danger panel-pricing">
                                <div className="panel-heading">
                                    <i className="fa fa-desktop"></i>
                                    <h3>Plan 1</h3>
                                </div>
                                <div className="panel-body text-center">
                                    <p><strong>$100 / Month</strong></p>
                                </div>
                                <ul className="list-group text-center">
                                    <li className="list-group-item"><i className="fa fa-check"></i> Personal use</li>
                                    <li className="list-group-item"><i className="fa fa-check"></i> Unlimited projects</li>
                                    <li className="list-group-item"><i className="fa fa-check"></i> 27/7 support</li>
                                </ul>
                                <div className="panel-footer">
                                    <a className="btn btn-lg btn-block btn-danger" href="#">BUY NOW!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="panel panel-warning panel-pricing">
                                <div className="panel-heading">
                                    <i className="fa fa-desktop"></i>
                                    <h3>Plan 2</h3>
                                </div>
                                <div className="panel-body text-center">
                                    <p><strong>$200 / Month</strong></p>
                                </div>
                                <ul className="list-group text-center">
                                    <li className="list-group-item"><i className="fa fa-check"></i> Personal use</li>
                                    <li className="list-group-item"><i className="fa fa-check"></i> Unlimited projects</li>
                                    <li className="list-group-item"><i className="fa fa-check"></i> 27/7 support</li>
                                </ul>
                                <div className="panel-footer">
                                    <a className="btn btn-lg btn-block btn-warning" href="#">BUY NOW!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="panel panel-success panel-pricing">
                                <div className="panel-heading">
                                    <i className="fa fa-desktop"></i>
                                    <h3>Plan 3</h3>
                                </div>
                                <div className="panel-body text-center">
                                    <p><strong>$300 / Month</strong></p>
                                </div>
                                <ul className="list-group text-center">
                                    <li className="list-group-item"><i className="fa fa-check"></i> Personal use</li>
                                    <li className="list-group-item"><i className="fa fa-check"></i> Unlimited projects</li>
                                    <li className="list-group-item"><i className="fa fa-check"></i> 27/7 support</li>
                                </ul>
                                <div className="panel-footer">
                                    <a className="btn btn-lg btn-block btn-success" href="#">BUY NOW!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div> */
    );
  }
}