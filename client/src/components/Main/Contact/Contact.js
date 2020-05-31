import React, { Component } from "react";
import axios from 'axios';
import classes from "./Contact.module.css";

class Contact extends Component {
  
    state = {
      name:'',
      phone:'',
      email:'',
      location:'',
      date:'',
      other:''
    }
    handleSubmit = async event =>{
      event.preventDefault();
      await axios.post('/api/feed/book',{
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
        location: this.state.location,
        date: this.state.date,
        other: this.state.other
      });
      this.setState(
        {
          name:'',
          phone:'',
          email:'',
          location:'',
          date:'',
          other:''
        }
      );
    }
    render() {
    return (
      <div className="Contact">
        <h1>Contact us</h1>
        <h2>For planning your birthday</h2>
        <h2>at: 880XXXX281</h2>
        <div>
          Or write us at: <h1>ravish.k17@iiits.in</h1>
        </div>
        <div className={classes.form}>
        <form onSubmit={this.handleSubmit}>
          <label>name</label>
          <input
            value={this.state.name}
            onChange={event => this.setState({ name: event.target.value })}
          />
          <label>phone</label>
          <input
            value={this.state.phone}
            onChange={event => this.setState({ phone: event.target.value })}
          />
          <label>email</label>
          <input
            value={this.state.email}
            onChange={event => this.setState({ email: event.target.value })}
          />
          <label>location</label>
          <input
            value={this.state.location}
            onChange={event => this.setState({ location: event.target.value })}
          />
          <label>other</label>
          <input
            value={this.state.other}
            onChange={event => this.setState({ other: event.target.value })}
          />
          <button>Submit</button>
        </form>
        </div>
      </div>
    );
  }
}

export default Contact;
