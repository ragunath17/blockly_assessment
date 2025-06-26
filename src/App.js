import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AppNavbar from './components/Navbar'
import About from './components/About'
import PortfolioProvider from './context/PortfolioProvider';
import './App.css';

const App = () => (

  <PortfolioProvider>
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </PortfolioProvider>

)

export default App;
