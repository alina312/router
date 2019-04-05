import React, { Component } from "react";
import { Layout } from "../components";
import { Container, Row, Col, Nav, NavItem } from "reactstrap";

class AboutPage extends Component{
  render(){
    return (
      <Layout>
        <Container>
          <h1><p class="text-danger">
            Напитки</p>
          </h1>
          <Row>
          <Col>
            <Nav vertical>
              <NavItem><p class="text-success">Продукт</p></NavItem>
              <NavItem>Лимонад виноградный</NavItem>
              <NavItem>Лимонад вишня</NavItem>
              <NavItem>Чай черный</NavItem>
              <NavItem>Чай зеленый</NavItem>
            </Nav>
          </Col>
          <Col>
            <Nav vertical>
            <NavItem><p class="text-success">Объем</p></NavItem>
              <NavItem>0,5 л</NavItem>
              <NavItem>0,5 л</NavItem>
              <NavItem>Чайник</NavItem>
              <NavItem>Чайник</NavItem>
            </Nav>
          </Col>
          <Col>
            <Nav vertical>
            <NavItem><p class="text-success">Цена</p></NavItem>
              <NavItem>70 с</NavItem>
              <NavItem>70 с</NavItem>
              <NavItem>50 с</NavItem>
              <NavItem>50 с</NavItem>
            </Nav>
          </Col>
        </Row>
        </Container>
      </Layout>
    )
  }
}

export default AboutPage;