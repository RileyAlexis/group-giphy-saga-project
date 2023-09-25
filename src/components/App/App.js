import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


import axios from 'axios';

//Components

function App(props) {

const getFavorites = () => {
  axios.get('/api/favorite')
    .then((response) => {
      dispatch
    })
}

  useEffect(() => {
    console.log(cookies);
    getFavorites();
  }, []);

  return (
    <div className="container">
      <Header />
    
    <Route path="/">
      <Search />
    </Route>
    <Route path="/favorites">
      <Favorite />
    </Route>
    </div>

  );
}

export default App;
