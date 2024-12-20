import React from 'react'
import './Footer.css'

import vk_ico from '../../images/ico-ref/vk_icon.svg'
import tg_ico from '../../images/ico-ref/telegram_icon.svg'
import ok_ico from '../../images/ico-ref/ok-icon.png'
import dzen_ico from '../../images/ico-ref/dzen-icon.png'

const Footer = () => {
  return (
    <footer className='site-footer'>
        <hr className='line'></hr>
        <div className='wrapper-footer'>
            <nav className='footer_nav'>
                <a className='footer-nav-item' href='/aboutus'>Компания</a>
                <a className='footer-nav-item'>Пресс-центр</a>
                <a className='footer-nav-item' href='/document'>Документы</a>
                <a className='footer-nav-item' href='/products'>Виды страховки</a>
                <a className='footer-nav-item' href='/document'>Обратная связь</a>
                <a className='footer-nav-item' href='/contact'>Контакты</a> 
            </nav>
            <div className='footer-copyrighting'>
                <div className='copyrighting'>
                    <a className='copyrighting'>Информация для получателей страховых услуг</a>
                </div>
                <div className='copyrighting'>© ООО Страховая Компания «Гелиос»</div>
                <div className='copyrighting'>
                    <a className='soc_ico'><img src={vk_ico}></img></a>
                    <a className='soc_ico'><img src={tg_ico}></img></a>
                    <a className='soc_ico'><img src={ok_ico}></img></a>
                    <a className='soc_ico'><img src={dzen_ico}></img></a>
                </div>
            </div>
            <div className='footer-extra'>
                <div className='footer-extra-docs'>
                    <a className='footer-extra-link'>Реквизиты</a>
                    <a className='footer-extra-link' href='https://skgelios.ru/files/polit.pdf'>Политика конфиденциальности</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
