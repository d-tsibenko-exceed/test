import React from 'react';
import { Route } from 'react-router';
import Header from './components/Header/Header';
import Slider from './components/Carousel/Carousel';
import './App.css';
import MovieBlock from './components/MovieBlock/MovieBlock';
import Footer from './components/Footer/Footer';
import WatchMoviePage from './components/WatchMoviePage/WatchMoviePage';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Header />
        <Slider />
        <MovieBlock />
        <Footer />
      </Route>
      <Route path="/movies">
        <Header />
        <WatchMoviePage />
      </Route>
    </div>
  );
}

export default App;
