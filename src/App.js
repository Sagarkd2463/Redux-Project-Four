import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className='App'>
      <Router>
      <Header />
      <Routes>
        <Route exact path='/' Component={ProductListing}/>
        <Route exact path='/product/:productId' Component={ProductDetail}/>
        <Route>404 Not Found!</Route>
      </Routes>
      </Router>
    </div>
  )
}

export default App;
