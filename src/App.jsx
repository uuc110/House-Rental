import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './app.css';
import './output.css';
import './responsive.css';
import Home from './components/homepage/Home';
import Nav from './components/navbar/Nav';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profile from './components/profile/Profile';
import PropertySearch from './components/properties/PropertySearch';
import SingleProperty from './components/properties/SingleProperty';
import { AuthContext } from './context/AuthContext';
import UpdateProfile from './components/profile/UpdateProfile';
import UploadProperty from './components/properties/UploadProperty';

function App() {
  const { user } = useContext(AuthContext);
  // console.log(user);

  return (
    <div>
      <div className="container">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<PropertySearch />} />
            <Route path="/properties/:id" element={<SingleProperty />} />
            {user ? <Route path="/profile" element={<Profile />} /> : <Route path="/profile" element={<Navigate to="/login" />} />}
            {user ? <Route path="/profile/update" element={<UpdateProfile />} /> : <Route path='/pofile/update' element={<Navigate to="/login" />} />}
            {user ? <Route path='/profile/createpost' element={<UploadProperty />} /> : <Route path='/pofile/createpost' element={<Navigate to="/login" />} />}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
