import React from 'react';
// import './App.modules.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './components/Login';
import Posts from './components/Posts';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exct path="/" element={<Login />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
