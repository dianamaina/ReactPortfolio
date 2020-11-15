import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import container from 'react-bootstrap/container';
import Navbar from 'react-bootstrap/Navbar';
import Navbar from 'react-bootstrap/Navbar';

import Footer from './components/footer';
import HomePage from './pages/HomePage';


import './App.css';

class App extends React.component {

  constructor(prop) {
    super (props);
    this.state = {
      title: 'Diana Maina',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: 'about'},
        { titlae: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Be brave',
        subTitle: 'Fun projects',
        text: 'Check out my projects below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }
}


  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expands="lg">
            <Navbar.Brand>Diana Maina</Navbar.Brand>

            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle" />

            <Nav className="ml-auto">
              <link className="nav-link" to="/">Home</link>
              <link className="nav-link" to="/">About</link>
              <link className="nav-link" to="/">Contact</link>

              <Route path="/" exact render={() => <HomePage title={this.state.home.title} />} />

            </Nav>
            
          </Navbar>

          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;