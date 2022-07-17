import React from "react";
import { Navigate, Link } from 'react-router-dom';

function Favoritos ({ addOrRemoveFavorite, favorites }) {
    
    const token = sessionStorage.getItem("token");
    
    
    return (
        <>
            
            {!token && <Navigate to="/" replace />}

                {favorites.length === 0 ? <h2>Agrega tus películas favoritas!</h2> : <h2>Tus películas favoritas</h2>}
            <div className="container mt-3">
                <div className="row">
                {
                favorites.map((oneMovie, idx) => {
                    return (
                        <div className="col-3 gap-4 mb-3" key={idx}>
                            <div className="card">
                                <img src={oneMovie.imgURL} className="card-img-top" alt="..." />
                                <button className="favorite-btn" onClick={addOrRemoveFavorite}
                                data-movie-id={oneMovie.id}    
                                    aria-label="btn"><span role="img" aria-label="btn">💔</span></button>
                                <div className="card-body ">
                                    <h5 className="card-title">{oneMovie.title}</h5>
                                    <Link to={`/detalle/${oneMovie.id}`} className="btn btn-primary">Detalles</Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
                </div>
            </div>
        </>
    )
}

export default Favoritos;