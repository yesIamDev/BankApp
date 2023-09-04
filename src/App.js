import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Depot from "./components/depot/Depot";
import Retrait from "./components/retrait/Retrait";
import Clients from "./components/client/Clients";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/depots" element={<Depot />} />
          <Route path="/retraits" element={<Retrait />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
