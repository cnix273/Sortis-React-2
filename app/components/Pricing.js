import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Auth from './utils/Auth';
import Nav from './children/Nav'

import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


require('./Pricing.css');

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//     },
//   }));


export default class Pricing extends Component {
    // classes = useStyles();

    constructor(props) {
		super(props);
		this.state = {
			searchName: "",
			results: []
		};
	}

    hubspotCall = (searchParam) => {
        axios.post("/apis/contacts/search", {
            searchName: searchParam,
        }).then(function (data) {
            console.log("API send successful", data);
        }).catch(function (err) {
            console.log(err);
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        
        const searchParam = this.state.searchName;
    
        this.hubspotCall(searchParam);
    }

    handleInputChange = event => {
        event.preventDefault();

        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    
    }


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
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper>
                                <form>
                                {/* // onSubmit={this.handleSubmit(this)}> */}
                                    <div className="form-group">
                                        <h3>Search for Investor</h3>
                                        <label htmlFor="search">Criteria</label>
                                        <input
                                            onChange={this.handleInputChange}
                                            value={this.state.searchName}
                                            type="text"
                                            name="searchName"
                                            className="form-control"
                                            placeholder="Any.."
                                            id="search-input">
                                        </input>
                                        <button type="submit" onClick={this.handleSubmit} className="btn btn-success">
                                            Search
                                        </button>
                                    </div>
                                </form>
                            </Paper>
                        </Grid>
                        {/* {this.state.results.map(contact)} */}
                            <Grid item xs={3}>
                                <Paper>
                                    <Card variant="outlined">
                                        <ul>
                                            <li>Name: <h3 id="name"> </h3></li>
                                            <li>Email: <span id="email"> </span></li>
                                            <li>Title: <span className="product-card-desc" id="title"></span></li>
                                            <li>Address: <span className="product-card-desc" id="address"></span></li>
                                            <li>City: <span className="product-card-desc" id="city"></span></li>
                                            <li>State: <span className="product-card-desc" id="State"></span></li>
                                            <li>Zip Code: <span className="product-card-desc" id="zip"></span></li>
                                            <li>Number: <span className="product-card-desc" id="phone"></span></li>
                                            <li>Open to Call? <span className="product-card-desc" id="nocall"></span></li>
                                            <li>Open to Email? <span className="product-card-desc" id="noemail"></span></li>
                                            <li>Is Active? <span className="product-card-desc" id="active"></span></li>
                                            <li>Is Accredited? <span className="product-card-desc" id="accurated"></span></li>
                                            <li>Is Investor? <span className="product-card-desc" id="investor"></span></li>
                                            <li>Avg Investment: <span className="product-card-desc" id="investment"></span></li>
                                            <li>Contact Type: <span className="product-card-desc" id="contact-type"></span></li>
                                            <li>Is Registered? <span className="product-card-desc" id="registered"></span></li>
                                        </ul>
                                    </Card>
                                </Paper>
                            </Grid>
                    </Grid>
                </div>
            </section>
        </div>
    );
  }
}