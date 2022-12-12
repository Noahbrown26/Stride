import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
//import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
  );
}

export default App;

//<Route path="/exercise/:id" element={<ExerciseDetail />} />
//<Route exact path='/' component={Home} />  