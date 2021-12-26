
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { AuthProvider, AuthContext } from './context/AuthContext.js';

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
import Reviews from './components/Reviews/Reviews.js';
import AddReview from './components/Reviews/AddReview.js';

import Footer from './components/Footer/Footer.js';

function App() {
  const [productsId, setProductsId] = useState([]);

  const productsItem = (itemId) => {
    setProductsId((oldState) => [...oldState, itemId]);

  };

  return (
    <AuthProvider>
      <AuthContext.Provider value={{ productsItem, productsId }}>
        <div>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Catalog" element={<Catalog />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/add-item" element={<AddItem />} />
              <Route path="/edit/:itemId" element={<EditItem />} />
              <Route path="/details/:itemId" element={<Details />} />
              <Route path="/add-review/:itemId" element={<AddReview />} />
              <Route path="/reviews" element={<Reviews />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthContext.Provider>
    </AuthProvider>
  );
};
export default App;
