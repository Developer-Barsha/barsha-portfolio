import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import PortfolioDetail from './Components/PortfolioDetail/PortfolioDetail';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  return (
    <div className='App' data-theme={theme}>
      <ToastContainer />
      <Navbar setTheme={setTheme} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project/:id' element={<PortfolioDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
