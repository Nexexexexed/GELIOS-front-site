import React, { useState, useEffect } from 'react';
import './Header.css';
import {Routes, Route} from "react-router-dom";
import Cookies from 'js-cookie';
import axios from 'axios';
//images

import image_head from "../../images/logo_h.svg";
import image_menu from "../../images/menu-ico.png";
import image_krest from "../../images/krest-ico.png";
import telephone from "../../images/telephone-ico.png";
import map from "../../images/map-ico.png";
import person_auth from "../../images/person-auth-ico.png";
import person_non_auth from "../../images/person-non-auth-ico.png";



//pages
import {Home} from "../Pages/Home";
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
import {Profile} from "../Pages/Profile";
import {Registration} from '../Pages/Registration';
import {AboutCompany} from '../Pages/AboutCompany';
import {Ofice} from '../Pages/Ofice';
import {Contact} from '../Pages/Contact';
import {Document} from '../Pages/Document'



const Header = () => {
  const [flagdepl, setFlagdepl] = useState(false);
  const [name,setName] = useState('');
  const [surname,setSurname] = useState('');



  const [flagcookie,setFlagCookie]=useState(false)



  useEffect(()=>{
    const fetchUserData= async()=>{
      const token = Cookies.get('accessToken');
      try{
        const response = await axios.get('http://localhost:5000/api/getinfo',
        {
          headers: {
            accessToken: `${token}`,
          },
        });
        setName(response.data.user.name);
        setSurname(response.data.user.surname);
        setFlagCookie(true);
      }
      catch(error){
        
      }
    }
    fetchUserData();
  }, [flagcookie]);



  const Deployment = () => {
    setFlagdepl(!flagdepl);
  };

  return (
  <>
  <div className='head'>
    <div className={`overlay ${flagdepl ? 'show' : ''}`} onClick={Deployment}></div>
    <div className='non-overlayout's>
      <header className={`site-header ${flagdepl ? "active" : ''}`}>
        <div className="site-header-left">
          <button onClick={Deployment} className='header-el header-el-menu'>
            <i><img className='ico-menu' src={flagdepl ? image_krest : image_menu} alt="Menu Icon" /></i>МЕНЮ
          </button>
          <a className='header-el header-el-logo' href='/'>
            <img src={image_head} alt="Logo" />
          </a>
        </div>
        <div className='site-header-right'>
          <div className='header-el'><a href="#"><span className='img-ico'><img src={map} alt="Map Icon" /></span>МОСКВА</a></div>
          <a className='header-el' href="tel:88001007007"><span className='img-ico'><img src={telephone} alt="Phone Icon" /></span>8 800 1 007 007</a>
          {(!flagcookie) ?(
            <span className='header-el header-el-auth'><a href="/authorize"><span className='img-ico'><img src={person_non_auth} alt="Auth Icon" /></span>Авторизация</a></span>
          ):
          (
            <span className='header-el header-el-auth'><a href="/profile"><span className='img-ico'><img src={person_auth} alt="Auth Icon" /></span>{surname} {name}</a></span>
          )
          }
          
        </div>
      </header>

      <div className={`header-nav-wrap ${flagdepl ? 'show' : ''}`}>
        <div className='header-nav'>
          <div className='wrapper'>
            <div className='header-nav-inner'>
              <div className='header-nav-section'>
                <div className='header-nav-sughead'>
                  <p><a href='/products' className='header-nav-h'>Продукты</a></p>
                </div>
                <div className='header-nav-row'>
                  <div className='header-nav-subcol'>
                    <ul className='header-nav-subnav'>
                      <li className='header-nav-item'><span><strong>Авто</strong></span></li>
                      <li className='header-nav-item'><a href='/kasko'>КАСКО</a></li>
                      <li className='header-nav-item'><a href='/osago'>ОСАГО</a></li>
                      <li className='header-nav-item'><span><strong>Здоровье</strong></span></li>
                      <li className='header-nav-item'><a href='/sportsman'>Спортсменам</a></li>
                      <li className='header-nav-item'><a href='/accident'>Несчастный случай</a></li>
                      <li className='header-nav-item'><a href='/doctor'>Доктор на связи</a></li>
                      <li className='header-nav-item'><a href='/touristic'>Путешествие</a></li>
                      <li className='header-nav-item'><a href='/anticlimax'>Антиклещ</a></li>
                    </ul>
                  </div>
                  <div className='header-nav-subcol'>
                    <ul className='header-nav-subnav'>
                      <li className='header-nav-item'><span><strong>Имущество</strong></span></li>
                      <li className='header-nav-item'><a href='/mortgage'>Ипотека</a></li>
                      <li className='header-nav-item'><a href='/homeHouse'>Квартира и дом</a></li>
                      <li className='header-nav-item'><span><strong>Комплексные</strong></span></li>
                      <li className='header-nav-item'><a href='/allforyou'>Все под контролем</a></li>
                      <li className='header-nav-item'><a href='/allforbuisness'>Все для бизнеса</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='header-nav-section'>
                <div className='header-nav-row'>
                  <div className='header-nav-subcol'>
                    <ul className='header-nav-subnav'>
                      <li className='header-nav-item'><a href='/aboutus'>О Компании</a></li>
                      <li className='header-nav-item'><a href='/ofice'>Офис</a></li>
                      <li className='header-nav-item'><a href='#'>Корпоративным клиентам</a></li>
                      <li className='header-nav-item'><a href='#'>Партнерам</a></li>
                      <li className='header-nav-item'><a href='#'>Пресс-центр</a></li>
                      <li className='header-nav-item'><a href='#'>Работа в Гелиос</a></li>
                      <li className='header-nav-item'><a href='/document'>Документы</a></li>
                      <li className='header-nav-item'><a href='/contact'>Контакты</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='header-nav-section header-nav-last-section'>
                <div className='header-nav-action'>
                  <a href='#' className='header-nav-action-button'>Уведомить о страховом случае</a>
                </div>
                <div className='header-nav-action'>
                  <a href='#' className='header-nav-action-button'>Задать вопрос</a>
                </div>
                <div className='header-nav-action'>
                  <a href='#' className='header-nav-action-button'>Проверить полис</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  <Routes>
    <Route path='/' element={<Home />} />
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
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/registration' element={<Registration/>}/>
    <Route path='/aboutus' element={<AboutCompany/>}/>
    <Route path='/ofice' element={<Ofice/>}/>
    <Route path='/contact' element={<Contact/>} />
    <Route path='/document' element={<Document/>} />
  </Routes>
    </>
  );
}

export default Header;
