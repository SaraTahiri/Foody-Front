import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import About from './AboutUs/About';
import Menus from './Menus/Menus';
import Restaurants from './pages/Restaurants';
import RestaurantProfile from './pages/RestaurantProfile';
import Explore from './Explore';
import Dashboard from './pages/Dashboard';
import 'flowbite';
import { UserProvider } from './Context/UserContext';
import Profile from './pages/Profile';
import PrivateRoute from './Private/PrivateRoute';

function App() {
  return (
    <UserProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/Menus" element={<Menus />} />
          <Route path="/Restaurants" element={<Restaurants />} />
          <Route path="/Restaurants/id" element={<RestaurantProfile />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;
