import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Nav from './components/Nav';
import Store from './pages/Store';

function App() {
  return (
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
  )
}
export default App;