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

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/admin'>
            <Dashboard />
          </Route>
          
          <Route path='/addService'>
            <AddService />
          </Route>
          
          <Route path='/booking'>
            <Booking />
          </Route>
          
          <Route path='/review'>
            <ProvideReview />
          </Route>
          
          <Route path='/order-list'>
            <OrderList />
          </Route>

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
