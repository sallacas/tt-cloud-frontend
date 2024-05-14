"use client";
import React, { useEffect, useState } from "react";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
import "admin-lte/dist/css/adminlte.min.css";
import swal from "sweetalert";
import Link from "next/link";
import ApiInvoke from "@/config/ApiInvoke";
import { useRouter } from "next/navigation";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    document.getElementById("email").focus();
  }, []);

  const singIn = (e) => {
    if (email === "" || password === "") {
      swal("Error", "Debes completar todos los campos", "warning");
    }
    if (password.length < 6) {
      swal(
        "Error",
        "La contraseña debe tener al menos 6 caracteres",
        "warning"
      );
    }
    const rs = ApiInvoke.invokePOST("api/auth", user);
    rs.then((data) => {
      if (!data.token) {
        swal("Error", data.message, "warning");
        return;
      }
      const { token } = data;
      localStorage.setItem("token", token);
      router.push("/home");
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    singIn();
  };

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <Link href={"/"}>Talento Tech</Link>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">
              Ingresa la información para iniciar sesión
            </p>
            <form onSubmit={onSubmit}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="email"
                  value={email}
                  name="email"
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
                  id="password"
                  name="password"
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
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember"></input>
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
              </div>
            </form>
            <div>
              <p className="mt-3 mb-1">
                <Link href="/register" className="text-center font-light">
                  Registrese como usuario nuevo
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
