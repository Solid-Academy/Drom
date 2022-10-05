import { Routes, Route } from "react-router-dom";
import { PublicRoute } from "../src/routes";
import HomePage from "./components/HomePage/HomePage";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRoute Component={HomePage} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/dashboard" element={<PrivateRoute Component={Dashboard} />} /> */}
      </Routes>
    </>
  );
}

export default App;
