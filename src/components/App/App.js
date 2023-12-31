import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';


import axios from 'axios';

//Components
import GiphyGallery from '../GiphyGallery/GiphyGallery';
import Search from '../Search/Search';
import Header from './Header/Header';

function App(props) {

  const dispatch = useDispatch();

const getFavorites = () => {
  axios.get('/api/favorite')
    .then((response) => {
      dispatch({type: 'SET_FAVORITES', payload: response.rows})
    }).catch((error) => {
      console.error(error);
    })
}

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <Router>
    <div className="container">
      <Header />
    

    <Route path="/">
      <Search />
      <GiphyGallery />
    </Route>
    <Route path="/favorites">
      
    </Route>
    </div>
    </Router>

  );
}

export default App;
