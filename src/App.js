import React from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Categories from './components/categories';
import Products from './components/products.js';
import Cart from './components/cart.js';
import './app.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/">
                <Categories />
                <Products />
            </Route>

            <Route exact path="/cart">
                <Cart />
            </Route>

        </Switch>
        <Footer />
    </BrowserRouter >
    );
  }
}

export default App;
