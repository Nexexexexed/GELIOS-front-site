import React from 'react'
import imageURL1 from '../../images/image_for_head_sites/SPORT1.jpg'
import imageURL2 from '../../images/image_for_head_sites/SPORT2.jpg'
import imageURL3 from '../../images/image_for_head_sites/SPORT3.jpg'
import Shapka from '../BaseComp/Shapkaeverysite'
import BlockWrap  from '../BaseComp/BlockWrap'
import './Sportsman.css'
import ButtonCart from '../BaseComp/ButtonCart'

const Sportsman = () => {
  return (
    <>
    <div className='back-for-header'></div>
    <div className='page-content'>
        <div className='wrapper-sport'>
            <Shapka imageURL1={imageURL1} imageURL2={imageURL2} imageURL3={imageURL3} info="Страхование спортсменов"/>
            <div className='vpk-content'>
                <h3>Страхование спортсменов от несчастного случая</h3>
                <div className='vpk-more'>
                    <p className='vpk-more-text'>
                    Занятия спортом тесно связаны с риском получить травму. Все, кто занимается спортом на любительском уровне подвергают себя опасности.
                    <br/>
                    <br/>
                    Спортивное страхование гарантирует спортсмену обеспечение финансовой защитой при получении травмы на тренировке или соревнованиях. Это позволит получить качественную медицинскую помощь, реабилитацию и вернуться к любимому занятию.
                    </p>
                    <div className='wrap-info-more'>
                        <BlockWrap text="Надёжная защита от последствий несчастного случая"/>
                        <BlockWrap text="Для взрослых и детей от 1 года до 65 лет"/>
                        <BlockWrap text="Оформление полиса за 3 минуты"/>
                        <BlockWrap text="Действует 24/7 вне зависимости от занятий спортом"/>
                        <BlockWrap text="До 5 видов спорта в одном полисе"/>
                        <BlockWrap text="Нужен только паспорт или свидетельство о рождении"/>
                        <BlockWrap text="Не нужно проходить медицинский осмотр"/>
                        <BlockWrap text="До 10 застрахованных в одном полисе"/>
                        <BlockWrap text="Выплата в зависимости от тяжести травм до 300 000 ₽"/>
                    </div>
                </div>
                <ButtonCart name="sportsmanq" text="Добавить Спортивное страхование в корзину"/>
            </div>
        </div>
    </div>
    </>
  )
}

export  {Sportsman}
