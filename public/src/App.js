import React from 'react'
import style from './App.css';

function App()  {
  return (
    <div className="App">
      <div className="imagelogin" style={style}>
        <img src="https://i.ibb.co/wBm3x3Y/Adobe-Stock-277977555.png" alt="Astronalta em um Planeta" />
        
      </div>
      <div>
        <div className="logotipo">
          <img src="https://i.ibb.co/NVqpRyV/logo-Spacebook.png" alt= "Logotipo Spacebook" />
        </div>
        <div className="Titlelogin">
          <p>Login</p>
        </div>
        <div className="Titleusername">
          <p>Username</p>
        </div>
        <div className="logininputemail" style={style}>
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
        <div className="checkbox">
          <input
          type="checkbox"
          id="remember"
          names="Remember me"
          >
          </input>
          <label for="remember">Remember me</label>
        </div>
        <div className="resetpass">
        <a href="localhost:3000/" >Reset Password?</a>
        </div>
        <div className="buttonsignin">
          <div className="buttonsigninname">
          <a href="https://localhost:3000">Sign In</a>
          </div>
        </div>
          <div className="signup">
            <p>Don't have an account yet? <a href="https://localhost:3000">Sign Up</a></p>
          </div>
      </div>    
    </div>
      
  );
}  
export default App;
