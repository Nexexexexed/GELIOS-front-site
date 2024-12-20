import React from 'react'
import Shapka from '../BaseComp/Shapkaeverysite'
import ButtonCart from '../BaseComp/ButtonCart'
import Block from '../BaseComp/BlockInfo'

import imageURL1 from '../../images/image_for_head_sites/AFB1.jpg'
import imageURL2 from '../../images/image_for_head_sites/AFB2.jpg'
import imageURL3 from '../../images/image_for_head_sites/AFB3.jpg'

import man from '../../images/ico-allforyou/man.svg'
import men from '../../images/ico-allforyou/men.svg'
import home from '../../images/ico-allforyou/home.svg'



const Allforbuisness = () => {
    return (
        <>
        <div className='back-for-header'></div>
        <div className='page-content'>
            <div className='wrapper-sport'>
                <Shapka imageURL1={imageURL1} imageURL2={imageURL2} imageURL3={imageURL3} info="Всё для бизнеса"/>
                <div className='vpk-content'>
                    <h3>Комплексная программа страхования, которая обеспечит защиту вашего бизнеса от основных рисков.</h3>
                    <div className='vpk-more'>
                        <div className='vpk_includes'>
                          <Block image={man} header="СТРАХОВАНИЕ ОТ НЕСЧАСТНЫХ СЛУЧАЕВ" 
                          text="Смерть или постоянная утрата трудоспособности / инвалидность (1,2 группы) в результате несчастного случая" 
                          price=""/>
                          <Block image={men} header="СТРАХОВАНИЕ ГРАЖДАНСКОЙ ОТВЕТСТВЕННОСТИ" 
                          text="Причинение вреда жизни, здоровью или имуществу третьих лиц при эксплуатации жилья" 
                          price=""/>
                          <Block image={home} header="СТРАХОВАНИЕ ИМУЩЕСТВА" 
                          text="Пожар, удар молнии, взрыв, падение инородных предметов, стихийные бедствия, воздействие воды, противоправные действия третьих лиц" 
                          price=""/>
                        </div>
                    </div>
                    <ButtonCart name="allforbuizq" text="Добавить 'Защита бизнеса' в корзину"/>
                </div>
            </div>
        </div>
        </>
      )
}

export {Allforbuisness}
