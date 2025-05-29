import './App.css';
import { useState, useEffect } from 'react';
import TarjetaCita from './components/tarjetaCita/tarjetaCita';
import CrearCita from './components/crearCita/crearCita';

function App() {
  const [citas, setCitas] = useState([]);

  // Leer citas desde localStorage al montar
  useEffect(() => {
    const citasGuardadas = localStorage.getItem('citas');
    if (citasGuardadas) {
      try {
        setCitas(JSON.parse(citasGuardadas));
      } catch (error) {
        console.error("Error al cargar citas desde localStorage:", error);
        localStorage.removeItem('citas'); // Limpia datos corruptos
      }
    }
  }, []);

  // Guardar citas en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  const agregarCita = (nuevaCita) => {
    const id = new Date().getTime();
    setCitas([...citas, { ...nuevaCita, id }]);
  };

  const eliminarCita = (id) => {
    const confirm = window.confirm("¿Estás seguro de que deseas eliminar esta cita?");
    if (confirm) {
      const nuevasCitas = citas.filter((cita) => cita.id !== id);
      setCitas(nuevasCitas);
    }
  };

  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="formulario">
          <h2>Formulario</h2>
          <CrearCita crearCita={agregarCita} />
        </div>
        <div className="listado">
          <h2>Listado</h2>
          {citas.map((cita) => (
            <div key={cita.id} className="cita">
              <TarjetaCita
                id={cita.id}
                nombre={cita.nombre}
                dueño={cita.dueño}
                fecha={cita.fecha}
                hora={cita.hora}
                sintomas={cita.sintomas}
                eliminarCita={eliminarCita}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
