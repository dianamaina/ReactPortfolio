import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import container from 'react-bootstrap/container';
import Navbar from 'react-bootstrap/Navbar';
import Navbar from 'react-bootstrap/Navbar';

import Footer from './components/footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


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
            </Nav>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />      
          <Route path="/" exact render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.ome.text} />} />         
          <Route path="/" exact render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} text={this.state.contact.text} />} />





          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;