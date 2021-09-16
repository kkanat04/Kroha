import React from 'react';
import Kater from '../Kater/Kater';
import './Tesh.css'
import block from '../../images/block.jpg'
import block2 from '../../images/yarkaya.jpg'
import block3 from '../../images/platye.jpg'
import block4 from '../../images/uzor.jpg'

const Tesh = () => {
    return (
        <div className='tesh'>
        <Kater />
            
        <div className='stock-tesh'>
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
                            <button className='btn1'>Смотреть</button>
                            <button className='btn2'>В корзину</button>
                        </div>
                    </div>

                    <div className='block'>
                        <img className='girl' src={block2} />
                        <p className='title'>Яркая куртка</p>
                        <div className='sum'>
                            <p className='initSum'>999 ₽ </p>
                            {/* <p className=' finSum'>719 ₽</p> */}
                        </div>
                        <div className='button'>
                            <button className='btn1'>Смотреть</button>
                            <button className='btn2'>В корзину</button>
                        </div>
                    </div>

                    <div className='block'>
                        <img className='girl' src={block3} />
                        <p className='title'>Платье с длинным рукавом</p>
                        <div className='sum'>
                            <p className='initSum'>699 ₽ </p>
                            <p className=' finSum'>839 ₽</p>
                        </div>
                        <div className='button'>
                            <button className='btn1'>Смотреть</button>
                            <button className='btn2'>В корзину</button>
                        </div>
                    </div>

                    <div className='block'>
                        <img className='girl' src={block4} />
                        <p className='title'>Платье с цветочным узором</p>
                        <div className='sum'>
                            <p className='initSum'>899 ₽ </p>
                            {/* <p className=' finSum'>719 ₽</p> */}
                        </div>
                        <div className='button'>
                            <button className='btn1'>Смотреть</button>
                            <button className='btn2'>В корзину</button>
                        </div>
                    </div>

                    <div className='block'>
                        <img className='girl' src={block4} />
                        <p className='title'>Платье с цветочным узором</p>
                        <div className='sum'>
                            <p className='initSum'>899 ₽ </p>
                            {/* <p className=' finSum'>719 ₽</p> */}
                        </div>
                        <div className='button'>
                            <button className='btn1'>Смотреть</button>
                            <button className='btn2'>В корзину</button>
                        </div>
                    </div>
                    <div className='block'>
                        <img className='girl' src={block3} />
                        <p className='title'>Платье с длинным рукавом</p>
                        <div className='sum'>
                            <p className='initSum'>699 ₽ </p>
                            <p className=' finSum'>839 ₽</p>
                        </div>
                        <div className='button'>
                            <button className='btn1'>Смотреть</button>
                            <button className='btn2'>В корзину</button>
                        </div>
                    </div>
                    <div className='block'>
                        <img className='girl' src={block2} />
                        <p className='title'>Яркая куртка</p>
                        <div className='sum'>
                            <p className='initSum'>999 ₽ </p>
                            {/* <p className=' finSum'>719 ₽</p> */}
                        </div>
                        <div className='button'>
                            <button className='btn1'>Смотреть</button>
                            <button className='btn2'>В корзину</button>
                        </div>
                    </div>
                    <div className='block'>
                        <img className='girl' src={block} />
                        <p className='title'>Kостюм для девочки</p>
                        <div className='sum'>
                            <p className='initSum'>599 ₽ </p>
                            <p className=' finSum'>719 ₽</p>
                        </div>
                        <div className='button'>
                            <button className='btn1'>Смотреть</button>
                            <button className='btn2'>В корзину</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Tesh;