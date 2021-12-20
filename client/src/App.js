
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { AuthContext } from './context/AuthContext.js';

import './App.css';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Login from './components/Auth/Login/Login.js'
import Register from './components/Auth/Register/Register.js'
import Logout from './components/Auth/Logout.js';
import AddItem from './components/Admin/Create/AddItem.js'
import EditItem from './components/Admin/Edit/EditItem'
import Catalog from './components/Shop/Catalog.js'
import NotFound from './components/NotFound/NotFound.js'
import Details from './components/Shop/Details/ItemDetails.js'
import Posts from './components/PostsCatalog/Posts.js';
//import Footer from './components/Footer/Footer.js';

function App() {
  const initalState = {
      _id: '',
      name: '',
      email: '',
      accessToken: ''
  }
  const [user, setUser] = useState(initalState);
  function login(userData) {
    return setUser(userData)
  }
  const logout = () => {
    setUser(initalState);
};

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Catalog" element={<Catalog />} />
            <Route path="/YourStories" element={<Posts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/add-item" element={<AddItem />} />
            <Route path="/edit-item" element={<EditItem />} />
            <Route path="/details/:itemId" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </AuthContext.Provider>
  );
};
export default App;
