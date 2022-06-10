import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div data-theme={`${localStorage.getItem('theme')}`}>
      <Navbar />
      <ToastContainer />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
