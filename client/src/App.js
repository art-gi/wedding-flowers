
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { AuthContext } from './context/AuthContext.js';

import './App.css';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Catalog from './components/Products/Products.js'
import Login from './components/Login/Login.js'
import Register from './components/Register/Register.js'
import AddItem from './components/Create/AddItem.js'
import NotFound from './components/NotFound/NotFound.js'
//import Reviews from './components/Reviews/Reviews.js';
//import Details from './components/Products/Details.js'
import Posts from './components/PostsCatalog/Posts.js';
//import Footer from './components/Footer/Footer.js';

function App() {
  const [user, SetUser] = useState({
    _id: '',
    name: '',
    email: '',
    accessToken: ''
  });
  function onLogin(userData) {
    return SetUser(userData)
  }

  return (
    <AuthContext.Provider value={{user}}>
      <div>
        <Header user={{user}} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/YourStories" element={<Posts />} />
            <Route path="/login" element={<Login onLogin={onLogin}/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/add-item" element={<AddItem />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </AuthContext.Provider>
  );
};
export default App;
