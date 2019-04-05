import React, { Component } from "react";
import { Container, Row, Col, Nav, NavItem } from "reactstrap";

class Footer extends Component{
  render(){
    return (
      <Container className="mt-3">
        <Row>
          <Col>
            <Nav vertical>
              <NavItem><p class="text-success">Продукт</p></NavItem>
              <NavItem>Хачапури с сыром и творогом</NavItem>
              <NavItem>Хачапури по-грузински</NavItem>
              <NavItem>Хачапури по-мангальски</NavItem>
            </Nav>
          </Col>
          <Col>
            <Nav vertical>
            <NavItem><p class="text-success">Масса</p></NavItem>
              <NavItem>200 г</NavItem>
              <NavItem>500 г</NavItem>
              <NavItem>500 г</NavItem>
            </Nav>
          </Col>
          <Col>
            <Nav vertical>
            <NavItem><p class="text-success">Цена</p></NavItem>
              <NavItem>130 с</NavItem>
              <NavItem>150 с</NavItem>
              <NavItem>150 с</NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Footer;