"use client";
import React, { useEffect, useState } from "react";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
import "admin-lte/dist/css/adminlte.min.css";
import Link from "next/link";
import swal from "sweetalert";
import ApiInvoke from "@/config/ApiInvoke";
import { useRouter } from "next/navigation";

function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
  })
  const { username, email, password, repassword } = user;
  const router = useRouter();
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    document.getElementById("username").focus();
  }, []);

  const singUp = (e) => {
    if (username === "" || email === "" || password === "") {
      swal("Error", "Debes completar todos los campos", "warning");
      return
    }
    if (password.length < 6) {
      swal(
        "Error",
        "La contraseña debe tener al menos 6 caracteres",
        "warning"
      );
      return
    }
    if (password !== repassword) {
      swal("Error", "Las contraseñas no coinciden", "warning");
      return
    }
    const data = {
      username,
      email,
      password
    }
    const rs = ApiInvoke.invokePOST("api/users/", data);
    rs.then((data) => {
      if (!data.token) {
        const { message } = data.errors[0];
        swal("Error", message, "warning");
        return
      }
      swal("Exito", "El usuario fue creado correctamente", "success").then(() => {
        router.push("/login");
      });
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    singUp();
  };
  
  return (
    <div className="hold-transition register-page">
      <div className="register-box">
        <div className="register-logo">
          <Link href={"/"}>Talento Tech</Link>
        </div>

        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg">Registra un usuario</p>
            <form onSubmit={onSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  name="username"
                  id="username"
                  value={username}
                  onChange={onChange}
                  required
                ></input>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={onChange}
                  required
                ></input>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={onChange}
                  required
                ></input>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Retype password"
                  name="repassword"
                  id="repassword"
                  value={repassword}
                  onChange={onChange}
                  required
                ></input>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="mb-2">
                    <Link href="/login" className="text-center">
                      <span>Ya tienes cuenta? Ingresa</span>
                    </Link>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
