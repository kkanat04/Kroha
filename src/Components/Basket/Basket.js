import React from 'react';
import basket from '../images/basket.png'
import './Basket.css'

const Basket = () => {
    return (
        <>
        <div className='basket-wrapp'>
            <div className='mainBasket'>
                <div className='basket'>
                    <h3 className='tittleH3'>Корзина заказа</h3>
                    <div className='basketDiv'>
                        <img className='basaketImg' src={basket}/>
                        <div className='basketText'>
                            <p>Платье для девочки</p>
                            <div className='summa'>
                                <p className='initSumma'>599 ₽ </p>
                                <p className=' finSumma'>719 ₽</p>
                            </div>
                            <p>Вес посылки: 400 г.</p>
                        </div>
                        <input className='inputNumber' placeholder='1' type='number'/>
                    </div>

                    <div className='basketDiv'>
                        <img className='basaketImg' src={basket}/>
                        <div className='basketText'>
                            <p>Платье для девочки</p>
                            <div className='summa'>
                                <p className='initSumma'>599 ₽ </p>
                                <p className=' finSumma'>719 ₽</p>
                            </div>
                            <p>Вес посылки: 400 г.</p>
                        </div>
                        <input className='inputNumber' placeholder='1' type='number'/>
                    </div>

                    <div className='basketDiv'>
                        <img className='basaketImg' src={basket}/>
                        <div className='basketText'>
                            <p>Платье для девочки</p>
                            <div className='summa'>
                                <p className='initSumma'>599 ₽ </p>
                                <p className=' finSumma'>719 ₽</p>
                            </div>
                            <p>Вес посылки: 400 г.</p>
                        </div>
                        <input className='inputNumber' placeholder='1' type='number'/>
                    </div>
                </div>
                    
                <div className='basket2'>
                    <p className='summaT'>Итого: 1797 ₽</p>
                    <p className='count'>3 товара <br/> <br/>
                    Сумма скидки: 360 ₽</p>
                    <div className='order-btn'><button className='order'>Оформить заказ</button></div>
                </div>
            </div>
            <div>
            <div className='oforml-border'>
                 <div className='oformleniye'>
                    <h2>Оформление заказа</h2>
                <input className='inp' type='text' placeholder='Имя'/>
                <input className='inp' type='text' placeholder='Телефон'/>
                <input className='inp' type='text' placeholder='Город'/>
                <input className='inp' type='text' placeholder='Адрес'/>
                </div>
                <div className='poluchit'>
                    <p className='sposob'>Способ получения:</p>
                    <div className='inp1'>
                        <input name='checkb' className='check' type="radio"/>
                        <p>Доставка</p>
                    </div>
                    <div className='inp2'>
                        <input name='checkb' className='check' type="radio"/>
                        <p className='zakazat'>Забрать в магазине</p>
                    </div>
                </div>
            </div>
            <div className='sumBas'>
                <div>
                    <p className='obshSum' >Сумма заказа: 1797 ₽</p>
                    
                    <p className='dostavka' >Доставка: 500 ₽</p>
                    <h4>Итого: 2297 ₽</h4>
                </div>
                <div className='sunBasBtn'>   
                    <button className='pokupki'>Продолжить <br/> покупки</button>
                    <button className='zakaz'>Заказать</button></div>
            </div>
</div>
        </div>
        
       
        </>
    );
};

export default Basket;