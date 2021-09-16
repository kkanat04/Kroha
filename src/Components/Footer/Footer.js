import React from 'react';
import './Footer.css'
import kroha from '../images/kroha.png'
import inst from '../images/inst.png'


const Footer = () => {
    return (
        <div>
            <footer>
                <img src={kroha} />

                <p className='p'>Руководитель организации: генеральный директор <br />
                    Давыдова Мария Сергеевна. Юридический адрес <br />
                    ПАО "Детский Мир" - 119415, город Москва, проспект <br />
                    Вернадского, 37-3.<br />
                    Организации ПУБЛИЧНОЕ АКЦИОНЕРНОЕ ОБЩЕСТВО <br />
                    "ДЕТСКИЙ МИР" присвоены ИНН 7729355029, <br />
                    ОГРН 1027700047100, ОКПО 47568073. </p>

                    <div className='footer'>
                    <img className='inst' src={inst} />
                    <img className='inst' src={inst} />
                    <img className='inst' src={inst} />

                    </div>
            </footer>
        </div>
    );
};

export default Footer;