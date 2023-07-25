import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import dunia from '../assets/dunia.png'

const Navbar = () => {
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const Logout = async () => {
        try {
            await axios.delete('http://localhost:5000/logout');
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <nav className="navbar is-large is-light" role="navigation" aria-label="main navigation">
            <style>
                {`
          .navbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 999;
          }
        `}
            </style>
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/dashboard">
                        <img src={dunia} alt="Logo" />
                    </a>
                    <div className="navbar-burger" onClick={toggleMenu} style={{ marginLeft: 'auto', zIndex: 10 }}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href='/dashboard'>
                            Home
                        </a>

                        <a className="navbar-item" href='/services'>
                            Services
                        </a>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                More
                            </a>

                            <div className="navbar-dropdown is-right" style={{ zIndex: 9 }}>
                                <a className="navbar-item" href='/about'>
                                    About
                                </a>
                                <a className="navbar-item" href='/jobs'>
                                    Jobs
                                </a>
                                <a className="navbar-item" href='/report'>
                                    Report an issue
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-black" onClick={Logout}>
                                    Logout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Menu
                right
                isOpen={isOpen}
                onStateChange={({ isOpen }) => setIsOpen(isOpen)}
                customBurgerIcon={false}
                styles={{
                    bmBurgerBars: { zIndex: 10 },
                    bmMenuWrap: { zIndex: 9, right: 0, left: 'unset', width: '150px', top: '185px' },
                }}>
                <a className="navbar-item" href='/dashboard' style={{ backgroundColor: '#fff' }}>
                    Home
                </a>

                <a className="navbar-item" href='/services' style={{ backgroundColor: '#fff' }}>
                    Services
                </a>

                <div className="navbar-item has-dropdown is-hoverable" style={{ backgroundColor: '#fff' }}>
                    <a className="navbar-link" style={{ backgroundColor: '#fff' }}>
                        More
                    </a>

                    <div className="navbar-dropdown is-right" style={{ backgroundColor: '#fff' }}>
                        <a className="navbar-item" href='/about' style={{ backgroundColor: '#fff' }}>
                            About
                        </a>
                        <a className="navbar-item" href='/jobs' style={{ backgroundColor: '#fff' }}>
                            Jobs
                        </a>
                        <a className="navbar-item" style={{ backgroundColor: '#fff' }} onClick={Logout}>
                            Logout
                        </a>
                    </div>
                </div>
            </Menu>
        </nav>
    );
}

export default Navbar;