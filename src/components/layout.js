import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "./header";
import Footer from "./footer";

class Layout extends Component{
  render(){
    return (
      <Fragment>
        <Header />
        <Container>
          <Row>
            {
              this.props.sidebar ?
                <Col xs={4} id="sidebar">
                  {this.props.sidebar}
                </Col>
                : null
            }
            <Col xs={this.props.sidebar ? 8 : 12}>
              {this.props.children}
            </Col>
          </Row>
        </Container>
        <Footer />
      </Fragment>
    )
  }
}

export default Layout;