import React from 'react'
import Shapka from '../BaseComp/Shapkaeverysite'
import ButtonCart from '../BaseComp/ButtonCart'
import Block from '../BaseComp/BlockInfo'

import imageURL1 from '../../images/image_for_head_sites/ANTICLIMAX1.jpg'
import imageURL2 from '../../images/image_for_head_sites/ANTICLIMAX2.jpg'
import imageURL3 from '../../images/image_for_head_sites/ANTICLIMAX3.jpg'


import climax from '../../images/anticlimax-ico/climax.svg'
import cross from '../../images/anticlimax-ico/cross.svg'
import inject from '../../images/anticlimax-ico/inject.svg'
import pc from '../../images/anticlimax-ico/pc.svg'
import scope from '../../images/anticlimax-ico/scope.svg'

const Anticlimax = () => {
    return (
        <>
        <div className='back-for-header'></div>
        <div className='page-content'>
            <div className='wrapper-sport'>
                <Shapka imageURL1={imageURL1} imageURL2={imageURL2} imageURL3={imageURL3} info="Антиклещ"/>
                <div className='vpk-content'>
                    <h3>Защита от расходов на медицинские услуги при укусе клеща</h3>
                    <div className='vpk-more'>
                        <p className='vpk-more-text'>
                        Защита от непредвиденных расходов на медицинские услуги при укусах клещей.
                        <br/>
                        </p>
                        <div className='vpk_includes'>
                          <Block image={climax} header="Без ограничений по количеству клещей" 
                          text="сдаваемых на анализ" 
                          price=""/>
                          <Block image={cross} header="Иммуноглобулин без ограничений" 
                          text="по количеству применения*" 
                          price=""/>
                          <Block image={inject} header="Введение иммуноглобулина в качестве профилактики заражения" 
                          text="даже если нет возможности предварительно исследовать клеща" 
                          price=""/>
                          <Block image={pc} header="Расширенная сеть клиник" 
                          text="во всех эндемичных районах" 
                          price=""/>
                          <Block image={scope} header="Полисом покрываются самые распространенные инфекции" 
                          text="передающиеся с укусом клеща" 
                          price=""/>
                        </div>
                    </div>
                    <ButtonCart name="anticlimax" text="Добавить 'Антиклещ' в корзину"/>
                </div>
            </div>
        </div>
        </>
      )
}

export {Anticlimax}
