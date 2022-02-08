import React, { Fragment, useState, useEffect } from "react";
//Librerias
import axios from "axios";
//Datos
import loginInfo from './LoginInfo';

const Login = (props) => {
  //estados
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [user, user] = useState(null);
  const {token} = user;
  
const containerForm = () => {
  
}

const inputUsername = (name, value) => {
  
}
const inputPassword = (name, value) => {
  
}
const envioLogin = (e) => {
  let datosForm = {username, password}
  if(datosForm){
    console.log("Datos", datosForm)
  }
}
const envioDatos = async (e) => {
  e.preventDefault();
  try{
    const dataLogin = await loginInfo.login({
      username,
      password
    })
    setUsername('')
    setPassword('')
    setUser(user) 
  }catch(error){
    console.log("Ha ocurrido un error")
  }

}
  return (
    <div>
      <div>
        <div>
          <div md={8} className="backLogin">
           {/* <img
              src="http://172.20.2.4/sistemamodular/login/img/Fachada-Diparvel.jpg"
              className="img-responsive img-fluid imgLogin1"
            /> */}
          </div>
          <div md={4} className="containerForm">
            <form className="formLogin" onSubmit={envioDatos}>
              <img
                src="https://diparvel.com/wp-content/uploads/2021/02/cropped-logo-diparvel-300x84-1.png"
                alt="Logo Diparvel"
                width={"200px"}
                className="imgLogo"
              />
              <br />
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Usuarios"
                  name="username"
                  id="username"
                  onChange={(e) => inputUsername(e.target.name, e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  name="password"
                  id="password"
                  onChange={(e) => inputPassword(e.target.name, e.target.value)}
                />
              </div>
              {error && (
                <div class="alert alert-danger" role="alert">
                  El usuario y/o la contraseña son incorrectos{error}
                </div>
              )}
              <div className="d-grid gap-2">
                <button
                  type="submit"
                  id="btnLogin"
                  name="btnLogin"
                  variant="primary"
                  onClick={envioLogin}
                  size="md"
                >
                  Entrar
                </button>
              </div>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
