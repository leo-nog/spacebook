import React from 'react'
import './Inicio.css';

function Inicio() {
    return (
        <div className= "Iniciopage">
            <div className="Logotipoinicio">
                <img src="https://i.ibb.co/NVqpRyV/logo-Spacebook.png" alt= "Logotipo Spacebook" />
            </div>
            <div className="Messagetitle">
                <p>Message:</p>
            </div>
            <div className="typeimage">
                <p>Type Message</p>
                <div className="vectormessage">
                    <img src="https://i.ibb.co/qpk4xFQ/Vector.png" alt ="Microfone" />
                </div>
            </div>
            <div className="profile">
                <div className="photo">
                    <img src="https://i.ibb.co/RcX75L2/image-1.png" alt= "Foto do Perfil" />
                </div>
                <div className="name">
                    <p>Daniel Alexandre</p>
                </div>
                <div className="menuprofile">
                    <img src="https://i.ibb.co/M7DrdRw/Vector2.png" alt = "Menu" />
                </div>
            </div>
        </div>
    );
}
    export default Inicio;