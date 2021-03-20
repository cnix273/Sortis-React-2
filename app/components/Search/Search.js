import Nav from './children/Nav';
import React, { Component } from 'react';
require('./trips.css');
import Nav from '../children/Nav';
import Login from '../Login';
import NewTrip from '../children/NewTrips/NewTrip';

export default class Trip extends Component {
	
render() {
	return (
		<div className="search-container container">
			<div className="row">
                <div class="translucent-form-overlay">
                    <form>
                        <h3>Search for Investor</h3>
                        <div class="row columns">
                            <label>Criteria</label>
                            <input type="text" name="searchText" id="search-input" placeholder="Any.."></input>
                        </div>
                        <div class="row columns">
                            <button type="submit" id="submitSearch" class="primary button expanded search-button responsive-width" href="/search/new/">SEARCH</button>
                            <button type="button" class="primary button expanded search-button responsive-width">RESET</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};
//             <br>
//             <div>
//                 {{#if investor }}
// 				    {{#each investor}}
//                         <div class="product-card">
//                             <ul>
//                                 <li>Name: <h3 id="name">{{this.firstname}} {{this.lastname}}</h3></li>
//                                 {{#if email}}<li>Email: <span id="email">{{this.email}}</span></li>{{/if}}
//                                 {{#if jobtitle}}<li>Title: <span class="product-card-desc" id="title">{{this.jobtitle}}</span></li>{{/if}}
//                                 {{#if address}}<li>Address: <span class="product-card-desc" id="address">{{this.address}}</span></li>{{/if}}
//                                 {{#if city}}<li>City: <span class="product-card-desc" id="city">{{this.city}}</span></li>{{/if}}
//                                 {{#if state}}<li>State: <span class="product-card-desc" id="state">{{this.state}}</span></li>{{/if}}
//                                 {{#if zip}}<li>Zip Code: <span class="product-card-desc" id="zip">{{this.zip}}</span></li>{{/if}}
//                                 {{#if phone}}<li>Number: <span class="product-card-desc" id="phone">{{this.phone}}</span></li>{{/if}}
//                                 {{#if cs_do_not_call}}<li>Open to Call? <span class="product-card-desc" id="nocall">{{this.cs_do_not_call}}</span></li>{{/if}}
//                                 {{#if cs_do_not_email}}<li>Open to Email? <span class="product-card-desc" id="noemail">{{this.cs_do_not_email}}</span></li>{{/if}}
//                                 {{#if cs_is_active}}<li>Is Active? <span class="product-card-desc" id="active">{{this.cs_is_active}}</span></li>{{/if}}
//                                 {{#if cs_is_accredited}}<li>Is Accredited? <span class="product-card-desc" id="accurated">{{this.cs_is_accredited}}</span></li>{{/if}}
//                                 {{#if cs_is_investor}}<li>Is Investor? <span class="product-card-desc" id="investor">{{this.cs_is_investor}}</span></li>{{/if}}
//                                 {{#if cs_average_investment_amount}}<li>Avg Investment: <span class="product-card-desc" id="investment">{{this.cs_average_investment_amount}}</span></li>{{/if}}
//                                 {{#if contact_type}}<li>Contact Type: <span class="product-card-desc" id="contact-type">{{this.contact_type}}</span></li>{{/if}}
//                                 {{#if cs_is_registered}}<li>Is Registered? <span class="product-card-desc" id="registered">{{this.cs_is_registered}}</span></li>{{/if}}

//                             </ul>
//                         <div className="trip-container col-xs-12 col-sm-6 col-lg-6">
//                             <div className="trip-subcontainer trip-default">
//                                 <h3 className="lead">
//                                     Trip: {{ this.name }} Test trip name
//                                 </h3>
//                                 <div className="bottom-trip-container">
//                                     <div className="risk-analysis-container">
//                                             {{!-- {{ riskAnalysis }} --}}
//                                         <p className="risk-analysis">
//                                             Some Kind of Risk Analysis
//                                         </p>
//                                     </div>
//                                     <div className="destination-container">
//                                             {{!-- {{ riskAnalysis }} --}}
//                                         <p className="destination">
//                                             {{ this.destination }}
                                            
//                                         </p>
//                                     </div>
//                                     <button type="button" className="btn btn-circle"><i className="">10</i></button>
//                                 </div>
// 					</div>
// 				</div>
// 				{{/each}}
// 				{{/if}}
// 			<button id="add-trip-button" data-toggle="modal" data-target="#squarespaceModal" type="button" class="btn btn-circle"><i class="glyphicon glyphicon-plus"></i></button>
// 			</div>
// 		</div>
// 	)
// }
// 
};