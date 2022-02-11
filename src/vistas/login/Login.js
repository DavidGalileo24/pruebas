import React, { Component, Fragment, useState, useEffect } from "react";
//Librerias
import axios from "axios";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import Cookies from 'universal-cookie';


let cookies = new Cookies();
class Login extends Component {
  
  //estados
  state={
    form:{
      username: '',
      password: ''
    }
  }
  
  inputInfo = async(e)=>{
    await this.setState({ 
      form:{
        ...this.setState.form,
        [e.target.name] :e.target.value
      }
    });
  }
  formLogin = async() => {
    await  axios.get(`${process.env.REACT_APP_BASEURL}Login/iniciarSesion`, {param: {username: this.state.form.username, password: this.state.form.password}})
    .then(response => {
      console.log(response.data)
      return response.data;
    })
    .then(response => {
      if(response.lenght>0){
        let respuesta = response[0];
        cookies.set('id', respuesta.id, {path: "/"})
        cookies.set('username', respuesta.id, {path: "/"})
        window.location.href="./dashboard"
      }else{
        console.log("error")
      }
    })
    .catch(error => {
      console.log(error)
    })
  }
  componentDidMount() {
    if(cookies.get('username')){
        window.location.href="./menu";
    }
}

  render(){
    return (
      
        <Container>
        <Row>
          <Col md={8} className="backLogin">
           {/* <img
              src="http://172.20.2.4/sistemamodular/login/img/Fachada-Diparvel.jpg"
              className="img-responsive img-fluid imgLogin1"
            /> */}
          </Col>
          <Col md={4} className="containerForm">
            <form className="formLogin" onSubmit={this.formLogin}>
              <img
                src="https://diparvel.com/wp-content/uploads/2021/02/cropped-logo-diparvel-300x84-1.png"
                alt="Logo Diparvel"
                width={"200px"}
                className="imgLogo"
              />
              <br />
              <Col className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Usuarios"
                  name="username"
                  id="username"
                  onChange={this.inputInfo}
                />
              </Col>
              <Col className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  name="password"
                  id="password"
                  onChange={this.inputInfo}
                  
                />
              </Col>
              { /*error && (
                <Alert class="alert alert-danger text-center" role="alert">
                  El usuario y/o la contraseña son incorrectos{error}
                </Alert>
              ) */}
              <Col className="d-grid gap-2">
                <Button
                  type="submit"
                  id="btnLogin"
                  name="btnLogin"
                  variant="primary"
                  size="md"
                  
                >
                  Entrar
                </Button>
              </Col>
              <br />
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
