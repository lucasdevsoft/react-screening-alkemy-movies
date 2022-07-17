import React from "react";
import { useNavigate } from "react-router-dom";
import swAlert from '@sweetalert/with-react';

function Buscador() {
    const navigate = useNavigate();
    
    const submitHandler = e => {
        
        e.preventDefault();
        
        const keyword = e.currentTarget.keyword.value.trim();
        
        if (keyword === 0) {
            swAlert(<h5>Debes escribir una palabra clave</h5>)
        } else if (keyword.length < 4) {
            swAlert(<h5>Debes escribir más de 3 caracteres</h5>)
        } else {
            e.currentTarget.keyword.value = "";
            navigate(`/resultados/${keyword}` );
        }
    
    }

    return (
        <form className="d-flex align-item-center" onSubmit={submitHandler}>
            <label className="form-label mb-0 mx-1">
                <input className="form-control me-2" type="text" placeholder="Buscar películas..." name="keyword" />
            </label>
            <button className="btn btn-outline-warning" type="submit">Buscar</button>
        </form>
    )
    
}

export default Buscador;
