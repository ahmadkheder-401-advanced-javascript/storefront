import React from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Categories from './components/categories';
import Products from './components/products.js';
import './app.scss';
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Categories />
        <Products />
        <Footer />
      </React.Fragment>   
    );
  }
}

export default App;
