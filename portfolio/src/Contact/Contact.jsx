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
            <a href="mailto:ardiandurmishi@gmail.com" target="_blank">
            <img className="logos" src={require('../images/gmail.png')}/>
            </a>
            </div>
            <div className="col-4">
              <a target="_blank" href="https://www.linkedin.com/in/ardiandurmishi/">
                <img className="logos" src={require('../images/linkedin.png')}/>
              </a>
            </div>
            <div className="col-4">
            <a target="_blank" href="https://github.com/ardiaaan/">
              <img className="logos" src={require('../images/github.png')}/>
            </a>
            </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Contact