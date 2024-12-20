import React from 'react'
import Shapka from '../BaseComp/Shapkaeverysite'
import './KASKO.css'
import image1 from '../../images/image_for_head_sites/KASKO1.jpg'
import image2 from '../../images/image_for_head_sites/KASKO2.jpg'
import image3 from '../../images/image_for_head_sites/KASKO3.jpg'
import kas1 from '../../images/KASKO_1.svg'
import kas2 from '../../images/KASKO_2.svg'
import ButtonCart from '../BaseComp/ButtonCart'

const KASKO = () => {
  return (
    <>
    <div className='back-for-header'></div>
    <main className='page-content'>
      
      <div className='wrapper-kasko'>
        <Shapka imageURL1={image1} imageURL2={image2} imageURL3={image3} name="КАСКО" info="Профессиональная защита вашего автомобиля"/>
        <div className='vpk-content'>
          <h3>Выбирай надёжную компанию</h3>
          <div className='vpk-more'>
            <p className='vpk-more-text'>
            КАСКО – это вид добровольного страхования, по которому Страховая Компания «Гелиос» возмещает ущерб в случае возникновения непредвиденных ситуаций с транспортным средством. 
            <br/>
            <br/>
            Полис КАСКО «Гелиос» позволит отремонтировать машину или получить компенсацию в случае ее полной гибели, угона.
            <br/>
            <br/>
            Устали от поиска подходящей вам программы страхования? Хотите надёжно защитить ваш автомобиль? Обращайтесь в «Гелиос». Решение ваших проблем здесь!
            </p>
          </div>
          <div className='vpk-inculdes'>
            <h3>Преимущества КАСКО "Гелиос"</h3>
            <div className='vpk-grid'>
              <div className='vpk-grid-item'>
                <div className='benefit-header'>
                  <div className='benefit-header-icon'>
                    <img src={kas2} height="44px" alt=""></img>
                  </div>
                  <div className='benefit-header-text'>Скидка до 15% при переходе из другой компании</div>
                </div>
                <div className='benefit-main'>
                  <div className='benefit-main-previw'>
                    Условия перехода:
                    <br/>
                    <ul>
                      <li>максимальный возраст авто 5 лет;</li>
                      <li>предыдущий полис должен быть оформлен на 1 год;</li>
                      <li>максимальная страховая сумма 6 млн рублей;</li>
                      <li>перевести договор страхования можно в первые 15 дней от начала срока, либо за 30 дней до окончания срока действия текущего договора.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='vpk-grid-item'>
                <div className='benefit-header'>
                  <div className='benefit-header-icon'>
                    <img src={kas1} height="44px" alt=""></img>
                  </div>
                  <div className='benefit-header-text'>Дополнительные выгоды</div>
                </div>
                <div className='benefit-main'>
                <div className='benefit-main-previw'>
                    <br/>
                    <ul>
                      <li>Выплаты без справок по стеклам и деталям кузова.</li>
                      <li>Возможность оплаты страхового полиса в рассрочку.</li>
                      <li>Круглосуточная поддержка клиентов по телефону.</li>
                      <li>Эвакуация автомобиля с места ДТП, транспортировка на станцию ремонта.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ButtonCart name="kaskoq" text="Добавить ОСАГО в корзину"/>
          </div>
        </div>
    </main>
    </>
  )
}

export {KASKO}
