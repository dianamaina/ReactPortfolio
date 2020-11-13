  
import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '..components/Jumbotron/Jumbotron.jsx';
import './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="About" />
          <div className="container">
            <div className="row skills">
              <div className="row one">
                <div className="col-xs-3">
                <h3>Html</h3>

                </div>
                <div className="col-xs-3">
                <h3>Css</h3>

                </div>
                <div className="col-xs-3">
                <h3>Javascript</h3>

                </div>
              </div>

              <div className="row two">
                <div className="col-xs-3">
                  <h3>React</h3>

                </div>
                <div className="col-xs-3">
                <h3>Bootstrap</h3>

                </div>
                <div className="col-xs-3">
                <h3>Java</h3>

                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default About