/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Categories from './components/categories';
import Products from './components/products.js';
import Cart from './components/cart.js';
import './app.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductsDetails from './components/productDetails';
import Checkout from './components/checkoutPage';
class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
        <Header />
        {/*<SampleCart />*/}
        <Switch>
            <Route exact path="/">
                <Categories />
                <Products />
            </Route>
            <Route exact path="/product">
                <ProductsDetails />
            </Route>
            <Route exact path="/cart" component={Checkout} />

        </Switch>
        <Footer />
    </BrowserRouter >
    );
  }
}

export default App;
