import React, { useState } from "react";
import Axios from "axios";

export default function AddClientForm() {
  const url = "";
  const [data, setData] = useState({
    name: "",
    postname: "",
    nationalite: "",
  });

  function handleChange(e) {
    const newData = {...data};
  }

  return (
    <>
      <div className="p-2">
        <h2 className="text-lg font-Rubik text-gray-900 font-semibold text-center">
          Ajouter un nouveau client
        </h2>
      </div>
      <div className="max-w-md w-full mx-auto mt-2 bg-white p-6">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="text-sm font-bold text-gary-600 block"
            >
              Nom
            </label>
            <input
              onChange={(e) => handleChange(e)}
              id-="name"
              value={data.name}
              placeholder="name"
              type="text"
            />
          </div>
          <div>
            <label
              htmlFor="postname"
              className="text-sm font-bold text-gary-600 block"
            >
              Postnom
            </label>
            <input
              onChange={(e) => handleChange(e)}
              id-="postname"
              value={data.postname}
              placeholder="postname"
              type="text"
            />
          </div>
          <div>
            <label
              htmlFor="nationalite"
              className="text-sm font-bold text-gary-600 block"
            >
              Nationalite
            </label>
            <input
              onChange={(e) => handleChange(e)}
              id-="nationalite"
              value={data.nationalite}
              placeholder="nationalite"
              type="text"
            />
          </div>
        </form>
      </div> 
    </>
  );
}
