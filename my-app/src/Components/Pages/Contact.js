import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
        <div className='back-for-header'></div>
        <main className='page-content'>
            <div className='wrapper-contact'>
                <div className='vpk-content'>
                    <h3>Контакты</h3>
                    <div className='contact-cols'>
                        <div className='col col-first'>
                            <p className='contact-header'>Центральный офис компании</p>
                            <div className='contact-row'>
                                350015, Краснодарский край, г. Краснодар, ул. Новокузнечная, д. 40, оф. 68
                            </div>
                            <p className='contact-header'>Режим работы</p>
                            <div className='contact-row'>
                                <p className='text--smaller text--lighten'>Понедельник-четверг</p>
                                <p>с 9:00 до 18:00</p>
                            </div>
                            <div className='contact-row'>
                                <p className='text--smaller text--lighten'>Пятница</p>
                                <p>с 9:00 до 16:45</p>
                            </div>
                            <div className='contact-row'>
                                <p className='text--smaller text--lighten'>Перерыв</p>
                                <p>с 13:00 до 13:45</p>
                            </div>
                            <div className='contact-row'>
                                <p className='text--smaller text--lighten'>Суббота-воскресенье</p>
                                <p>Выходной</p>
                            </div>
                        </div>
                        <div className='col'>
                            <p className='contact-header'>Телефон</p>
                            <div className='contact-row'>
                                <p className='text--smaller text--lighten'>Единый номер для звонков по РФ</p>
                                <p>8 800 1-007-007</p>
                            </div>
                            <div className='contact-row'>
                                <p className='text--smaller text--lighten'>Доп. номер горячей линии</p>
                                <p>+7 (495) 981-96-33</p>
                            </div>
                            <div className='contact-row'>
                                <p className='text--smaller text--lighten'>Круглосуточный медицинский пульт</p>
                                <p>8 800 511-97-54 <br/>  +7 (495) 981-96-34</p>
                            </div>
                            <div className='contact-row'>
                                <p className='text--smaller text--lighten'>Факс</p>
                                <p>+7 (861) 255-65-73  <br/>  +7 (861) 212-64-09</p>
                            </div>
                        </div>
                        <div className='col col-last'>
                            <p className='contact-header'>Электронный адрес</p>
                            <div className='contact-row'>
                                <p>company@skgelios.ru</p>
                            </div>
                            <div className='contact-row'>
                                <p>
                                    <a href="mailto:<b>Отдел по работе с обращениями</b> ORsOb@skgelios.ru" className="lk__action">
                                        <b>Отдел по работе с обращениями</b>
                                        ORsOb@skgelios.ru
                                    </a>
                                </p>
                            </div>
                            <div className='contact-row'>
                                <p>
                                    <a href="mailto:<b>Урегулирование убытков</b> Claims_Dept@skgelios.ru" className="lk__action">
                                        <b>Урегулирование убытков</b>
                                        Claims_Dept@skgelios.ru
                                    </a>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export {Contact}
