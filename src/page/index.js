import React, { Component } from "react";
import { Layout } from "../components";
import { Container } from "reactstrap";
 

class IndexPage extends Component{
  render(){
    return (
      <Layout
      >
        <Container>
          <h1><p class="text-danger">
            Хачапури</p>
          </h1>
        </Container>
      </Layout>
    )
  }
}

export default IndexPage;