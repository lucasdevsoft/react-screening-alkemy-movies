import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import swAlert from '@sweetalert/with-react';


function Detalle() {
    let token = sessionStorage.getItem("token");

    let { id } = useParams();

    const [movie, setMovie] = useState(null);
    
    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/movie/${id}?api_key=82e823d00c7615bf7612c317a10e3511&language=es-Es`;
        axios.get(endPoint).then(response => {
                const movieData = response.data;
                setMovie(movieData);
            })
            .catch(error => {
                swAlert(<h2>No se pudo cargar la API</h2>);
            })
    }, [id]);

    return (
        <>
            { !token && <Navigate to="/" replace /> }
            {!movie && <div class="spinner-border text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
            </div> }
            { movie && (
                <>  
                <section className="container py-5">   
                    <div className="row">
                        <div className="col-4">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid" alt="movie poster" />
                        </div>
                        <div className="col-8">
                        <h2>{ movie.title }</h2>
                        <h6>Fecha de estreno: { movie.release_date }</h6>
                        <h5>Sinopsis</h5>
                        <p>{ movie.overview}</p>
                        <h6>Valoración: { movie.vote_average }</h6>
                        <h6>Géneros:</h6>
                        <ul>
                            { movie.genres.map(oneGenre => <li key={oneGenre.id}>{oneGenre.name}</li>)}
                        </ul>
                        </div>
                    </div>
                    </section> 
                </>    
            )}
        </>
    )
}

export default Detalle;
