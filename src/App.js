import './App.css';
import React from 'react';
import Header from './components/Header/header';
import QuemSomos from './components/QuemSomos/quemSomos.js';
import Products from './components/Products/products.js';
import Location from './components/Location/location.jsx';
import Comments from './components/Comments/comments.jsx';

function App() {
  return (
    <>
      <div style={{position: 'sticky', top: '-1px', zIndex: 10}}>
        <Header />
      </div>
      <QuemSomos />
      <Products />
      <Location />
      <Comments />
    </>
  );
}

export default App;