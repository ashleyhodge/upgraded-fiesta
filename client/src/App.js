import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';


import Nav from './components/Nav';
import Store from './pages/Store';



const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});



function App() {
  return (
    <ApolloProvider client={client} >
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route
              path='/shop'
              element={<Store />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  )
}
export default App;