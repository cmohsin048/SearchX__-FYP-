import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Hunt from './components/Hunt';
import Crawler from './components/Crawler';
import Contactus from './components/Contactus';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setLoggedIn, setLoggedOut } from './Reducer/Authslice';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (loggedIn) {
      dispatch(setLoggedIn());
    } else {
      dispatch(setLoggedOut());

    }
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {
            isLoggedIn ?(
            <>
              <Route path="/Hunt" element={ <Hunt />}/>
              <Route path="/Crawler" element={<Crawler />} />
              
            </>):
            (<Route path='/Login' element={<Login />} />)
          }
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/Contact" element={<Contactus />} />
          <Route path='/Register' element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;