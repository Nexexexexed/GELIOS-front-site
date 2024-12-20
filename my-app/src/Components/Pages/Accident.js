import './Accident.css'
import React from 'react'
import Shapka from '../BaseComp/Shapkaeverysite'
import BlockWrap from '../BaseComp/BlockWrap'
import imageURL1 from '../../images/image_for_head_sites/ACCIDENT1.jpg'
import imageURL2 from '../../images/image_for_head_sites/ACCIDENT2.jpeg'
import imageURL3 from '../../images/image_for_head_sites/ACCIDENT3.png'
import ButtonCart from '../BaseComp/ButtonCart'

const Accident = () => {
  return (
    <>
    <div className='back-for-header'></div>
    <div className='page-content'>
        <div className='wrapper-accident'>
          <Shapka imageURL1={imageURL1} imageURL2={imageURL2} imageURL3={imageURL3} info="Страхование от несчастных случаев"  />
          <div className='vpk-content'>
            <h3>Страхование от несчастных случаев</h3>
            <div className='vpk-more'>
                <p className='vpk-more-text'>
                Ежедневно мы и наши дети подвержены опасности - на улице, на работе, на детской площадке, в детском лагере и даже дома. Последствия несчастного случая негативно сказываются в том числе и на семейном бюджете.
                <br/>
                <br/>
                Страхование от несчастных случаев обеспечит финансовую защиту вам и вашей семье. Оформите страховку онлайн, не выходя из дома.
                </p>
                <div className='wrap-info-more'>
                    <BlockWrap text="Вся семья в одном полисе. До 10 человек"/>
                    <BlockWrap text="Надёжная защита от последствий несчастного случая"/>
                    <BlockWrap text="Нужен только паспорт или свидетельство о рождении"/>
                    <BlockWrap text="Подходит для детского лагеря"/>
                    <BlockWrap text="Не нужно проходить медицинский осмотр"/>
                    <BlockWrap text="Выплата в зависимости от тяжести травм до 300 000 ₽"/>
                    <BlockWrap text="Действует круглосуточно 24/7"/>
                    <BlockWrap text="Для взрослых и детей от 1 года до 65 лет"/>
                    <BlockWrap text="Быстрое оформление"/>
                </div>
            </div>
            <ButtonCart name="accidentq" text="Добавить Страхование от несчастного случая в корзину"/>
          </div>
        </div>
    </div>
    </>
  )
}

export {Accident}
