import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Auth from './utils/Auth';
import Nav from './children/Nav'
import Investors from './Mailinglist'
import Modal from './modal/modal.js';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Modal from 'react-modal';


require('./Search.css');


export default class Search extends Component {

    constructor(props) {
		super(props);
		this.state = {
			searchName: "",
			results: [],
            show: false
		};
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
	}

    hubspotCall = (searchParam) => {
        axios.post("/apis/contacts/search", {
            searchName: searchParam,
        }).then(data => {
            console.log("API send successful", data.data);
            if(data.data == []){
                console.log("hello");
                this.showModal();
            };
            this.setState({
                results: data.data
            });
            if(data.data.length === 0){
                this.showModal();
            };
        }).catch(err => {
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

    showModal = () => {
        this.setState({ show: true });
    };
    
    hideModal = () => {
        this.setState({ show: false });
    };

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
                                            onChange={this.handleInputChange}
                                            value={this.state.searchName}
                                            type="text"
                                            name="searchName"
                                            className="form-control"
                                            placeholder="Name.."
                                            id="search-input">
                                        </input>
                                        <button type="submit" onClick={this.handleSubmit} className="btn btn-success">
                                            Search
                                        </button>
                                    </div>
                                </form>
                            </Paper>
                        </Grid>
                        {this.state.results.map((contact) => {
                            return(
                                <Grid item xs={4}>
                                    <Paper className="paper">
                                        <Card variant="outlined" className="cards">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td class="head">
                                                            Name<br></br>
                                                            Email<br></br>
                                                            Title<br></br>
                                                            Address<br></br>
                                                            City:<br></br>
                                                            State<br></br>
                                                            Zip Code<br></br>
                                                            Number<br></br>
                                                            Open to Call?<br></br>
                                                            Open to Email?<br></br>
                                                            Is Active?<br></br>
                                                            Is Accredited?<br></br>
                                                            Is Investor?<br></br>
                                                            Avg Investment<br></br>
                                                            Contact Type<br></br>
                                                            Is Registered?
                                                        </td>
                                                        <td>
                                                            {contact.firstname} {contact.lastname}<br></br>
                                                            {contact.email}<br></br>
                                                            {contact.jobtitle}<br></br>
                                                            {contact.address}<br></br>
                                                            {contact.city}<br></br>
                                                            {contact.state}<br></br>
                                                            {contact.zip}<br></br>
                                                            {contact.phone}<br></br>
                                                            {contact.cs_do_not_call}<br></br>
                                                            {contact.cs_do_not_email}<br></br>
                                                            {contact.cs_is_active}<br></br>
                                                            {contact.cs_is_accredited}<br></br>
                                                            {contact.cs_is_investor}<br></br>
                                                            {contact.cs_average_investment_amount}<br></br>
                                                            {contact.contact_type}<br></br>
                                                            {contact.cs_is_registered}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Card>
                                    </Paper>
                                </Grid>
                            )
                        })}
                        <Modal show={this.state.show} handleClose={this.hideModal}>
                            <p>Modal kjnad</p>
                        </Modal>
                    </Grid>
                </div>
            </section>
        </div>
    );
  }
}