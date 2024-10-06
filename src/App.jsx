import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Auth/Signup';
import Login from './Pages/Auth/Login';
import Account from './Pages/Account';
import ProtectedRoute from './Utils/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />

        {/* Protected Routes */}
        <Route 
          path="/" 
          element={
              <Home />
          } 
        />
        <Route 
          path="/Account" 
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
