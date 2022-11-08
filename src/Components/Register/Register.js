import React, { Fragment } from "react";


const Register = () => {

  return (
    <Fragment>
      <h1>Skate Park</h1>

      <div className="py-4">
        <h2>Registro</h2>
        <hr className="w-50" />

        <form
          action="https://sprintfinalm8-production.up.railway.app/skater"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="form-group row w-50 m-auto">
            <div className="form-group col-12 col-sm-6">
              <label>Email</label>
              <input className="form-control m-auto" type="mail" name="email" />
            </div>
            <div className="form-group col-12 col-sm-6">
              <label>Nombre</label>
              <input
                className="form-control m-auto"
                type="text"
                name="nombre"
              />
            </div>
            <div className="form-group col-12 col-sm-6">
              <label>Password</label>
              <input
                className="form-control m-auto"
                type="password"
                name="password"
              />
            </div>
            <div className="form-group col-12 col-sm-6">
              <label>Repita la password</label>
              <input className="form-control m-auto" type="password" />
            </div>
            <div className="form-group col-12 col-sm-6">
              <label>Años de experiencia</label>
              <input
                className="form-control m-auto"
                type="number"
                name="anos_experiencia"
              />
            </div>
            <div className="form-group col-12 col-sm-6">
              <label>Especialidad</label>
              <input
                className="form-control m-auto"
                type="text"
                name="especialidad"
              />
            </div>
            <div className="form-group col-12 col-sm-12">
              <label>Foto de perfil</label>
              <input type="file" name="foto" />
            </div>
          </div>
          <button type="submit" className="btn btn-info mb-3" >
            Registrarme
          </button>
          <p>
            <a href="login"> Iniciar sesión</a>
          </p>
        </form>
      </div>
    </Fragment>
  );
};
export default Register;
