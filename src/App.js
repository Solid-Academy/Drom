import { Routes, Route } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "../src/routes";
import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<PublicRoute Component={HomePage} />} />
        <Route path="/dashboard" element={<PrivateRoute Component={Dashboard} />} />
      </Routes>
    </>
  );
}

export default App;
