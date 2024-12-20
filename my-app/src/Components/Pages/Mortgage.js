import React from 'react'
import Shapka from '../BaseComp/Shapkaeverysite'
import ButtonCart from '../BaseComp/ButtonCart'
import Block from '../BaseComp/BlockInfo'

import imageURL1 from '../../images/image_for_head_sites/MORT1.jpg'
import imageURL2 from '../../images/image_for_head_sites/MORT2.jpeg'
import imageURL3 from '../../images/image_for_head_sites/MORT3.jpg'

import cross from '../../images/ico-mort/cross.svg'
import home from '../../images/ico-mort/home.svg'
import stena from '../../images/ico-mort/stena.svg'

const Mortgage = () => {
    return (
        <>
        <div className='back-for-header'></div>
        <div className='page-content'>
            <div className='wrapper-sport'>
                <Shapka imageURL1={imageURL1} imageURL2={imageURL2} imageURL3={imageURL3} info="Ипотека"/>
                <div className='vpk-content'>
                    <h3>Комплексная защита при покупке недвижимости в ипотеку</h3>
                    <div className='vpk-more'>
                        <p className='vpk-more-text'>
                        При заключении договора с кредитной организацией одним из обязательных пунктов является предоставление страхового полиса. Обычно он нужен на момент перевода или выдачи кредитных денежных средств. Уточните у банка требования к страховому покрытию и позвоните нам, чтобы сделать расчет стоимости и договориться об удобном времени доставки полиса.
                        <br/>
                        </p>
                        <div className='vpk_includes'>
                          <Block image={stena} header="Конструктивные элементы" 
                          text="" 
                          price=""/>
                          <Block image={cross} header="Жизнь и здоровье заемщика" 
                          text="" 
                          price=""/>
                          <Block image={home} header="Риск потери права собственности" 
                          text="" 
                          price=""/>
                        </div>
                    </div>
                    <ButtonCart name="mortgageq" text="Добавить 'Защита Ипотеки' в корзину"/>
                </div>
            </div>
        </div>
        </>
      )
}

export {Mortgage}
