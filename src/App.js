import './App.css';
import WrapperNav from './components/Navigation/WrapperNav.js';
import Home from './components/Home.js';
import Catalog from './components/Products/Caltalog.js'
import Login from './components/Login.js'
import Register from './components/Register.js'



function navigationChangeHandler(path) {
  const routes = {
    'catalog': <Catalog />,
    'login': <Login />,
    'register': <Register />,
  }
  
  console.log(path)
    }

function App() {
  return (
    <div>
    <WrapperNav navigationChangeHandler={navigationChangeHandler} />
    <main>
    <Home />
    </main>
    </div>
  );
}

export default App;
