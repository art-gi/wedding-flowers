
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
import Reviews from './components/Reviews/Reviews.js';
import AddReview from './components/Reviews/AddReview.js';
import EditReview from './components/Reviews/EditReview.js'
import MyOrders from './components/PrivatePages/MyOrders.js';
import Footer from './components/Footer/Footer.js';

const initalState = {
  _id: '',
  name: '',
  email: '',
  accessToken: '',
};

function App() {
  const [user, setUser] = useState(initalState);
  const [productsId, setProductsId] = useState([]);

  function login(userData) {
    return setUser(userData);
  };

  const productsItem = (itemId) => {
    setProductsId((oldState) => [...oldState, itemId]);

  };
  console.log(productsId)

  const logout = () => {
    setUser(initalState);
    setProductsId([]);

  };

  return (
    <AuthContext.Provider value={{ user, login, logout, productsItem, productsId }}>
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
            <Route path="/edit-review/:itemId" element={<EditReview />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
};
export default App;
