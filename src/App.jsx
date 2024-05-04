import './App.css'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header'
import Home from './Home/Home';
import Footer from './Footer/Footer'
import About from './AboutUs/About';

function App() {

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/AboutUs" />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
