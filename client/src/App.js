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
import OrderDetail from './pages/ProductDetail';



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
            <Route
              path='/shop/products/:id'
              element={<OrderDetail />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  )
}
export default App;