"use client";
import React from "react";
import ApiInvoke from "@/config/ApiInvoke";
import swal from "sweetalert";

export default function DeleteClient({ client }) {
  const _id = client?._id;
  const firstName = client?.firstName;
  const lastName = client?.lastName;

  const removeClient = async () => {
    const confirmed = confirm(
      `Are you sure you want to delete ${firstName} ${lastName}`
    );
    if (confirmed) {
      try {
        const res = await ApiInvoke.invokeDELETE(`api/clients/${_id}`);
        if (res.status !== "success") {
          swal("Error", res.message, "error");
          return;
        }
        swal("Exito", "El cliente fue eliminado correctamente", "success");
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <button
      onClick={removeClient}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
    >
      Delete
    </button>
  );
}
