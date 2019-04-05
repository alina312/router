import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import { NavLink } from "react-router-dom";

class Header extends Component {
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
  
  render(){
    return (
      <header>
         <Navbar color="success" light expand="md">
          <NavbarBrand href="/">Хачапурная №1</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink exact className="nav-link" to="/">Хачапури</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/about">Напитки</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/catalog/platya">Десерт</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    )
  }
}

export default Header;