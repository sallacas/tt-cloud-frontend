import React from "react";
import Link from "next/link";

export const Menu = () => {
  return (
    <nav className="mt-2">
      <ul
        className="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
      >
        <li className="nav-item">
          <Link href={"/home"} className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>Inicio</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link href={"/clientes"} className="nav-link">
            <i className="nav-icon fas fa-edit" />
            <p>Clientes</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
