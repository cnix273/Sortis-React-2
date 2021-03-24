import React, { Component } from 'react';
import Nav from './children/Nav'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

require('./Pricing.css');

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


export default class Pricing extends Component {
    // classes = useStyles();
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
                                    <div className="form-group">
                                        <h3>Search for Investor</h3>
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
                                </form>
                            </Paper>
                        </Grid>
                        {/* {this.props.contacts.map(contact)} */}
                            <Grid item xs={3}>
                                <Paper>
                                    <Card variant="outlined">
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