import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Nav, NavItem } from "reactstrap";
//
import { Layout } from "../components";

class CatalogPage extends Component{
  render(){
    return (
      <Layout>
        <Container>
          <h1>
          <p class="text-success">Десерт</p>
          </h1>
          <Row>
          <Col>
            <Nav vertical>
              <NavItem><p class="text-success">Продукт</p></NavItem>
              <NavItem>Шоколадное пирожное</NavItem>
              <NavItem>Птичье молоко</NavItem>
              <NavItem>Лимонный пирог</NavItem>
              <NavItem>Творожное пирожное</NavItem>
            </Nav>
          </Col>
          <Col>
            <Nav vertical>
            <NavItem><p class="text-success">Масса </p></NavItem>
              <NavItem>200 г</NavItem>
              <NavItem>300 г</NavItem>
              <NavItem>200 г</NavItem>
              <NavItem>250 г</NavItem>
            </Nav>
          </Col>
          <Col>
            <Nav vertical>
            <NavItem><p class="text-success">Цена</p></NavItem>
              <NavItem>70 с</NavItem>
              <NavItem>90 с</NavItem>
              <NavItem>60 с</NavItem>
              <NavItem>50 с</NavItem>
            </Nav>
          </Col>
        </Row>
        </Container>
      </Layout>
    )
  }
}

CatalogPage.propTypes = {
  match: PropTypes.object
}

export default CatalogPage;