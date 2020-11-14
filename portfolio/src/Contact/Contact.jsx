import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './Contact.css';


class Contact extends Component {
  render() {
    return(
      <div>
        <Navbar />
        <Jumbotron title="Contact"/>
          <div className="container">
          <div className="row">
            <div className="col-4">
            <a href="mailto:dianamainachui@gmail.com" target="_blank">
            </a>
            </div>
            <div className="col-4">            
            </div>
            <div className="col-4">
            </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Contact