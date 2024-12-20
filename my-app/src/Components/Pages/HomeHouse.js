import React from 'react'
import Shapka from '../BaseComp/Shapkaeverysite'
import ButtonCart from '../BaseComp/ButtonCart'
import Block from '../BaseComp/BlockInfo'

import imageURL1 from '../../images/image_for_head_sites/HH1.jpg'
import imageURL2 from '../../images/image_for_head_sites/HH2.jpg'
import imageURL3 from '../../images/image_for_head_sites/HH3.jpg'


import block from '../../images/ico-home/block.svg'
import men from '../../images/ico-home/men.svg'
import sofa from '../../images/ico-home/sofa.svg'

const HomeHouse = () => {
  return (
    <>
    <div className='back-for-header'></div>
    <div className='page-content'>
        <div className='wrapper-sport'>
            <Shapka imageURL1={imageURL1} imageURL2={imageURL2} imageURL3={imageURL3} info="Квартира и дом"/>
            <div className='vpk-content'>
                <h3>Защита от пожара, затопления, кражи и повреждения имущества</h3>
                <div className='vpk-more'>
                    <p className='vpk-more-text'>
                    Вы можете выбрать готовое решение для страхования своей квартиры/дома или составить эксклюзивную страховую программу, которая будет учитывать индивидуальные особенности вашего дома или квартиры и включить в себя только актуальные и специальные риски.
                    <br/>
                    </p>
                    <div className='vpk_includes'>
                      <Block image={men} header="Гражданская ответственность" 
                      text="Причинение вреда имуществу и здоровью соседей от затопления или пожара в вашей квартире." 
                      price=""/>
                      <Block image={block} header="Конструктивные элементы" 
                      text="Стены, перекрытия, полы и потолки и другие элементы, которые формируют конструкцию помещения." 
                      price=""/>
                      <Block image={sofa} header="Движимое имущество и ремонт" 
                      text="Предметы домашнего обихода и обстановки. Все виды внутренней отделки и сантехнического, водонагревательного оборудования." 
                      price=""/>
                    </div>
                </div>
                <ButtonCart name="homehouseq" text="Добавить 'Защита жилья' в корзину"/>
            </div>
        </div>
    </div>
    </>
  )
}

export  {HomeHouse}
