import React, { useState } from 'react';
import './Home.css'
import home from '../images/home.png'
import block from '../images/block.jpg'
import block2 from '../images/yarkaya.jpg'
import block3 from '../images/platye.jpg'
import block4 from '../images/uzor.jpg'
import { NavLink } from 'react-router-dom';



const Header = () => {

    const [name, setName]=useState(false)
    const [data, setData]=useState(false)
    const [user, setUser]=useState(false)
    const [admin, setAdmin]=useState(false)

    

    return (
        <>

            <div className='main-home'>
                <div className='menu'>
                    <NavLink exact to='/kater'><p className='a'>Одежда</p></NavLink>
                    <p>Обувь</p>
                    <p>Аксессуары</p>
                    <p>Скидки</p>
                </div>
                <div className='homeImg'>
                    <img src={home} />
                </div>

            </div>

            <div className='stock'>
                <h3 className='h3'>Акции</h3>
                <div className='border'>
                    <div className='block'>
                        <img className='girl' src={block} />
                        <p className='title'>Kостюм для девочки</p>
                        <div className='sum'>
                            <p className='initSum'>599 ₽ </p>
                            <p className=' finSum'>719 ₽</p>
                        </div>
                        <div className='button'>
                            <button onClick={() => setName(true)} className='btn1'>Смотреть</button>
                            <button className='btn2'>В корзину</button>
                        </div>
                    </div>
                    {
                        name == true ? <div onClick={() => setName(false)} className='modal'>X</div> : null
                    }

                    <div className='block'>
                        <img className='girl' src={block2} />
                        <p className='title'>Яркая куртка</p>
                        <div className='sum'>
                            <p className='initSum'>999 ₽ </p>
                            {/* <p className=' finSum'>719 ₽</p> */}
                        </div>
                        <div className='button'>
                            <button onClick={() => setData(true)} className='btn1'>Смотреть</button>
                            <button className='btn2'>В корзину</button>
                        </div>
                    </div>
                    {
                        data == true ? <div  onClick={() => setData(false)} className='modal'>X</div> : null
                    }

                    <div className='block'>
                        <img className='girl' src={block3} />
                        <p className='title'>Платье с длинным рукавом</p>
                        <div className='sum'>
                            <p className='initSum'>699 ₽ </p>
                            <p className=' finSum'>839 ₽</p>
                        </div>
                        <div className='button'>
                            <button onClick={() => setUser(true)} className='btn1'>Смотреть</button>
                            <button className='btn2'>В корзину</button>
                        </div>
                    </div>
                    
                    {
                        user == true ? <div  onClick={() => setUser(false)} className='modal'>X</div> : null
                    }


                    <div className='block'>
                        <img className='girl' src={block4} />
                        <p className='title'>Платье с цветочным узором</p>
                        <div className='sum'>
                            <p className='initSum'>899 ₽ </p>
                            {/* <p className=' finSum'>719 ₽</p> */}
                        </div>
                        <div className='button'>
                            <button  onClick={() => setAdmin(true)} className='btn1'>Смотреть</button>
                            <button className='btn2'>В корзину</button>
                        </div>
                    </div>
                    {
                        admin == true ?<div className='modal'><div className='shadow'><p onClick={() => setAdmin(false)}>X</p></div></div> : null
                    }
                </div>
            </div>
        </>
    );
};

export default Header;