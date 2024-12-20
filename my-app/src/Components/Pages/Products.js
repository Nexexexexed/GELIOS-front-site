import React from 'react'
import {ProdComp} from '../BaseComp/ProdComp'
import {Routes, Route} from "react-router-dom";
import img1 from '../../images/prod_image/1.jpg'
import ico1 from '../../images/auto_prod.svg'

import img2 from '../../images/prod_image/2.jpg'
import ico2 from '../../images/home_prod.svg'

import img3 from '../../images/prod_image/3.jpg'
import ico3 from '../../images/health_prod.svg'

import img4 from '../../images/prod_image/4.jpg'
import ico4 from '../../images/complex_prod.svg'


import {Accident} from "../Pages/Accident";
import {Allforbuisness} from "../Pages/Allforbuisness";
import {Allforyou} from "../Pages/Allforyou";
import {Anticlimax} from "../Pages/Anticlimax";
import {Doctor} from "../Pages/Doctor";
import {HomeHouse} from "../Pages/HomeHouse";
import {KASKO} from "../Pages/KASKO";
import {Mortgage} from "../Pages/Mortgage";
import {OSAGO} from "../Pages/OSAGO";
import {Sportsman} from "../Pages/Sportsman";
import {Touristic} from "../Pages/Touristic";
import {Authorize} from "../Pages/Authorize";


const Products = () => {
    const first = new Map([["КАСКО","/kasko"],["ОСАГО","/osago"]])
    const second = new Map([["Ипотека","/mortgage"],["Квартира и дом","/homeHouse"]])
    const thirth = new Map([["Спортсменам","/sportsman"],["Несчастный случай","/accident"],["Путешествия","/touristic"],["Антиклещ","/anticlimax"]])
    const fourth = new Map([["Все для вас","/allforyou"],["Все для бизнеса","/allforbuisness"]])

    return (
        <>
        <div className='back-for-header'></div>
        <main className='page-content'>
            <div className='wrapper-kasko'>
                <div className='vpk-content'>
                <h3>Страховые Продукты</h3>
                <div className='vpk-more'>
                    <ProdComp 
                        imageURL={img1} 
                        image_ico={ico1} 
                        type="АВТО" 
                        text="Мы знаем, что автомобиль для Вас – это не просто средство передвижения, но и друг, который вызывает самые теплые чувства. Именно поэтому мы готовы предоставить страховые продукты, которые помогут Вам сохранить эти чувства на долгие годы."
                        map={first}
                        reverse={false}
                    />
                    <ProdComp 
                        imageURL={img2} 
                        image_ico={ico2} 
                        type="Имущество" 
                        text="Возвращаясь в квартиру, дом или на дачу, каждый желает оказаться в той атмосфере, которую он создавал годами. Мы готовы предложить страховые продукты, которые защитят Ваше имущество от любой неприятности."
                        map={second}
                        reverse={true}
                    />
                    <ProdComp 
                        imageURL={img3} 
                        image_ico={ico3} 
                        type="АВТО" 
                        text="Мы знаем, что автомобиль для Вас – это не просто средство передвижения, но и друг, который вызывает самые теплые чувства. Именно поэтому мы готовы предоставить страховые продукты, которые помогут Вам сохранить эти чувства на долгие годы."
                        map={thirth}
                        reverse={false}
                    />
                    <ProdComp 
                        imageURL={img4} 
                        image_ico={ico4} 
                        type="АВТО" 
                        text="Мы знаем, что автомобиль для Вас – это не просто средство передвижения, но и друг, который вызывает самые теплые чувства. Именно поэтому мы готовы предоставить страховые продукты, которые помогут Вам сохранить эти чувства на долгие годы."
                        map={fourth}
                        reverse={true}
                    />
                </div>
                </div>
            </div>
        </main>
        <Routes>
            <Route path='/accident' element={<Accident />} />
            <Route path='/allforbuisness' element={<Allforbuisness />} />
            <Route path='/allforyou' element={<Allforyou />} />
            <Route path='/anticlimax' element={<Anticlimax />} />
            <Route path='/doctor' element={<Doctor />} />
            <Route path='/homeHouse' element={<HomeHouse />} />
            <Route path='/kasko' element={<KASKO />} />
            <Route path='/mortgage' element={<Mortgage />} />
            <Route path='/osago' element={<OSAGO />} />
            <Route path='/products' element={<Products />} />
            <Route path='/sportsman' element={<Sportsman />} />
            <Route path='/touristic' element={<Touristic />} />
            <Route path='/authorize' element={<Authorize/>} />
        </Routes>
        </>
    )
}

export {Products}
