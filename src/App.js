/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Header from './components/header.js';
// import Products from './components/products.js';
import Categories from './components/categories.js';
// import Footer from './components/foote.js';

export default props => {
  return (
    <>
     <Header />
     <Categories />
      {/* <Header />
      <Products />
      <Footer /> */}
    </>

  )
};