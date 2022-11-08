import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

const Admin = () => {
  const [skaters, setSkaters] = useState([]);

  async function getSkaters() {
    const response = await axios.get(`http://localhost:3001/skaters`);
    setSkaters(response.data);
  }

  useEffect(() => {
    getSkaters();
  }, []);

  const handleChange = async (id, estado) => {
    console.log();
    const skaterEdit = {estado: estado};
    const response = await axios.put(`http://localhost:3001/skater/${id}`, {
      skaterEdit,
    });
    if (response.status === 200) {
      alert("Skater actualizado con éxito");
      window.location.reload();

    }
  };
  return (
    <Fragment>
      <h1>Skate Park</h1>

      <div class="py-4">
        <h2>Administración</h2>
        <hr class="w-50" />

        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
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
                <td>{skater.nombre}</td>
                <td>{skater.anos_experiencia}</td>
                <td>{skater.especialidad}</td>
                <td>
                  {skater.estado ? (
                    <input
                      onClick={() => handleChange(skater.id, false)}
                      type={"checkbox"}
                      checked
                      name="estado"
                    ></input>
                  ) : (
                    <input
                      onClick={() => handleChange(skater.id, true)}
                      type={"checkbox"}
                      name="estado"
                    ></input>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};
export default Admin;
