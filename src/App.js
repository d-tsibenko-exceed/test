import Header from "./components/Header/Header";
import Slider from "./components/Carousel/Carousel";
import './App.css';
import MovieBlock from "./components/MovieBlock/MovieBlock";
import Footer from "./components/Footer/Footer";
import WatchMoviePage from "./components/WatchMoviePage/WatchMoviePage";
import {Route} from "react-router";

function App() {
  return (
    <div className="App">
        <Route exact path="/">
            <Header />
            <Slider/>
            <MovieBlock />
            <Footer/>
        </Route>
        <Route exact path="/movies">
            <Header/>
            <WatchMoviePage />
        </Route>

    </div>
  );
}

export default App;
