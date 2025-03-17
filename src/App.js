import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Login from './login';
import Main from './main';
import AddUser from './pages/adduser';
import EditUser from './pages/edituser';
import ViewUsers from './pages/viewusers';

function PrivateRoute({ element, isAuthenticated }) {
  return isAuthenticated ? element : <Navigate to="/" />;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login onLogin={setIsAuthenticated} />} />
        <Route path="/nfreg" element={<Login onLogin={setIsAuthenticated} />} />        
        <Route path="/main" element={<PrivateRoute element={<Main />} isAuthenticated={isAuthenticated} />} />
        <Route path="/user/add" element={<PrivateRoute element={<AddUser />} isAuthenticated={isAuthenticated} />} />
        <Route path="/user/edit/:userID" element={<PrivateRoute element={<EditUser />} isAuthenticated={isAuthenticated} />} />
        <Route path="/user/view" element={<PrivateRoute element={<ViewUsers />} isAuthenticated={isAuthenticated} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;