import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Authorize.css'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


const Authorize = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [isLogginIn,setisLogginIn]= useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        const token = Cookies.get('accessToken');
        if (token) {
            setisLogginIn(true);
        }
    }, []);


    const addNewUser = async(e)=>{
        e.preventDefault();

        if (!email || !password) {
            alert('Пожалуйста, заполните все поля');
            return;
        }

        const newUser = {
            email,
            password,
        };

        try{
            const response = await axios.post('http://localhost:5000/api/login', newUser);
            console.log('Logged in', response.data);
            Cookies.set('accessToken', response.data.accessToken, { expires: 7 }); // Expires in 7 days
            Cookies.set('refreshToken', response.data.refreshToken, { expires: 30 }); // Expires in 30 days
 
            setisLogginIn(true);
            navigate('/profile');
        }
        catch(e){
            console.error('Error loggin in:', e)
        }

    }

    if(isLogginIn){
        return(
            navigate('/profile')
        )
    }

    return (
        <>
        <div className='back-for-header'></div>
        <main className='page-content'>
        <div className='wrapper-forma'>
            <h2>Вход в личный кабинет</h2>
            <form className='forma'>
                <div className='input-name'>
                    <label for="name">Введите почту</label>
                    <input 
                        type="text" 
                        id="name" 
                        className="name" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className='input-pass'>
                    <label for="password">Введите пароль</label>
                    <input 
                        type="password" 
                        id="password" 
                        className="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <div className='input-btn'>
                    <button className="btn-login" onClick={addNewUser}>Вход</button>
                </div>
                <a href='/registration'>Регистрация</a>
            </form>
        </div>
        </main>
        </>
    )
}

export {Authorize}



