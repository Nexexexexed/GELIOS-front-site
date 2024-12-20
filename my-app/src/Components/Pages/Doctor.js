import React from 'react'
import Shapka from '../BaseComp/Shapkaeverysite'
import imageURL1 from '../../images/image_for_head_sites/DOCTOR1.jpg'
import imageURL2 from '../../images/image_for_head_sites/DOCTOR2.jpg'
import imageURL3 from '../../images/image_for_head_sites/DOCTOR3.png'
import ButtonCart from '../BaseComp/ButtonCart'
import Block from '../BaseComp/BlockInfo'
import './Doctor.css'

import cross from '../../images/ico-doctor/cross.svg'
import micro from '../../images/ico-doctor/micro.svg'
import scope from '../../images/ico-doctor/scope.svg'
import telephone from '../../images/ico-doctor/telephone.svg'
import text from '../../images/ico-doctor/text.svg'
import time from '../../images/ico-doctor/time.svg'


const Doctor = () => {
  return (
    <>
    <div className='back-for-header'></div>
    <div className='page-content'>
        <div className='wrapper-sport'>
            <Shapka imageURL1={imageURL1} imageURL2={imageURL2} imageURL3={imageURL3} info="Доктор на связи"/>
            <div className='vpk-content'>
                <h3>Поговорите с врачом, не выходя из дома</h3>
                <div className='vpk-more'>
                    <p className='vpk-more-text'>
                    Наш полис поможет вам получить квалифицированную медицинскую помощь днем и ночью, без выходных, на даче или в отпуске!
                    <br/>
                    </p>
                    <div className='vpk_includes'>
                      <Block image={time} header="Получайте дистанционные консультации" 
                      text="в любое удобное для вас время" 
                      price=""/>
                      <Block image={text} header="Прикладывайте любые документы" 
                      text="которые помогут специалисту  проконсультировать вас" 
                      price=""/>
                      <Block image={cross} header="Получайте второе медицинское мнение" 
                      text="от специалистов лучших клиник Москвы" 
                      price=""/>
                      <Block image={micro} header="Получайте расшифровку" 
                      text="результатов анализов, снимков, рецептов" 
                      price=""/>
                      <Block image={scope} header="Получайте консультацию профильного специалиста" 
                      text="наши профильные специалисты уже ждут вас" 
                      price=""/>
                      <Block image={telephone} header="Общайтесь с нашими специалистами" 
                      text="любым удобным для вас способом" 
                      price=""/>
                    </div>
                </div>
                <ButtonCart name="doctorq" text="Добавить 'Доктор на связи' в корзину"/>
            </div>
        </div>
    </div>
    </>
  )
}

export  {Doctor}
