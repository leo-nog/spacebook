import React from 'react'
import './App.css';

function App()  {
  return (
      <div className="App">
        <div className="imagelogin">
        <img src="https://i.ibb.co/wBm3x3Y/Adobe-Stock-277977555.png" alt="Astronalta em um Planeta" />
          </div>
        <div className="logotipo">
          <img src="https://i.ibb.co/NVqpRyV/logo-Spacebook.png" alt= "Logotipo Spacebook" />
          </div>
        <div className="Titlelogin">
          <p>Login</p>
          </div>
        <div className="Titleusername">
          <p>Username</p>
          </div>
        <div className="logininputemail">
          <input
            type="text"
            placeholder="E-mail">   
          </input>
        </div>
        <div className="Titlepass">
          <p>Password</p>
          </div>
        <div className="logininputpass">
          <input
            type="text"
            placeholder="Password">   
          </input>
        </div>
      </div>
  );
}  

export default App;
