import React, { Fragment, useState } from "react";
import axios from "axios";

const Login = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const skater = {
      email: inputs.email,
      password: inputs.password
    };
    const response = await axios.post("https://sprintfinalm8-production.up.railway.app/login", {
      skater,
    });
    console.log(response);
    if (response.status === 200) {
      const {token} = await response.data
      sessionStorage.setItem("token",token);
      window.location.href = `/profile/${skater.email}`;
    }
    if (response.status === 401) {
      alert("Credenciales no validas");
    }
  };
  return (
    <Fragment>
      <h1>Skate Park</h1>

      <div className="py-5">
        <h2>Iniciar Sesión</h2>
        <hr className="w-50" />

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-group">
              <label>Email</label>
              <input className="form-control w-50 m-auto"
                type="mail"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input className="form-control w-50 m-auto"
                type="password"
                name="password"
                value={inputs.password || ""}
                onChange={handleChange}/>
            </div>
          </div>
          <button className="btn btn-success mb-3">Ingresar</button>
          <p>
            ¿Aún no tienes cuenta? <a href="registro">Regístrate</a>
          </p>
        </form>
      </div>
    </Fragment>
  );
};
export default Login;
