import React from 'react'
import { useState } from 'react';
import {Routes, Route} from "react-router-dom";
import './Home.css'
import download from '../../images/download.svg'

//pages
import {Accident} from "../Pages/Accident";
import {Allforbuisness} from "../Pages/Allforbuisness";
import {Allforyou} from "../Pages/Allforyou";
import {Anticlimax} from "../Pages/Anticlimax";
import {Doctor} from "../Pages/Doctor";
import {HomeHouse} from "../Pages/HomeHouse";
import {KASKO} from "../Pages/KASKO";
import {Mortgage} from "../Pages/Mortgage";
import {OSAGO} from "../Pages/OSAGO";
import {Products} from "../Pages/Products";
import {Sportsman} from "../Pages/Sportsman";
import {Touristic} from "../Pages/Touristic";
import {Authorize} from "../Pages/Authorize";


import Modal from '../BaseComp/InterpreterModal'

const Home = () => {

  const data=[
    { 
      link:'/accident',
      title: "Несчастный случай",
      text: 'Страхование от несчастных случаев'
    },
    {
      link:'/allforbuisness',
      title: "Все для бизнеса",
      text: 'Комплексная программа страхования, которая обеспечит защиту вашего бизнеса от основных рисков.'
    },
    {
      link:'/allforyou',
      title: "Все для вас",
      text: 'Десять в одном.Все, что нужно, в одной коробке.'
    },
    {
      link:'/anticlimax',
      title: "Антиклещ",
      text: 'Антиклещ'
    },
    {
      link:'/homeHouse',
      title: "Квартира и дом",
      text: 'Защита от пожара, затопления, кражи и повреждения имущества'
    },
    {
      link:'/kasko',
      title: "КАСКО",
      text: 'Профессиональная защита вашего автомобиля'
    },
    {
      link:'/mortgage',
      title: "Ипотека",
      text: 'Комплексная защита при покупке недвижимости в ипотеку'
    },
    {
      link:'/osago',
      title: "ОСАГО",
      text: 'Надежное страхование автогражданской ответственности!'
    },
    {
      link:'/products',
      title: "Продукты",
      text: 'Все продукты компании, подберите свой!'
    },
    {
      link:'/sportsman',
      title: "Спртсменам",
      text: 'Занятия спортом связаны с риском получить травму. Застрахуйте себя от непредвиденных ситуаций '
    },
    {
      link:'/touristic',
      title: "Путешествие",
      text: 'Путешествуй без забот. По России и по всему миру'
    },
    {
      link:'/authorize',
      title: "Регистрация и авторизация",
      text: 'Зарегистрируйтесь на сайте,введите свои персональные данные и получите консультацию бесплатно'
    },
  ]



  const [active,setActive]=useState(false)

  const [zapros, setZapros] = useState('');
  const [filteredResults, setFilteredResults] = useState([]); 


  const Zapros= (e)=>{
    e.preventDefault();
    setActive(true);
    const results = data.filter((item) =>
      item.title.toLowerCase().includes(zapros.toLowerCase()) ||
      item.text.toLowerCase().includes(zapros.toLowerCase())
    );
    setFilteredResults(results);
  }


  return (
    <>
      <div className='index-page'>
        <div className='index-content'>
          <div className='index-search-block'>
            <form className='isb_form'>
              <input  type='text' className='isb-text-input' id='index-search' placeholder="Введите ваш вопрос или название продукта"  onChange={e => setZapros(e.target.value) }/>
              <button onClick={Zapros} type='submit' className='isb-submit'><img src={download} alt=""></img></button>
            </form>
            <div className='isb-footer'>
              <div className='isb-links'>
                <span>Часто спрашивают:</span>
                <a className='isb-link' href='/osago'>ОСАГО</a>
                <a className='isb-link' href='#'>Имущество</a>
                <a className='isb-link' href='#'>Здоровье</a>
                <a className='isb-link' href='#'>КАСКО</a>
                <a className='isb-link' href='#'>Страховой случай</a>
                <a className='isb-link' href='#'>Офисы</a>
              </div>
            </div>
          </div>
        </div>
        <Modal active={active} setActive={setActive} mass={filteredResults} zapros={zapros}/>
      </div>
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

export  {Home}
