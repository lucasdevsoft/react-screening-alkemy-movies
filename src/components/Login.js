// Libraires
import React from "react";
import axios from 'axios';
import swAlert from '@sweetalert/with-react';
import { useNavigate, Navigate } from 'react-router-dom';

// React-Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


function Login() {
    
    const navigate = useNavigate();

    
    const submitHandler = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (email === '' || password === '') {
            swAlert(
                <h2>Los campos no pueden estar vacios</h2>
            );
            return;
        }

        if (email !== '' && !regexEmail.test(email)) {
            swAlert(
                <h2>Debes escribir una dirección de correo electronico válida</h2>
            );
            return;
        }

        if (email !== "challenge@alkemy.org" || password !== "react") {
            swAlert(
                <h2>Credenciales invalidas</h2>
            );
            return;
        }


        axios
            .post('https://challenge-react.alkemy.org', { email, password })
            .then(res => {
                swAlert(
                    <h2>Perfecto, ingresaste correctamente</h2>
                );
                const tokenRecibido = res.data.token;
                sessionStorage.setItem('token', tokenRecibido);
                navigate('/listado');
            })
    }

    let token = sessionStorage.getItem("token");

    return (
        <>
            { token && <Navigate to="/listado" replace /> }
            <div className="container m-6 w-100 ">
                <div className="card-body m-4">
                <div className="row  login-card p-2 d-flex align-item-center">
                <div className="card">
                    <h2>Formulario de login</h2>
                    <form onSubmit={submitHandler}>
                        <label className="form-label d-block mt-2">Correo electrónico:</label>
                        <input className="form-control" type="text" name="email"></input>
                        <label className="form-label d-block mt-2">Contraseña:</label>
                        <input className="form-control" type="password" name="password"></input>
                        <button className="btn btn-success mt-2" type="submit">Ingresar</button>
                    </form>
                </div>
                </div>
                </div>
            </div>    
        </>
    )
}

export default Login;
