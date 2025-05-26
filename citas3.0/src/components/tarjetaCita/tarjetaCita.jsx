import React from "react";
import './tarjetaCita.css'

const tarjetaCita = (props) => { 
    const { id, nombre, dueño, fecha, hora, sintomas, eliminarCita } = props;
    return (
        <div class="cita">
            <p>Mascota: <span>{props.nombre}</span></p>
            <p>Dueño: <span>{props.dueño}</span></p>
            <p>Fecha: <span>{props.fecha}</span></p>
            <p>Hora: <span>{props.hora}</span></p>
            <p>Sintomas: <span>{props.sintomas}</span></p>
            <button 
                className="button eliminar u-full-width" 
                onClick={() => eliminarCita(id)} 
            >Eliminar ×</button>
        </div>
    );
}

export default tarjetaCita