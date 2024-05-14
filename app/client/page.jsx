"use client";
import React, { useState, useEffect } from "react";
import { Navbar } from "@/app/Navbar";
import { SidebarContainer } from "@/app/SidebarContainer";
import { ContentHeader } from "@/app/ContentHeader";
import { Footer } from "@/app/Footer";
import Link from "next/link";
import ApiInvoke from "@/config/ApiInvoke";

export default function Client() {
  const [clients, setClients] = useState([]);
  const getClient = async () => {
    try {
      const res = await ApiInvoke.invokeGET("api/clients/");
      console.log(res.data);
      setClients(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getClient();
  }, []);
  return (
    <div className="wrapper">
      <Navbar />
      <SidebarContainer />
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Listado de Clientes"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Clientes"}
          ruta1={"/home"}
        />
        <div className="container mx-auto mt-5 p-10">
          <div className="flex justify-between mr-10">
            <div className="text-2xl font-bold">CRUD List</div>
            <Link
              href="client/add"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Create Client
            </Link>
          </div>
          <table className="w-full mt-5 text-center">
            <thead>
              <tr>
                <th className="px-4 py-2">First Name</th>
                <th className="px-4 py-2">Last Name</th>
                <th className="px-4 py-2">Document</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client._id}>
                  <td className="border px-4 py-2">{client.firstName}</td>
                  <td className="border px-4 py-2">{client.lastName}</td>
                  <td className="border px-4 py-2">{client.document}</td>
                  <td className="border px-4 py-2">{client.email}</td>
                  <td className="border px-4 py-2">{client.phone}</td>
                  <td className="border px-4 py-2">{client.address}</td>
                  <td className="border px-4 py-2">
                    <form method="post">
                      <Link
                        href={`client/edit/${client._id}`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                      >
                        Edit
                      </Link>
                      {/* <DeleteClient client={client} /> */}
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
