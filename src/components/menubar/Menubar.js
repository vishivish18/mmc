import React from 'react'

import Home from '../home/Home'
import About from '../about/About'
import Courses from '../courses/Courses'
import JStudios from '../jstudios/JStudios'
import Contact from '../contact/Contact'
import {
  Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler
} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



class MenuBar extends React.Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Router>
        <div>
        <Navbar className="navbar-default navbar-fixed-top" color="white" light expand="md">
          <NavbarBrand style={{color : 'red'}} href="/">
          <img className="menubar-logo" src="/logo.jpg"/>Maestro Music Club
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse style={{background:'white'}} isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="d-flex align-items-center">
            <Link to={'/home'} onClick={this.toggle} className="nav-link" style={{textAlign:'center'}}>Home</Link>
            </NavItem>
            <NavItem className="d-flex align-items-center">
            <Link to={'/about'} onClick={this.toggle}  className="nav-link">About</Link>
            </NavItem>
            <NavItem className="d-flex align-items-center">
            <Link to={'/courses'} onClick={this.toggle} className="nav-link">Courses</Link>
            </NavItem>
            {/* <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-thin" style={{color : 'red'}}  href="/">Resources</NavLink>
            </NavItem> */}
            {/* <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-thin" style={{color : 'red'}}  href="/">Corporates</NavLink>
            </NavItem> */}
            {/* <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-thin" style={{color : 'red'}}  href="/">J's Guitar Shop</NavLink>
            </NavItem> */}
            <NavItem className="d-flex align-items-center">
            <Link to={'/23-records'} onClick={this.toggle} className="nav-link">23 Records</Link>
            </NavItem>
            <NavItem className="d-flex align-items-center">
              <Link to={'/contact'} onClick={this.toggle} className="nav-link">Contact</Link>
            </NavItem>
            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-thin" style={{color : 'red'}}  href="/"><img style={{height : 20}} src="/facebook.png"/></NavLink>
            </NavItem>
            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-thin" style={{color : 'red'}}  href="/"><img style={{height : 20}} src="/instagram.png"/></NavLink>
            </NavItem>
            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-thin" style={{color : 'red'}}  href="/"><img style={{height : 20}} src="/twitter.png"/></NavLink>
            </NavItem>
            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-thin" style={{color : 'red'}}  href="/"><img style={{height : 20}} src="/youtube.png"/></NavLink>
            </NavItem>
          </Nav>
          </Collapse>
        </Navbar>
        <div style={{marginTop:60}}>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/home' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/courses' component={Courses} />
              <Route path='/contact' component={Contact} />
              <Route path='/23-records' component={JStudios} />
          </Switch>
        </div>
        </div>
      </Router>
    )
  }
}

export default MenuBar;