import React, { useEffect, useState } from "react";
import axios from "axios";

const TablaParticipantes = () => {
  const [skaters, setSkaters] = useState([]);

  async function getSkaters() {
    const response = await axios.get(
      `https://sprintfinalm8-production.up.railway.app/skaters`
    );
    setSkaters(response.data);
  }

  useEffect(() => {
    getSkaters();
  }, []);

  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Foto</th>
          <th scope="col">Nombre</th>
          <th scope="col">Años de experiencia</th>
          <th scope="col">Especialidad</th>
          <th scope="col">Estado</th>
        </tr>
      </thead>
      <tbody>
      {skaters.map((skater, index) => (
            <tr key={skater.id}>
              <td>{index + 1}</td>
              <td>
                <img src={`http://localhost:3001/${skater.foto}`} alt="imagen de perfil del skater"></img>
              </td>
              <td>{skater.nombre}</td>
              <td>{skater.anos_experiencia}</td>
              <td>{skater.especialidad}</td>
              <td>
                {skater.estado ? <p className="activo">Activo</p>:<p className="inactivo">Inactivo</p>}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default TablaParticipantes;