
import React, { useEffect, useState } from 'react';
import { Navigate, Link} from 'react-router-dom';
import axios from 'axios';
import swAlert from '@sweetalert/with-react';

// React-Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function Listado({ addOrRemoveFavorite }) {

    let token = sessionStorage.getItem("token");
    

    const [ moviesList, setMoviesList ] = useState([]);
    

    useEffect(() => {
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=82e823d00c7615bf7612c317a10e3511&language=es-Es&page=1';
        axios.get(endPoint)
            .then(response => {
                const apiData = response.data;
                setMoviesList(apiData.results);
            })
            .catch(error => {
                swAlert(<h2>No se pudo cargar la API</h2>);
            })
    }, []);
    
    return (
        <>
            {!token && <Navigate to="/" replace />}
            <section className="m-4 ">
                <div className="row">
                {/* Estructura base */}
                {
                moviesList.map((oneMovie, i) => {
                    return (
                        <div className="col-3 mb-3" key={i}>
                            <div className="card">
                                <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="moviepost" />
                                    <button className="favorite-btn" onClick={addOrRemoveFavorite}
                                    data-movie-id={oneMovie.id}    
                                    aria-label="btn"><span role="img" aria-label="btn">🖤</span></button>
                                <div className="card-body ">
                                    <h5 className="card-title">{ oneMovie.title }</h5>
                                    <p className="card-text">{ oneMovie.overview.substring(0, 100) }...</p>
                                    <Link to={`/detalle/${oneMovie.id}`} className="btn btn-primary">Detalles</Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
                </div>
            </section>
        </>
    )
    
}

export default Listado;