"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/app/Navbar";
import { SidebarContainer } from "@/app/SidebarContainer";
import { ContentHeader } from "@/app/ContentHeader";
import { Footer } from "@/app/Footer";
import { useRouter } from "next/navigation";
import ApiInvoke from "@/config/ApiInvoke";

export default function EditForm(params) {
  const [firstName, setFirstName] = useState(params.firstName);
  const [lastName, setLastName] = useState(params.lastName);
  const [document, setDocument] = useState(params.document);
  const [email, setEmail] = useState(params.email);
  const [phone, setPhone] = useState(params.phone);
  const [address, setAddress] = useState(params.address);

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        firstName,
        lastName,
        document,
        email,
        phone,
        address,
      }
      await ApiInvoke.invokePUT(`api/clients/${params.id}`, data)
      .then((res) => {
        if (res.status !== "success") {
          swal("Error", res.message, "error");
          return
        }
        router.push("/client");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="wrapper">
      <Navbar />
      <SidebarContainer />
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Add Client"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Add Client"}
          ruta1={"/home"}
        />
        <div className="mt-10 flex justify-center items-center pb-10">
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold pb-5"> Update Client </h1>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-70text-gray-700 text-xs font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full disabled:text-gray-400 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                ></input>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your last name"
                ></input>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="document"
                >
                  Document
                </label>
                <input
                  className="appearance-none block w-full disabled:text-gray-400 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="document"
                  disabled
                  type="number"
                  value={document}
                  onChange={(e) => setDocument(e.target.value)}
                  placeholder="Enter your document"
                ></input>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                ></input>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="phone"
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone"
                ></input>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  className="ppearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                ></input>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button
                  className="shadow bg-orange-400 hover:bg-orange-500 focus:shadow-outline-teal focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Update
                </button>
              </div>
              <div className="md:w-2/3">
                <Link href="/client">
                  <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    Back
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
