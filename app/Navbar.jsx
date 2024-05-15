"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const navigate = useRouter();

  const closeSession = () => {
    localStorage.removeItem("token");
    navigate.push("/");
  };

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            href={"#"}
            className="nav-link"
            data-widget="pushmenu"
            role="button"
          >
            <i className="fas fa-bars" />
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <strong
            onClick={closeSession}
            className="nav-link"
            style={{ cursor: "pointer" }}
          >
            Salir
          </strong>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link
            href={"#"}
            className="nav-link"
            data-widget="fullscreen"
            role="button"
          >
            <i className="fas fa-expand-arrows-alt" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
