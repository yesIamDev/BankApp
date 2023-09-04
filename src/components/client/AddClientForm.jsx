
import { useForm } from "react-hook-form";

export default function AddClientForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch(`http://localhost:3333/api/clients/create`, {
      method: "POST",
      body: data,
    }).then(() => {
        console.log("client creer avec succes!")
        console.log(data)
    });
  };


  return (
    <>
      <div className="p-2">
        <h2 className="text-lg font-Rubik text-gray-900 font-semibold text-center">
          Ajouter un nouveau client
        </h2>
      </div>
      <div className="flex flex-col justify-center mx-2">
        <div className="max-w-md w-full mx-auto mt-2 bg-white p-6">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="name"
                className="text-sm font-bold text-gary-600 block"
              >
                Nom
              </label>
              <input
                id="name"
                {...register("name")}
                type="text"
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
                id="postname"
                {...register("postname")}
                type="text"
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
                id="nationalite"
                {...register("nationalite")}
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
