import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
//import Footer from './components/Footer';
import Workouts from './pages/workouts.jsx';

//import apollo client library//
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// set graphql endpoint//
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});




function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Workouts' component={Workouts} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
    </ApolloProvider>
  );
}

export default App;

//<Route path="/exercise/:id" element={<ExerciseDetail />} />
//<Route exact path='/' component={Home} />  