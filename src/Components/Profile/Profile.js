import React, { Fragment, useState, useEffect } from "react";
import "./estilos.css";
import axios from "axios";

const Profile = () => {
  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }

  const { data } = parseJwt(sessionStorage.getItem("token"));

  if (data.email != window.location.href.split("profile/")[1]) {
    alert("No tienes los permisos necesarios para ver esta página")
    window.location.href = `/`;
  }

  const [skater, setSkater] = useState([]);

  async function getSkater() {
    const response = await axios.get(
      `https://sprintfinalm8-production.up.railway.app/skaters/${data.email}`
    );
    setSkater(response.data);
  }

  useEffect(() => {
    getSkater();
  }, []);

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const skaterEdit = {
      email: inputs.email,
      nombre: inputs.nombre,
      password: inputs.password,
      anos_experiencia: inputs.anos_experiencia,
      especialidad: inputs.especialidad,
    };
    const response = await axios.put(
      `https://sprintfinalm8-production.up.railway.app/skater/${skater.id}`,
      {
        skaterEdit,
      }
    );
    if (response.status === 200) {
      alert("Perfil actualizado con éxito");
    }
  };

  const deleteSkater = async () => {
    const response = await axios.delete(
      `https://sprintfinalm8-production.up.railway.app/skater/${skater.id}`
    );
    if (response.status === 200) {
      alert("Perfil fué eliminado con éxito");
      window.location.href = `/`;

    }
  };
  return (
    <Fragment>
      <h1>Skate Park</h1>

      <div className="py-4">
        <h2>Datos del perfil</h2>
        <hr className="w-50" />

        <form onSubmit={handleSubmit}>
          <div className="form-group row w-50 m-auto">
            <div className="form-group col-12 col-sm-6">
              <label>Email</label>
              <input
                name="email"
                className="form-control m-auto"
                disabled
                defaultValue={inputs.email || skater.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-12 col-sm-6">
              <label>Nombre</label>
              <input
                name="nombre"
                className="form-control m-auto"
                defaultValue={inputs.nombre || skater.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-12 col-sm-6">
              <label>Password</label>
              <input
                name="password"
                type="password"
                className="form-control m-auto"
                defaultValue={inputs.password || skater.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-12 col-sm-6">
              <label>Repita la password</label>
              <input
                type="password"
                className="form-control m-auto"
                defaultValue={skater.password}
              />
            </div>
            <div className="form-group col-12 col-sm-6">
              <label>Años de experiencia</label>
              <input
                name="anos_experiencia"
                className="form-control m-auto"
                defaultValue={
                  inputs.anos_experiencia || skater.anos_experiencia
                }
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-12 col-sm-6">
              <label>Especialidad</label>
              <input
                name="especialidad"
                className="form-control m-auto"
                defaultValue={inputs.especialidad || skater.especialidad}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-1">
            <button className="btn btn-primary">Actualizar</button>
          </div>
          <div>
            <div className="btn btn-danger" onClick={deleteSkater}>
              Eliminar cuenta
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Profile;
