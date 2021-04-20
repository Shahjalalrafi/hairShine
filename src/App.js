import './App.css';
import Home from './Component/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Login from './Component/Home/Login/Login';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import AddService from './Component/Dashboard/AddService/AddService';
import ServiceCheckOut from './Component/ServiceCheckOut/ServiceCheckOut';
import { createContext, useState } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Booking from './Component/Dashboard/Booking/Booking';
import ProvideReview from './Component/Dashboard/ProvideReview/ProvideReview';
import OrderList from './Component/Dashboard/OrderList/OrderList';
import Manager from './Component/Dashboard/Manager/Manager';
import MakeAdmin from './Component/Dashboard/MakeAdmin/MakeAdmin';
import ServicePage from './Component/ServicePage/ServicePage';

export const userContext = createContext()

function App() {
  const [logedInUser, setLogedInUser] = useState({})
  return (
    <userContext.Provider value = {[logedInUser, setLogedInUser]} className="App">
      <Router>
        <Switch>

          <Route path='/home'>
            <Home />
          </Route>
          
          <Route path='/services'>
            <ServicePage />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <PrivateRoute path='/admin'>
            <Dashboard />
          </PrivateRoute>
          
          <PrivateRoute path='/addService'>
            <AddService />
          </PrivateRoute>
          
          <PrivateRoute path='/booking'>
            <Booking />
          </PrivateRoute>
          
          <PrivateRoute path='/review'>
            <ProvideReview />
          </PrivateRoute>
          
          <PrivateRoute path='/order-list'>
            <OrderList />
          </PrivateRoute>
          
          <PrivateRoute path='/make-admin'>
            <MakeAdmin />
          </PrivateRoute>
          
          <PrivateRoute path='/manage-service'>
            <Manager />
          </PrivateRoute>

          <PrivateRoute path='/service-check-out/:id'>
            <ServiceCheckOut />
          </PrivateRoute>
          
          <Route exact path='/'>
            <Home />
          </Route>
          
          <Route path='*'>
            page not found!!..
          </Route>

        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;


// client side: https://github.com/Porgramming-Hero-web-course/complete-website-client-Shahjalalrafi

// server side: https://github.com/Porgramming-Hero-web-course/complete-website-server-Shahjalalrafi

// live site: https://hairshine-867d2.web.app

// env: https://safe-escarpment-39469.herokuapp.com/