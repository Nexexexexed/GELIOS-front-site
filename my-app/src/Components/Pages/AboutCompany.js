import React from 'react'
import './AboutCompany.css'
import img_map from '../../images/about_map.png'
import {AsSectionInfo} from '../BaseComp/AsSectionInfo'
import img2 from '../../images/about_us_reliability/RCA.png'
import img3 from '../../images/about_us_reliability//SMKC.png'
import img1 from '../../images/about_us_reliability/VSS.png'
import img4 from '../../images/about_us_reliability/AGR.png'

const AboutCompany = () => {
  return (
    <>
      <div className='back-for-header'></div>
      <main className='page-content'>
        <div className='wrapper-about'>
            <div className='vpk-content'>
                <h3>Компания</h3>
            </div>
            <div className='about_content_info'>
                <div className='about_content_left'>
                    <p className='about_info_zagolovok'>ООО Страховая Компания «Гелиос» – это универсальная технологичная страховая компания, оказывающая услуги на финансовом рынке с 1993 года.</p>
                    <div className='about_info_text'>
                        <p>
                        Обеспечивать комплексную защиту финансовых интересов клиентов Компании позволяют лицензии Банка России на осуществление ОСАГО, добровольного имущественного страхования, добровольного личного страхования (кроме страхования жизни), а также лицензия на перестрахование, выданные бессрочно.
                        <br/>
                        <br/>
                        Страховая Компания «Гелиос» – член Всероссийского Союза Страховщиков (ВСС), Российского Союза Автостраховщиков (РСА), Национального союза агростраховщиков (НСА).
                        <br/>
                        <br/>
                        Ответственность перед клиентами по полной сумме возможных убытков Страховая Компания «Гелиос» несет благодаря финансовой устойчивости, объёмам собственных средств и надежным перестраховочным программам. В числе партнеров по перестрахованию – ведущие российские и международные компании.
                        <br/>
                        <br/>
                        В долгосрочной перспективе Компания планирует сохранить и расширить свою роль и место на страховом рынке Российской Федерации как технологичной страховой организации рыночного типа со сбалансированным портфелем универсальных (классических) страховых рисков и высокой финансовой устойчивостью.
                        <br/>
                        <br/>
                        </p>
                        <img className="about_img_map" src={img_map}></img>
                    </div>
                </div>
                <div className='about_content_rigth'>
                    <AsSectionInfo text_1="100 %" text_2="Российский капитал"/>
                    <AsSectionInfo text_1="600 млн рублей" text_2="Уставный капитал"/>
                    <AsSectionInfo text_1="5,6 млрд рублей" text_2="Страховые премии за 2022"/>
                    <AsSectionInfo text_1="23-е место" text_2="в рэнкинге страховщиков non-life по итогам 2022"/>
                    <AsSectionInfo text_1="2,8 млрд. рублей" text_2="Страховые выплаты в 2022"/>
                    <AsSectionInfo text_1="1 200 000+" text_2="клиентов и партнеров"/>
                    <AsSectionInfo text_1="1 500+" text_2="продавцов и агентов"/>
                </div>
            </div>
            <div className='about_banner'>
                <div className='ab-col-first'>
                    <div className='ab-lead'>
                        Наша миссия:
                        <br/>
                        Сохранять ваше настоящее, чтобы вы уверенно создавали свое будущее
                    </div>
                </div>
                <div className='ab-col'>
                    <div className='ab-group'>
                        <p><strong>Клиентам</strong></p>
                        <p>Надежность и удобство</p>
                    </div>
                    <div className='ab-group'>
                        <p><strong>Сотрудникам</strong></p>
                        <p>Возможность профессионального роста вместе с Компанией</p>
                    </div>
                </div>
                <div className='ab-col'>
                <div className='ab-group'>
                        <p><strong>Партнёрам</strong></p>
                        <p>Прибыльность и технологичность</p>
                    </div>
                    <div className='ab-group'>
                        <p><strong>Участникам</strong></p>
                        <p>Прибыльный, высокопотенциальный актив</p>
                    </div>
                </div>
            </div>

            <div className='about_reliability'>
                <div className='ar_item'>
                    <div className='ar_item_image'>
                        <img src={img1}></img>
                    </div>
                    <div className='ar_item_text'>
                        Почетный член Всероссийского Союза Страховщиков
                    </div>
                </div>
                <div className='ar_item'>
                    <div className='ar_item_image'>
                        <img src={img2}></img>
                    </div>
                    <div className='ar_item_text'>
                    Член Российского союза автостраховщиков
                    </div>
                </div>
                <div className='ar_item'>
                    <div className='ar_item_image'>
                        <img src={img3}></img>
                    </div>
                    <div className='ar_item_text'>
                    Система менеджмента качества сертифицирована
                    по ГОСТ Р ИСО 9001-2015
                    </div>
                </div>
                <div className='ar_item'>
                    <div className='ar_item_image'>
                        <img src={img4}></img>
                    </div>
                    <div className='ar_item_text'>
                        Официальный страховальщик <a href="https://www.rusgolf.ru/ru">Ассоциации Гольфа России</a>
                    </div>
                </div>
            </div>

        </div>
      </main>
    </>
  )
}

export {AboutCompany}
