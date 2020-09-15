import React from 'react';
import logo from '../../img/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className = 'header'>
            <img src={logo} alt=""/>
            <nav>
                <a href="/courses">Courses</a>
                <a href="/reviews">Reviews</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;