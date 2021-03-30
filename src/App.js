import Header from "./components/Header/Header";
import Slider from "./components/Carousel/Carousel";
import './App.css';
import MovieBlock from "./components/MovieBlock/MovieBlock";
import Footer from "./components/Footer/Footer";
import WatchMoviePage from "./components/WatchMoviePage/WatchMoviePage";
import {Route} from "react-router";
import React from "react";
import HeaderMobile from "./components/Header/HeaderMobile";

function App() {
  return (
    <div className="App">
        <Route exact path="/">
            <Header />
            <HeaderMobile />
            <Slider/>
            <MovieBlock />
            <Footer/>
        </Route>
        <Route path="/movies">
            <Header/>
            <WatchMoviePage />
        </Route>

    </div>
  );
}

export default App;
