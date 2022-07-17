// Libraries
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react";


// Components
import Login from './components/Login';
import Listado from './components/Listado';
import Detalle from "./components/Detalle";
import Favoritos from "./components/Favoritos";
import Resultados from "./components/Resultados";
import Header from './components/Header';
import Footer from './components/Footer';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/app.css";

function App() {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const localMovies = localStorage.getItem('favs');
    
    if (localMovies !== null) {
      const favsArray = JSON.parse(localMovies);
      setFavorites(favsArray);
    }
    
  }, []);


  const addOrRemoveFavorite = (e) => {
    const favMovies = localStorage.getItem('favs');

    let tempMoviesInFavs;

    if (favMovies === null) {
      tempMoviesInFavs = [];
    } else {
      tempMoviesInFavs = JSON.parse(favMovies);
    }


    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector('img').src;
    const title = parent.querySelector('h5').innerText;
    const id = btn.dataset['id'];

    const movieData = {
      imgURL,
      title,
      id
    };


    let moviesIsInArray = tempMoviesInFavs.find(oneMovie => {
      return oneMovie.id === movieData.id
    });

    if (!moviesIsInArray) {
      tempMoviesInFavs.push(movieData);
      localStorage.setItem("favs", JSON.stringify(tempMoviesInFavs));
      setFavorites(tempMoviesInFavs);
      console.log('Se agrego a favs')
    } else {
      let moviesLeft = tempMoviesInFavs.filter(oneMovie => {
        return oneMovie.id !== movieData.id
      });
      localStorage.setItem('favs', JSON.stringify(moviesLeft));
      setFavorites(moviesLeft);
      console.log('Se saco de favs')
    }


  }



  return (
    <>
      <Header favorites={favorites} />
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/listado" element={<Listado addOrRemoveFavorite={addOrRemoveFavorite} />} />
          <Route path="/detalle/:id" element={<Detalle />} />
          <Route path="/resultados/:keyword" element={<Resultados addOrRemoveFavorite={addOrRemoveFavorite} />} />
          <Route path="/favoritos" element={
                <Favoritos
                favorites={favorites}
                addOrRemoveFavorite={addOrRemoveFavorite}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

