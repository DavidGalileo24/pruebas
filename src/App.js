import './App.css';
//Librerias
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//vistas
import Clientes from './vistas/clientes/Clientes';
import Vehiculos from './vistas/vehiculos/Vehiculos';
import Login from './vistas/login/Login';
import Dashboard from './vistas/Dashboard';
import Navbar from './vistas/templates/Navbar';

function App() {
  return (
    <div className="App">

      {/*Rutas*/}
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route exact path="/dashboard" element={<Dashboard/>}></Route>          
          <Route exact path="/clientes" element={<Clientes/>}></Route>
          <Route exact path="/vehiculos" element={< Vehiculos/>}></Route>
          <Route exact path="/navbar" element={< Navbar/>} ></Route>
                                        
        </Routes>
      </Router>

    </div>
  );
}

export default App;
