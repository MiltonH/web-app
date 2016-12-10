import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default React.createClass({
  render: function(){
    return    <div className="Header">
      <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">ArcheryComp</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Register</NavItem>
        <NavItem eventKey={2} href="#">Login</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    </div>
  }
});
