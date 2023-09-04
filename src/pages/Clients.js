import {Link} from 'react-router-dom'
import { useEffect,useState } from 'react'

const Clients = () => {
    const [clients, setClients] = useState();

    useEffect(() => {
    const fetchClients = async () => {
      const res = await fetch("http://localhost:3333/api/clients/", {
        method: "get",
      });
      const data = await res.json();
      setClients(data);
    };
    fetchClients();
  }, [Clients]);



 


}