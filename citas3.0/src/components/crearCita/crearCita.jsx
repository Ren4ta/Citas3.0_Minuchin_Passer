import React, { useState } from "react";
import './crearCita.css';

const CrearCita = ({ crearCita }) => {
    const [form, setForm] = useState({
        nombre: '',
        dueño: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        crearCita(form);
        setForm({
            nombre: '',
            dueño: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Nombre Mascota</label>
            <input type="text" name="nombre" className="u-full-width" placeholder="Nombre Mascota" value={form.nombre} onChange={handleChange} required/>

            <label>Nombre Dueño</label>
            <input type="text" name="dueño" className="u-full-width" placeholder="Nombre dueño de la mascota" value={form.dueño} onChange={handleChange} required/>

            <label>Fecha</label>
            <input type="date" name="fecha" className="u-full-width" value={form.fecha} onChange={handleChange} required/>

            <label>Hora</label>
            <input type="time" name="hora" className="u-full-width" value={form.hora} onChange={handleChange} required/>

            <label>Síntomas</label>
            <textarea name="sintomas" className="u-full-width" value={form.sintomas} onChange={handleChange} required></textarea>

            <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
        </form>
    );
};

export default CrearCita;
