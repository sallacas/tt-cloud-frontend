"use client";
import React, { useEffect, useState, useCallback } from "react";
import EditForm from "./EditForm"; 
import ApiInvoke from "@/config/ApiInvoke";

export default function EditClient({ params }) {
  const [client, setClient] = useState(null); 
  const [loading, setLoading] = useState(true);

  const getClient = useCallback(async () => {
    try {
      const res = await ApiInvoke.invokeGET(`api/clients/${params.id}`);
      setClient(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); 
    }
  }, [params.id]); 

  useEffect(() => {
    getClient();
  }, [getClient]); 

  const { firstName, lastName, document, email, phone, address } = client || {};

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        client && (
          <EditForm
            firstName={firstName}
            lastName={lastName}
            document={document}
            email={email}
            phone={phone}
            address={address}
            id={params.id}
          />
        )
      )}
    </div>
  );
}
