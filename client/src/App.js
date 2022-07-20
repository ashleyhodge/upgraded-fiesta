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
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Booking from './pages/Booking'


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
            <Route
              path='/'
              element={<Home />}
            />
            <Route  
              path='/gallery'
              element={<Gallery />}
            />
            <Route  
              path='/blog'
              element={<Blog />}
            />
            <Route
              path='/booking'
              element={<Booking />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  )
}
export default App;