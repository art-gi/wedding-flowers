
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Catalog from './components/Products/Products.js'
import Login from './components/Login/Login.js'
import Register from './components/Register/Register.js'
import NotFound from './components/NotFound/NotFound.js'
import Reviews from './components/Reviews/Reviews.js';
//import Details from './components/Products/Details.js'
import Stories from './components/PostsCatalog/Stories.js';
import Footer from './components/Footer/Footer.js';
function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Stories />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/myFavorites" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/logout" />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
export default App;
