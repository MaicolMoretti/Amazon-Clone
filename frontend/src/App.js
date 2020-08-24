import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import CartAppBar from "./components/CartAppBar";
import CardPageRow from './views/CardPageRow';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CategorySummary from "./views/CategorySummary";
import ProductPage from "./views/ProductPage";

function App() {
  return (
    <Router>
      <Container>
        {/**Header che contiene (titolo, search, login, carrello ...) */}
        <CartAppBar />

        <Switch>

          <Route path="/category/">
            <CategorySummary/>
          </Route>

          <Route path="/products/id">
            <ProductPage/>
          </Route>

          <Route path="/">
            <CardPageRow/> {/**Quadrati in cui ci sono i prodotti (sotto alle categorie) */}
          </Route>

        </Switch>

       Carrello della spesa
      </Container>
    </Router>
  );
}

export default App;
