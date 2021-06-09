import React, { Component } from 'react';
import axios from 'axios';
import Nav from './children/Nav'
import Modal from './modal/modal.js';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


require('./Mailinglist.css');


export default class MailingList extends Component {

    constructor(props) {
		super(props);
		this.state = {
			EmailAddress: "",
            FirstName: "",
            LastName: "",
			results: [],
            show: false,
            modalMessage: ""
		};
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
	}

    addtoMailchimp = (maillistInfo, authenticated) => {
        axios.post("/apis/mailinglist/newinvestor", {
            maillistInfo,
            isAuth: authenticated
        }).then(data => {
            console.log("API send successful", data.data);
            this.setState({
                modalMessage: `Congrats ${this.state.FirstName} ${this.state.LastName}! Your contact information has been added!`
            });
            this.showModal();
        }).catch(err => {
            console.log(err);
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        
        const maillistInfo = {
            EmailAddress: this.state.EmailAddress,
            FirstName: this.state.FirstName,
            LastName: this.state.LastName
        }

        const authenticated = this.props.authenticated;

        if(!authenticated) {
            this.setState({
                modalMessage: "Sorry, you must be logged in to add people to the mailing list!"
            });
            this.showModal();
        }
    
        this.addtoMailchimp(maillistInfo, authenticated);
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
            <section id="maillist-content">
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className="mailcontainer">
                                <form>
                                    <div className="form-group mailinghead">
                                        <h3>Sign Up for Mailing List</h3>
                                        <input
                                            onChange={this.handleInputChange}
                                            value={this.state.EmailAddress}
                                            type="e-mail"
                                            name="EmailAddress"
                                            className="form-control"
                                            placeholder="E-Mail"
                                            id="email">
                                        </input>
                                        <br></br>
                                        <input
                                            onChange={this.handleInputChange}
                                            value={this.state.FirstName}
                                            type="text"
                                            name="FirstName"
                                            className="form-control"
                                            placeholder="First Name"
                                            id="firstname">
                                        </input>
                                        <br></br>
                                        <input
                                            onChange={this.handleInputChange}
                                            value={this.state.LastName}
                                            type="text"
                                            name="LastName"
                                            className="form-control"
                                            placeholder="LastName"
                                            id="lastname">
                                        </input>
                                        <br></br>
                                        <button 
                                        //  disabled={!(formObject.email && formObject.firstname && formObject.lastname)}
                                        type="submit" 
                                        onClick={this.handleSubmit} 
                                        className="btn btn-success">
                                            Sign-up for Mailchip mailing Lit
                                        </button>
                                        
                                    </div>
                                </form>
                            </Paper>
                        </Grid>
                        <Modal show={this.state.show} handleClose={this.hideModal}>
                            <p id="modal-text">{this.state.modalMessage}</p>
                        </Modal>
                    </Grid>
                </div>
            </section>
        </div>
    );
  }
}