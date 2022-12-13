import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
//import Footer from './components/Footer';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/Register' component={Register} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
  );
}

export default App;

//<Route path="/exercise/:id" element={<ExerciseDetail />} />
//<Route exact path='/' component={Home} />  