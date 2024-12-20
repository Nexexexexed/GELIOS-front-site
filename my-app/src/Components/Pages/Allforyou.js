import React from 'react'
import Shapka from '../BaseComp/Shapkaeverysite'
import ButtonCart from '../BaseComp/ButtonCart'
import Block from '../BaseComp/BlockInfo'

import imageURL1 from '../../images/image_for_head_sites/AFY1.jpg'
import imageURL2 from '../../images/image_for_head_sites/AFY2.jpg'
import imageURL3 from '../../images/image_for_head_sites/AFY3.jpg'

import cross from '../../images/ico-allforyou/cross.svg'
import bagage from '../../images/ico-allforyou/bagage.svg'
import card from '../../images/ico-allforyou/card.svg'
import home from '../../images/ico-allforyou/home.svg'
import house from '../../images/ico-allforyou/house.svg'
import man from '../../images/ico-allforyou/man.svg'
import men from '../../images/ico-allforyou/men.svg'
import sofa from '../../images/ico-allforyou/sofa.svg'


const Allforyou = () => {
    return (
        <>
        <div className='back-for-header'></div>
        <div className='page-content'>
            <div className='wrapper-sport'>
                <Shapka imageURL1={imageURL1} imageURL2={imageURL2} imageURL3={imageURL3} info="Всё под контролем"/>
                <div className='vpk-content'>
                    <h3>Десять в одном.
                    Все, что нужно, в одной коробке.</h3>
                    <div className='vpk-more'>
                        <p className='vpk-more-text'>
                        Комплексная защита на все случаи жизни. С помощью этого продукта вы можете комбинировать риски так, как это нужно вам.
                        <br/>
                        Стоимость – от 2 900 руб.  
                        <br/>
                        </p>
                        <div className='vpk_includes'>
                          <Block image={sofa} header="Движимое имущество" 
                          text="Пожар, удар молнии, взрыв, падение инородных предметов, стихийные бедствия, воздействие воды, противоправные действия третьих лиц" 
                          price=""/>
                          <Block image={man} header="Несчастный случай" 
                          text="Смерть или постоянная утрата трудоспособности / инвалидность (1,2 группы) в результате несчастного случая" 
                          price=""/>
                          <Block image={cross} header="Критические заболевания" 
                          text="Диагностирование смертельно опасного заболевания в соответствии с их перечнем, который находится в правилах страхования" 
                          price=""/>
                          <Block image={home} header="Квартира" 
                          text="Пожар, удар молнии, взрыв, падение инородных предметов, стихийные бедствия, воздействие воды, противоправные действия третьих лиц" 
                          price=""/>
                          <Block image={men} header="Гражданская ответственность" 
                          text="Причинение вреда жизни, здоровью или имуществу третьих лиц при эксплуатации жилья" 
                          price=""/>
                          <Block image={house} header="Дом" 
                          text="Получение компенсации в случае повреждения конструктивных элементов: пола или фундамента, стен, перегородок и перекрытий, окон, дверей, потолков или крыш" 
                          price=""/>
                          <Block image={card} header="Банковская карта" 
                          text="Ограбление при снятии наличных с банковской карты из банкомата" 
                          price=""/>
                          <Block image={bagage} header="Потеря работы" 
                          text="Расходы на поиск работы, составление резюме и на размещение его в базе кадровых агентств, на оплату курсов повышения квалификации" 
                          price=""/>
                        </div>
                    </div>
                    <ButtonCart name="allforyouq" text="Добавить пакет 'Все под контролем' в корзину"/>
                </div>
            </div>
        </div>
        </>
      )
}

export {Allforyou}
