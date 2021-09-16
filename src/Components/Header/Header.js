import React from 'react';
import kroha from '../images/kroha.png'
import bag from '../images/bag.png'
import './Header.css'
import {NavLink} from 'react-router-dom'



const Header = () => {
    return (
        <>
        <div className='main-header'>
            <div className='header'>
                <NavLink exact to='/oplata'><p>Оплата и доставка</p></NavLink>
                <NavLink exact to='/otzyv'><p>Отзывы</p></NavLink>
                <NavLink exact to='/'><img className='kroha' src={kroha}/></NavLink>
            </div>
            <div className='bagDiv'>
                <NavLink exact to='/bag'><img className='bag' src={bag}/></NavLink>
            </div>
        </div>
        </>
    );
};

export default Header;