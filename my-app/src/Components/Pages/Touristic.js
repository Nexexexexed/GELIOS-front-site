import React from 'react'
import Shapka from '../BaseComp/Shapkaeverysite'
import imageURL1 from '../../images/image_for_head_sites/TOURIST1.jpg'
import imageURL2 from '../../images/image_for_head_sites/TOURIST2.jpg'
import imageURL3 from '../../images/image_for_head_sites/TOURIST3.jpg'
import ButtonCart from '../BaseComp/ButtonCart'
import Block from '../BaseComp/BlockInfo'
import './Doctor.css'


import airplane from '../../images/ico-tourist/airplane.svg'
import bagage from '../../images/ico-tourist/bagage.svg'
import china from '../../images/ico-tourist/china.svg'
import doctor from '../../images/ico-tourist/doctor.svg'
import family from '../../images/ico-tourist/family.svg'
import telephone from '../../images/ico-tourist/telephone.svg'

const Touristic = () => {
    return (
        <>
        <div className='back-for-header'></div>
        <div className='page-content'>
            <div className='wrapper-sport'>
                <Shapka imageURL1={imageURL1} imageURL2={imageURL2} imageURL3={imageURL3} info="Путешествия"/>
                <div className='vpk-content'>
                    <h3>Путешествуй без забот. По России и по всему миру</h3>
                    <div className='vpk-more'>
                        <p className='vpk-more-text'>
                        Защита от разных рисков, связанных с поездками, начиная с затрат на лечение и заканчивая отменой поездки. 
                        <br/>
                        </p>
                        <div className='vpk_includes'>
                          <Block image={china} header="Лучший сервис" 
                          text="на азиатском направлении" 
                          price=""/>
                          <Block image={family} header="Широкое базовое покрытие" 
                          text="(включены эвакуация детей и стоматология)" 
                          price=""/>
                          <Block image={doctor} header="Расширенная медицинская страховка" 
                          text="для путешествий по России" 
                          price=""/>
                          <Block image={telephone} header="Включена телемедицина" 
                          text="дистанционные консультации с врачами по видеосвязи, в чате или по мобильному телефону" 
                          price=""/>
                          <Block image={bagage} header="Дополнительно можно застраховать" 
                          text="риск потери багажа" 
                          price=""/>
                          <Block image={airplane} header="Дополнительно можно застраховать" 
                          text="риск отмены рейса" 
                          price=""/>
                        </div>
                    </div>
                    <ButtonCart name="touristq" text="Добавить Туристическое страхование в корзину"/>
                </div>
            </div>
        </div>
        </>
      )
}

export {Touristic}
