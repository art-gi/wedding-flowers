
import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext.js';

import './App.css';
import Guard from './components/Common/Guard.js'
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
import MyReviews from './components/Reviews/MyReviews.js';
import AddReview from './components/Reviews/AddReview.js';
import EditReview from './components/Reviews/EditReview.js';
import Footer from './components/Footer/Footer.js';
import MyListings from './components/MyListings/MyListings.js';
import MyOrders from './components/PrivatePages/MyOrders.js';
import { DeleteReview } from './components/Reviews/DeleteReview.js';
import ErrorBoundary from './components/Common/Errors.js';


function App() {

  return (
    <ErrorBoundary>
      <AuthProvider>

        <div>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Catalog" element={<Catalog />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/details/:itemId" element={<Details />} />

              <Route element={<Guard />} >
                <Route path="/add-item" element={<AddItem />} />
                <Route path="/edit/:itemId" element={<EditItem />} />
                <Route path="/my-listings" element={<MyListings />} />
                <Route path="/add-review/:itemId" element={<AddReview />} />
                <Route path="/my-reviews" element={<MyReviews />} />
                <Route path="/edit-review/:itemId" element={<EditReview />} />
                <Route path="/my-orders" element={<MyOrders />} />
                <Route path="/delete-review/:itemId" element={<DeleteReview />} />

              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>

      </AuthProvider>
    </ErrorBoundary >
  );
};
export default App;
