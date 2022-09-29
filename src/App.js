import { Routes, Route, Navigate } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from '../src/routes';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';


function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<PublicRoute Component={<HomePage />} />} />
        <Route path="/dashboard" element={<PrivateRoute Component={<Dashboard />} />} />
        <Navigate to="/" />
      </Routes>
    </>
  );
}

export default App;
