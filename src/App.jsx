import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import { UserStorege } from './UserContext';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorege>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
            </Routes>
          </main>
          <Footer />
        </UserStorege>
      </BrowserRouter>
    </div>
  );
};

export default App;
