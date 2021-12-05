import { useState } from "react";

import './App.css';

import Header from "./components/Header/Header.js";
import Home from './components/Home/Home.js';
import Catalog from './components/Products/Products.js'
import Login from './components/Login/Login.js'
import Register from './components/Register/Register.js'
import NotFound from './components/NotFound/NotFound.js'
import Reviews from "./components/Reviews/Reviews.js";
//import Details from './components/Products/Details.js'
import Stories from "./components/PostsCatalog/Stories.js";

function App() {

  const [page, setPage] = useState('/home');

  const routes = {
    '/home': <Home />,
    '/catalog': <Catalog />,
    '/login': <Login />,
    '/register': <Register />,
    '/logout': <Home />,
    '/reviews': <Reviews />,
    '/stories': <Stories />,
    '/*': <NotFound />
  }

  function navigationChangeHandler(path) {
 
    setPage(path)
}

  return (
    <div>
      <Header navigationChangeHandler={navigationChangeHandler} />
      <main>
        {routes[page]}
      </main>
    </div>
  );
}

export default App;
