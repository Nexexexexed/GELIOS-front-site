import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import './ButtonCart.css'
import axios from 'axios'

const ButtonCart = (props) => {
  const [carModel, setCarModel] = useState('');
  const [carPower, setCarPower] = useState('');
  const [driverAge, setDriverAge] = useState('');
  const [driverExperience, setDriverExperience] = useState('');
  const [program, setProgram] = useState('geliosElectr');
  const [region, setRegion] = useState('Moscow');
  const [carUsage, setCarUsage] = useState('');
  const [isAdding,setisAdding] = useState(false);


  const Send = async () => {
    if (props.name === 'kaskoq' && (!carModel || !carPower || !driverAge || !driverExperience || !program)) {
        alert("Пожалуйста, заполните все поля для КАСКО.");
        return;
      } 
    else if (props.name === 'osagoq' && (!region || !carModel || !carPower || !carUsage || !driverExperience || !driverAge)) {
        alert("Пожалуйста, заполните все поля для ОСАГО.");
        return;
    }
    const token = Cookies.get('accessToken');
    try {
        const response = await axios.post('http://localhost:5000/api/cart/add',{accesstoken: token,productId: props.name})
        if(response){
            setisAdding(true);
            setCarModel('');
            setCarPower('');
            setDriverAge('');
            setDriverExperience('');
            setProgram('');
            setRegion('');
            setCarUsage('');
        }
    } 
    catch (error) {
      console.error(error);
    }
  };

  const renderContent = () => {
    if (props.name === 'kaskoq') {
      return (
        <div className='wrapper_coll_inf'>
          <div className='wrapper_placeholder_elemet'>
            <div className='text_btn_cart_car'>Данные автомобиля</div>
            <div className='input_cart_car'>
              <input
                className='marka_cart'
                type='text'
                placeholder='марка, модель'
                value={carModel}
                onChange={(e) => setCarModel(e.target.value)}
              />
              <input
                className='power_cart'
                type='text'
                placeholder='мощность, л.с.'
                value={carPower}
                onChange={(e) => setCarPower(e.target.value)}
              />
            </div>
          </div>
          <div className='wrapper_placeholder_elemet'>
            <div className='text_btn_cart_driver'>Данные водителя</div>
            <div className='input_cart_driver'>
              <input
                className='age_driver'
                type='text'
                placeholder='возраст водителя'
                value={driverAge}
                onChange={(e) => setDriverAge(e.target.value)}
              />
              <input
                className='experience_driver'
                type='text'
                placeholder='водительский стаж'
                value={driverExperience}
                onChange={(e) => setDriverExperience(e.target.value)}
              />
            </div>
          </div>
          <div className='wrapper_placeholder_elemet'>
            <div className='text_btn_cart_program'>Программа КАСКО</div>
            <div className='select_btn_cart_program'>
              <select
                name='select-program'
                value={program}
                onChange={(e) => setProgram(e.target.value)}
              >
                <option value='geliosElectr'>Гелиос Электрик</option>
                <option value='profi'>КАСКО Профи</option>
                <option value='gotcha'>КАСКО Попалам</option>
                <option value='profitable'>Выгодное КАСКО</option>
              </select>
            </div>
          </div>
        </div>
      );
    } else if (props.name === 'osagoq') {
      return (
        <div className='wrapper_coll_inf'>
          <div className='wrapper_placeholder_elemet'>
            <div className='text_btn_cart_region'>
                Регион в котором зарегистрирован автомобиль
            </div>
            <div className='select_btn_cart_region'>
              <select
                name='select-region'
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                <option value='Moscow'>Москва</option>
                <option value='SPb'>Санкт-Петербург</option>
                <option value='Central'>Центральный</option>
                <option value='CentralChernozem'>Центрально-Черноземный</option>
                <option value='EastSiberian'>Восточно-Сибирский</option>
                <option value='FarEastern'>Дальневосточный</option>
                <option value='Northern'>Северный</option>
                <option value='NorthCaucasian'>Северо-Кавказский</option>
                <option value='Northwest'>Северо-Западный</option>
                <option value='VolgaRegion'>Поволжский</option>
                <option value='Uralsky'>Уральский</option>
                <option value='VolgaVyatka'>Волго-Вятский</option>
                <option value='WestSiberian'>Западно-Сибирский</option>
              </select>
            </div>
          </div>
          <div className='wrapper_placeholder_elemet'>
            <div className='text_btn_cart_car'>Данные автомобиля</div>
            <div className='input_cart_car'>
              <input
                className='marka_cart'
                type='text'
                placeholder='марка, модель'
                value={carModel}
                onChange={(e) => setCarModel(e.target.value)}
              />
              <input
                className='power_cart'
                type='text'
                placeholder='мощность, л.с.'
                value={carPower}
                onChange={(e) => setCarPower(e.target.value)}
              />
              <input
                className='usage_cart'
                type='text'
                placeholder='возраст авто'
                value={carUsage}
                onChange={(e) => setCarUsage(e.target.value)}
              />
            </div>
          </div>
          <div className='wrapper_placeholder_elemet'>
            <div className='text_btn_cart_driver'>Данные водителя</div>
            <div className='input_cart_driver'>
              <input
                className='age_driver'
                type='text'
                placeholder='возраст водителя'
                value={driverAge}
                onChange={(e) => setDriverAge(e.target.value)}
              />
              <input
                className='experience_driver'
                type='text'
                placeholder='водительский стаж'
                value={driverExperience}
                onChange={(e) => setDriverExperience(e.target.value)}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return null; 
    }
  };

  return (
    <div className='box_button'>
      {renderContent()}
      <div className='btn_send_el'>
        <button className='btn_sending' onClick={Send}>
          {props.text}
        </button>
      </div>
      {isAdding?
        (
            <div className='messsage_success'>
                <p>
                  ВАШ ЗАКАЗ БЫЛ УСПЕШНО ДОБАВЛЕН!  
                </p>
            </div>
        ):
        ('')
      }
    </div>
  );
};

export default ButtonCart;
