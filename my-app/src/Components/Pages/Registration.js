import React, { useState, useEffect} from 'react'
import axios from 'axios'
import "./Registration.css"
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Registration = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [password_check,setPasswordCheck]=useState('');
    const [country,setCountry]=useState('');
    const [name,setName]=useState('');
    const [surname,setSurname]=useState('');
    const [passportNum,setPassportNum]=useState('');
    const [passportSer,setPassportSer]=useState('');
    const [isLogginIn,setisLogginIn]= useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get('accessToken');
        if (token) {
            setisLogginIn(true);
        }
    }, []);

    const handleChange = (event)=>{
        setCountry(event.target.value)
    };


    const addUser= async (e)=>{
        e.preventDefault();
        if(!(email && password && password_check && country && name && surname && passportNum && passportSer)){
            alert('Пожалуйста, заполните все поля');
            return;
        }
        else if(!(password===password_check)){
            alert('Пароли не совпадают');
            return;
        }   
        else if(password.length<3 || password.length>20){
            alert('Пароли слишком короткий или длинный');
            return;
        }
        else if(passportNum.length !==4 || passportSer.length !==6){
            alert('Неверно указаны данные паспорта');
            return;
        }
        

        const newUser ={
            "email": email,
            "password": password,
            "country": country,
            "name": name,
            "surname": surname,
            "passportNum": passportNum,
            "passportSer": passportSer,
        };

        try{
            const response= await axios.post("http://localhost:5000/api/registration",newUser);
            console.log('Logged in', response.data);
            Cookies.set('accessToken', response.data.accessToken, { expires: 7 }); // Expires in 7 days
            Cookies.set('refreshToken', response.data.refreshToken, { expires: 30 }); // Expires in 30 days

            setisLogginIn(true);
            navigate('/profile');
        }
        catch(e){
            console.error('Error loggin in:', e);
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
            <h2>Регистрация</h2>
            <form className='forma'>
                <div className='input-email'>
                    <label for="email">Введите почту</label>
                    <input 
                        type="text" 
                        id="email" 
                        className="email" 
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

                <div className='input-pass'>
                    <label for="passwordrep">Повторите пароль</label>
                    <input 
                        type="password" 
                        id="passwordrep" 
                        className="password" 
                        value={password_check} 
                        onChange={(e) => setPasswordCheck(e.target.value)} 
                    />
                </div>

                <div className='input-name'>
                    <label for="name">Введите имя</label>
                    <input 
                        type="text" 
                        id="name" 
                        className="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>

                <div className='input-surname'>
                    <label for="surname">Введите фамилию</label>
                    <input 
                        type="text" 
                        id="surname" 
                        className="surname" 
                        value={surname} 
                        onChange={(e) => setSurname(e.target.value)} 
                    />
                </div>

                <div className='input-passNum'>
                    <label for="passNum">Введите номер паспорта</label>
                    <input 
                        type="text" 
                        id="passNum" 
                        className="passNum" 
                        value={passportNum} 
                        onChange={(e) => setPassportNum(e.target.value)} 
                    />
                </div>

                <div className='input-passSer'>
                    <label for="passSer">Введите серию паспорта</label>
                    <input 
                        type="text" 
                        id="passSer" 
                        className="passSer" 
                        value={passportSer} 
                        onChange={(e) => setPassportSer(e.target.value)} 
                    />
                </div>

                <div className='input-country'>
                    <label for="country">Введите страну проживания</label>
                    <select id="country" value ={country} onChange={handleChange}>
                        <option value="Russia">Россия</option>
                        <option value="Belarus">Беларусь</option>
                        <option value="kazakhstan">Казахстан</option>
                        <option value="Usbekistan">Узбекистан</option>
                        <option value="Armenia">Армения</option>
                    </select>
                </div>


                <div className='input-btn'>
                    <button className="btn-reg" onClick={addUser}>Регистрация</button>
                </div>
            </form>
        </div>
        </main>
    </>
  )
}

export {Registration}
