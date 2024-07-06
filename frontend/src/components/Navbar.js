
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from '../logo.png';
import { useSelector,useDispatch } from 'react-redux';
import { setLoggedOut } from '../Reducer/Authslice';

import { Link } from 'react-router-dom';

const Navbar = () => {
    const dispatch=useDispatch()
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    // console.log(isLoggedIn)
    const [showmenu, setshowmenu] = useState(false)
    const [coloseMenu, setCloseMenu] = useState(true)
    const toglemenu = () => {
        setshowmenu(!showmenu)
        setCloseMenu(!coloseMenu)
    }
    const logout=()=>{
        dispatch(setLoggedOut())
        localStorage.removeItem('isLoggedIn');
    }
    return (
        <div className='header'>
            <div className='navbar'>
                <div className='logo'>
                    <img src={Logo} alt="logo" />
                </div>
                <div className={`menu ${showmenu ? 'show' : ''}`}>
                    <FontAwesomeIcon className='closemenu' icon={faTimes} onClick={toglemenu} />
                    <nav className='navbar-buttons'>
                        <li><Link className='nav-buttons' to="/">Home</Link></li>
                        <li><Link className='nav-buttons' to={isLoggedIn ? '/Hunt' : '/Login'}>Hunt</Link></li>
                        <li><Link className='nav-buttons' to={isLoggedIn ? '/Crawler' : '/Login'}>Crawler</Link></li>
                        <li><Link className='nav-buttons' to='/Contact'>Contactus</Link></li>
                    </nav>
                    <div className='auth'>
                        {
                            isLoggedIn ? (
                                <Link className='trynow' to="/" onClick={logout}>Logout</Link>
                            ) : (

                                <>
                                    <Link className='login' to="/Login">Login</Link>
                                    <Link className='trynow' to="/Register">Register</Link>

                                </>

                            )
                        }

                    </div>
                </div>

                <div className='hamburger-icon' onClick={toglemenu}>
                    <FontAwesomeIcon icon={faBars} />

                </div>
            </div>
        </div>

    )
}

export default Navbar