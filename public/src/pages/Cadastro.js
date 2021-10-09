import React from 'react'
import './Cadastro.css';
    
function Cadastro()  {
  return (
    <div className="Signin">
    <div className="imagecadastro">
        <img src= "https://i.ibb.co/fptP3qC/Adobe-Stock-285205596.png" alt="Astronalta olhando para Cima" />
    </div>
    <div className="FormCadastro">
        <div className="LogotipoRegistro">
          <img src="https://i.ibb.co/NVqpRyV/logo-Spacebook.png" alt= "Logotipo Spacebook" />
        </div>
        <div className="Titlesign">
          <p>Sign</p>
        </div>
        <div className="Titlename">
          <p>Name</p>     
        </div>
        <div className="Retangle">
          <div className="Nameinput">
            <input
              type="text"
              placeholder="Name" >   
            </input>
            </div>
        </div>
        <div className="Titlemail">
          <p>E-mail</p>
        </div>
        <div className="Retanglemail">
        </div>
          <div className="registerinputemail">
            <input
            type="text"
            placeholder="E-mail">   
            </input>
          </div>
        <div className="Titlepass">
          <p>Password</p>
        </div>
        <div className="Retanglepass">
        </div>
          <div className="registerinputpass">
            <input
              type="text"
              placeholder="Password">   
            </input>
          </div>
        <div className="Titleconfirmpass">
          <p>Confirm Password</p>
        </div>
        <div className="registerinputconfirmpass">
        </div>
        <div className="Retangleconfirmpass">
          <input
            type="text"
            placeholder="Password">   
          </input>
        </div>
        <div className="registername"> 
          <div className="buttonregister">
            <a href="localhost:3000">Register</a>
          </div>
        </div>
        <div className="tologin">
          <p>Don't have an account yet? <a href="http://localhost:3000/pagens/cadastro.js">Login</a>
          </p>
        </div>   
      </div>
    </div>
  
);
}  
     
     export default Cadastro;
    