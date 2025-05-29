import React from "react";
import './tarjetaCita.css'

const TarjetaCita = ({ id, nombre, dueño, fecha, hora, sintomas, eliminarCita }) => {
    return (
        <div className="cita">
            <p>Mascota: <span>{nombre}</span></p>
            <p>Dueño: <span>{dueño}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Síntomas: <span>{sintomas}</span></p>
            <button
                className="button eliminar u-full-width"
                onClick={() => eliminarCita(id)}
            >Eliminar ×</button>
        </div>
    );
};
export default TarjetaCita;
