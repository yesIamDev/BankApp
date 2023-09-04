import React, { useState, useEffect, Fragment } from "react";
import Modal from "../Modal";
import { IoMdAdd } from "react-icons/io";
import AddClientForm from "./AddClientForm";

export default function Clients() {
  const [Clients, setClients] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchClients = async () => {
      const res = await fetch("http://localhost:3333/api/clients/", {
        method: "get",
      });
      const data = await res.json();
      setClients(data);
    };
    fetchClients();
  }, []);

  return (
    <div className="flex flex-col gap-4 m-3">
      <div className="ml-20 flex justify-between mx-10">
        <div>
          <h1 className="font-Rubik text-lg font-extrabold">Clients</h1>
        </div>
        <Fragment>
          <div>
            <button
              data-modal-target="staticModal"
              data-modal-toggle="staticModal "
              className="block text-white bg-black focus:outline-none font-medium  rounded-lg  text-sm px-5 py-2.5 text-center"
              type="button"
              onClick={() => {
                setShowModal(true);
              }}
            >
              <IoMdAdd />
            </button>
          </div>
        </Fragment>
      </div>
      <div className="my-1 relative overflow-x-auto shadow-sm">
        <table className="w-full text-sm text-center text-gray-500">
          <thead className="text-sm text-gray-700 bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                Noms
              </th>
              <th scope="col" className="px-6 py-3">
                Postnoms
              </th>
              <th scope="col" className="px-6 py-3">
                Nationalite
              </th>
            </tr>
          </thead>
          <tbody>
            {Clients?.map((client) => {
              return (
                <tr className="bg-white border-b" key={client.id}>
                  <td className="px-6 py-4">{client.name}</td>
                  <td className="px-6 py-4">{client.postname}</td>
                  <td className="px-6 py-4">{client.nationalite}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Modal
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <AddClientForm />
      </Modal>
    </div>
  );



}
