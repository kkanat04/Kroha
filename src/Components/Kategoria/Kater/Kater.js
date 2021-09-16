import React from 'react';
import './Kater.css'
import { NavLink } from 'react-router-dom';


const Kater = () => {
    return (
        <>
            <div className='kater'>
                <h2>Категории</h2>
                <div className='p-kater'>
                    <NavLink exact to='/f'><p className='kat'>Футболки</p></NavLink>
                    <NavLink exact to='/r'><p className='kat'>Рубашки, блузы</p></NavLink>
                    <NavLink exact to='/p'><p className='kat'>Пллатья</p></NavLink>
                    <NavLink exact to='/y'><p className='kat'>Юбки</p></NavLink>
                    <NavLink exact to='/d'><p className='kat'>Джинсы</p></NavLink>
                    <NavLink exact to='/sh'><p className='kat'>Шорты</p></NavLink>
                    <NavLink exact to='/b'><p className='kat'>Брюки</p></NavLink>
                    <NavLink exact to='/ts'><p className='kat'>Толстовки, cвитеры</p></NavLink>
                    <NavLink exact to='/k'><p className='kat'>Купальники</p></NavLink>
                    <NavLink exact to='/kp'><p className='kat'>Куртки, пальто</p></NavLink>
                </div>

            </div>
        </>
    );
};

export default Kater;