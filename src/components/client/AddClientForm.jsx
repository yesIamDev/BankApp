import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddClientForm() {
  const history = useNavigate();

  const [name, setName] = useState("");
  const [postname, setPostname] = useState("");
  const [nationalite, setNationalite] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try{
        let res = await fetch("http://localhost:3333/api/clients/create", {
          method:"POST",
          body: JSON.stringify({
            name:name,
            postname: postname,
            nationalite: nationalite,
          }),
        });
        let resJson = await res.json();
        if(res.status === 200){
          setName("");
          setPostname("");
          setNationalite("");
          console.log("client creer avec succes!")
        }else{
          console.log("Erreur lors de la creation du client")
        }
    }catch(e){
      console.log(e);
    }
  }





  return (
    <>
      <div className="p-2">
        <h2 className="text-lg font-Rubik text-gray-900 font-semibold text-center">
          Ajouter un nouveau client
        </h2>
      </div>
      <div className="flex flex-col justify-center mx-2">
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
                name="name"
                type="text"
                value={name}
                placeholder="nom"
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="postname"
                className="text-sm font-bold text-gary-600 block"
              >
                PostNom
              </label>
              <input
                name="postname"
                type="text"
                value={postname}
                placeholder="postname"
                onChange={(e) => setPostname(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
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
                name="nationalite"
                value={nationalite}
                placeholder="nationalite"
                onChange={(e) => setNationalite(e.target.value)}
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
              />
            </div>
            <div>
              <button
                className="w-full py-2 px-4 bg-gray-900 hover:border rounded-md text-white text-sm font-Rubik"
                type="submit"
              >
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
