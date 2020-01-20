import React from "react";
import Container from "react-bootstrap/Container";
import List from "./components/List";
import About from "./components/About";
import Details from "./components/Details";
import NotFoundPage from "./components/NotFoundPage";
import "./App.css";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <Container fluid={true}>
      <Switch>
        <Route path="/" exact component={List} />
        <Route path="/details/:id" component={Details} />
        <Route path="/about" component={About} />
        <Route component={NotFoundPage} />
      </Switch>
    </Container>
  );
}

export default App;
