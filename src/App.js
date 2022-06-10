import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  return (
    <div id='app' data-theme={theme}>
      <Navbar setTheme={setTheme} />
      <ToastContainer />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
