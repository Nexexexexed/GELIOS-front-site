import React from 'react'
import Shapka from '../BaseComp/Shapkaeverysite'
import Block from '../BaseComp/BlockInfo'
import './OSAGO.css'
import image1 from '../../images/image_for_head_sites/OSAGO1.jpg'
import image2 from '../../images/image_for_head_sites/OSAGO2.jpg'
import image3 from '../../images/image_for_head_sites/OSAGO3.jpg'
import krest from '../../images/ico-for-blocks/krest.svg'
import dom from '../../images/ico-for-blocks/dom.svg'
import avto from '../../images/ico-for-blocks/avto.svg'
import ButtonCart from '../BaseComp/ButtonCart'

const OSAGO = () => {
  return (
    <>
    <div className='back-for-header'></div>
    <main className='page-content'>
      <div className='wrapper-kasko'>
        <Shapka imageURL1={image1} imageURL2={image2} imageURL3={image3} name="ОСАГО" info="Надежное страхование автогражданской ответственности!"/>
        <div className='vpk-content'>
          <h3>Подробнее о продукте</h3>
          <div className='vpk-more'>
            <p className='vpk-more-text'>
            Полис ОСАГО — это обязательное страхование автогражданской ответственности за причинение вреда жизни, здоровью и имуществу третьих лиц при эксплуатации автомобиля. 
            <br/>
            <br/>
            Наличие полиса поможет Вам решить конфликтные ситуации, связанные с выплатами компенсаций другим участникам движения, пострадавшим в аварии.
            </p>
            <div className='vpk_includes'>
              <Block image={krest} header="Жизнь и здоровье" 
              text="возмещение вреда, причиненного жизни или здоровью каждого потерпевшего в ДТП, где виновником являетесь вы: водителей, пассажиров, пешеходов." 
              price="возмещается до 500 тысяч рублей"/>
              <Block image={dom} header="Имущество" 
              text="возмещение вреда, причиненного имуществу каждого потерпевшего в ДТП, где виновником являетесь вы." 
              price="возмещается до 400 тысяч рублей"/>
              <Block image={avto} header="Жизнь и здоровье" 
              text="возмещение вреда, причиненного ТС каждого потерпевшего в ДТП, где виновником являетесь вы." 
              price="возмещается до 400 тысяч рублей"/>
            </div>
          </div>
          <ButtonCart name="osagoq" text="Добавить ОСАГО в корзину"/>
        </div>
      </div>
    </main>
    </>
  )
}

export {OSAGO}
