import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";




function Resultados() {
    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');

    const [moviesResults, setMoviesResults] = useState([]);

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=82e823d00c7615bf7612c317a10e3511&language=es-ES&query=${keyword}`;
        
        axios.get(endPoint)
            .then(response => {
            const moviesArray = response.data.results;
            
            setMoviesResults(moviesArray);
        })

    }, [keyword]);
console.log(setMoviesResults)

    return (
        <>
            

            <section className="section-main m-4">
                <h3 className="mb-4">Buscaste: "<em>{keyword}</em>" </h3>
                <div className="row">
                {
                moviesResults.map((oneMovie, idx) => {
                    return (
                        <div className="col-3 gap-4 mb-3" key={idx}>
                            <div className="card">
                                <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..." />
                                <div className="card-body ">
                                    <h5 className="card-title">{ oneMovie.title }</h5>
                                    <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">Detalles</Link>
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

export default Resultados;