import React,{ useState, useEffect } from 'react'
import './Profile.css'
import axios from 'axios'
import Cookies from 'js-cookie';
import img from '../../images/profile-img.webp'
import { useNavigate } from 'react-router-dom';
import CartComponent from '../BaseComp/CartComponent';


const Profile = () => {
    const [userData,setUserData]= useState({
      email: "",
      isActivated: false,
      country: "",
      name: "",
      surname: "",
      passportNum: "",
      passportSer: ""
    });
    const navigate = useNavigate();
    const [isLogginIn,setisLogginIn]= useState(true);
    

    const [userCart,setUserCart]=useState({
      "КАСКО": {
        quantity: 0,
        "name": "kaskoq"
      },
      "ОСАГО": {
        quantity: 0,
        "name": "osagoq"
      },
      "Антиклещ": {
        quantity: 0,
        "name": "anticlimax"
      },
      "Несчастный случай": {
        quantity: 0,
        "name": "accidentq"
      },
      "Все для бизнеса": {
        quantity: 0,
        "name": "allforbuizq"
      },
      "Все для вас": {
        quantity: 0,
        "name": "allforyouq"
      },
      "Доктор": {
        quantity: 0,
        "name": "doctorq"
      },
      "Дом и жилье": {
        quantity: 0,
        "name": "homehouseq"
      },
      "Ипотека": {
        quantity: 0,
        "name": "mortgageq"
      },
      "Спортсменам": {
        quantity: 0,
        "name": "sportsmanq"
      },
      "Туристам": {
        quantity: 0,
        "name": "touristq"
      },
    })

  useEffect(()=>{
    const fetchuserCart =async()=>{
      const token = Cookies.get('accessToken');
      try{
        const response = await axios.get('http://localhost:5000/api/cart',
        {
          headers: {
            accessToken: `${token}`,
          },
        });
        setUserCart(
          {
            "КАСКО": { quantity: response.data.kaskoq, name: "kaskoq" },
            "ОСАГО": { quantity: response.data.osagoq, name: "osagoq" },
            "Антиклещ": { quantity: response.data.anticlimax, name: "anticlimax" },
            "Несчастный случай": { quantity: response.data.accidentq, name: "accidentq" },
            "Все для бизнеса": { quantity: response.data.allforbuizq, name: "allforbuizq" },
            "Все для вас": { quantity: response.data.allforyouq, name: "allforyouq" },
            "Доктор": { quantity: response.data.doctorq, name: "doctorq" },
            "Дом и жилье": { quantity: response.data.homehouseq, name: "homehouseq" },
            "Ипотека": { quantity: response.data.mortgageq, name: "mortgageq" },
            "Спортсменам": { quantity: response.data.sportsmanq, name: "sportsmanq" },
            "Туристам": { quantity: response.data.touristq, name: "touristq" },
          }
        )
      }
      catch(error){
        console.log('Error fetching user data:', error);
      }
    }
    fetchuserCart();
  }, []);

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
        console.log(response.data);
        setUserData(response.data.user);
        
      }
      catch(error){
        console.log('Error fetching user data:', error);
      }

    }

    fetchUserData();
  }, []);


  const Delete=async(productId)=>{
    const token = Cookies.get('accessToken');
    try{
      const response=await axios.post('http://localhost:5000/api/cart/remove',{accesstoken:token,productId:productId});
      setUserCart(
        {
          "КАСКО": { quantity: response.data.kaskoq, name: "kaskoq" },
          "ОСАГО": { quantity: response.data.osagoq, name: "osagoq" },
          "Антиклещ": { quantity: response.data.anticlimax, name: "anticlimax" },
          "Несчастный случай": { quantity: response.data.accidentq, name: "accidentq" },
          "Все для бизнеса": { quantity: response.data.allforbuizq, name: "allforbuizq" },
          "Все для вас": { quantity: response.data.allforyouq, name: "allforyouq" },
          "Доктор": { quantity: response.data.doctorq, name: "doctorq" },
          "Дом и жилье": { quantity: response.data.homehouseq, name: "homehouseq" },
          "Ипотека": { quantity: response.data.mortgageq, name: "mortgageq" },
          "Спортсменам": { quantity: response.data.sportsmanq, name: "sportsmanq" },
          "Туристам": { quantity: response.data.touristq, name: "touristq" },
        }
      )
    }
    catch(error){
      console.error(error)
    }
  }



  const Exit=async()=>{
    const token = Cookies.get('refreshToken');
    try{
      const response=await axios.post('http://localhost:5000/api/logout',{refreshToken:token});
      Cookies.remove('refreshToken');
      Cookies.remove('accessToken');
      setisLogginIn(false);
    }
    catch(error){
      console.error(error)
    }
  }


  if(!isLogginIn){
    return(
        navigate('/')
    )
}


  return (
    <>
    <div className='back-for-header'></div>
    <main className='page-content'>
      <div className='wrapper-forma '>
        <div className='header_profile_text'>
          <h2>Личный кабинет</h2>
        </div>
        <div className='wrapper-profile'>
          <div>
            <img src={img}></img>
          </div>
          <div className='User-Info'>
            <div className='user-email user-info'>
              <p>Почта пользователя:</p>
              <p><strong>{userData.email}</strong></p>
            </div>
            <div className='user-country user-info'>
              <p>Страна пользователя:</p>
              <p><strong>{userData.country}</strong></p>
            </div>
            <div className='user-name user-info'>
              <p>Имя пользователя:</p>
              <p><strong>{userData.name}</strong></p>
            </div>
            <div className='user-surname user-info'>
              <p>Фамилия пользователя:</p>
              <p><strong>{userData.surname}</strong></p>
            </div>
            <div className='user-passport user-info'>
              <p>Паспортные данные пользователя:</p>
              <p><strong>{userData.passportNum} {userData.passportSer}</strong></p>
            </div>

            <div className='confirmation '>
                  {!userData.isActivated? (
                    <div className='email-confirmation-warning'>
                      Пожалуйста, подтвердите почту!
                    </div>
                  ):('')}
            </div>
            <div className='logout-btn '>
              <button className='logout' onClick={Exit}>Выход</button>
            </div>
          </div>
        </div>
        <hr className='hr_profile'/>
        <div className='cart'>
          <div className='header_profile_text'>
            <h3>Корзина</h3>
          </div>
          <div className='cart-list'>
            {userCart && Object.keys(userCart).length > 0 ? (
              Object.keys(userCart).map((item) => {
                const product = userCart[item];
                if (product.quantity > 0) { 
                  return (
                    <CartComponent 
                      key={item} 
                      name={item} 
                      q={product.quantity} 
                      handleClick={() => Delete(product.name)} 
                    />
                  );
                }
                return null; 
              })
            ) : (
              <p>Корзина пуста</p> 
            )}
          </div>
                    <div className='cart-btn'>
            <button className='order' >Заказать</button>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export {Profile};
