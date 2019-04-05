import React, { Fragment, Component } from "react";
import IndexPage from "./page/index";
import AboutPage from "./page/about";
import CatalogPage from "./page/catalog";
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router><Fragment>
        <Route path="/" exact component={IndexPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contacts" render={({match}) => {
          console.log(match.par);
          return <h1>Contacts</h1>
        }} />
        <Route path="/catalog/:category_slug?" component={CatalogPage} />
      </Fragment></Router>
    );
  }
}

export default App;