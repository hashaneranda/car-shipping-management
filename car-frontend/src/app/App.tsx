import React, { useContext } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// components
import Layout from 'common/components/Layout/Layout';

// context
import { Context as UserContext } from 'common/context/UserContext';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';

const App = () => {
  // const { state } = useContext(UserContext);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        } />
        <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
