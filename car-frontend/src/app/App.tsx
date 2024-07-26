import React, { useContext } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// components
import Layout from 'common/components/Layout/Layout';

// context
import { Context as UserContext } from 'common/context/UserContext';

// pages
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import AddCar from 'pages/AddCar/AddCar';

import { AppRoute } from 'common/utils/routeHelper';

const App = () => {
  const { state } = useContext(UserContext);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='*' element={<h1>Page not found</h1>} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path='/car/add' element={<AppRoute component={<AddCar />} isAuthenticated={state?.isAuthenticated} />} />
          <Route path='/car/edit' element={<AppRoute component={<AddCar isEdit={true} />} isAuthenticated={state?.isAuthenticated} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
