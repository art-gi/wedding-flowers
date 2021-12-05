import { useState } from "react";

import './App.css';
import WrapperNav from './components/Navigation/WrapperNav.js';
import Home from './components/Home.js';
import Catalog from './components/Products/Caltalog.js'
import Login from './components/Login.js'
import Register from './components/Register.js'
import NotFound from './components/NotFound.js'
import Reviews from "./components/Review.js";
//import Details from './components/Products/Details.js'
import Stories from "./components/Stories.js";

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
      <WrapperNav navigationChangeHandler={navigationChangeHandler} />
      <main>
        {routes[page] || <NotFound />}
      </main>
    </div>
  );
}

export default App;
