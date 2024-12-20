import React from 'react'
import './Document.css'
import DocumentBlock from '..//BaseComp/DocumentBlock'

import Fp1 from '../../files/allpravilaNS.pdf'
import Fp2 from '../../files/PravStrahGO.pdf'

import Sp1 from '../../files/OtMezhStand.pdf'
import Sp2 from '../../files/OtRuStand.pdf'

import Tp1 from '../../files/SvidChVSS.pdf'
import Tp2 from '../../files/SvidMezhControl.jpg'
import Tp3 from '../../files/LicNaDobStrah.pdf'
import Tp4 from '../../files/LicPerStrah.pdf'
import Tp5 from '../../files/LicStrahImuch.pdf'
import Tp6 from '../../files/SvidChRSA.pdf'

import Fop1 from '../../files/RatingSvidEn.pdf'
import Fop2 from '../../files/RatingSvidRu.pdf'

import Sip1 from '../../files/UstavStrahGel.pdf'
import Sip2 from '../../files/SvidPostUchet.pdf'
import Sip3 from '../../files/ListZapEGRUL.pdf'
import Sip4 from '../../files/UchetNalOrg.pdf'
import Sip5 from '../../files/SvidGosRegUrLic.jpg'




const Document = () => {
  return (
    <>
        <div className='back-for-header'></div>
        <main className='page-content'>
            <div className='wrapper-document'>
                <div className='vpk-content'>
                <h3>Документы</h3>
                    <div className='vpk-content-documents'>
                    <DocumentBlock 
                        header_text="Правила страхования и тарифы" 
                        documents={[
                            {
                                link:Fp1, 
                                text:"Общие правила от несчастных случаев и болезней, утверждены приказом от 09.04.2019 № 102 (действуют с 07.05.2019)"
                            },
                            {
                                link:Fp2, 
                                text:"Правила обязательного страхования гражданской ответственности владельцев транспортных средств (действовали с 30.01.2023 по 24.07.2023)"
                            }
                        ]}
                    />
                    <DocumentBlock 
                        header_text="Отчётность" 
                        documents={[
                            {
                                link:Sp1, 
                                text:"Отчетность по международным стандартам (МСФО)"
                            },
                            {
                                link:Sp2, 
                                text:"Отчетность по российским стандартам (РСБУ)"
                            }
                        ]}
                    />
                    <DocumentBlock 
                        header_text="Лицензии и свидетельства" 
                        documents={[
                            {
                                link:Tp1, 
                                text:"Свидетельство члена Всероссийского Союза Страховщиков"
                            },
                            {
                                link:Tp2, 
                                text:"Свидетельство о прохождении инспекционного контроля"
                            },
                            {
                                link:Tp3, 
                                text:"Лицензия на осуществление добровольного личного страхования, за исключением добровольного страхования жизни."
                            },
                            {
                                link:Tp4, 
                                text:"Лицензия на осуществление перестрахования"
                            },
                            {
                                link:Tp5, 
                                text:"Лицензия на осуществление страхования имущества"
                            },
                            {
                                link:Tp6, 
                                text:"Свидетельство члена Российского Союза Автостраховщиков"
                            },
                        ]}
                    />
                    <DocumentBlock 
                        header_text="Рейтинг, сертификаты" 
                        documents={[
                            {
                                link:Fop1, 
                                text:"Cвидетельство о присвоении рейтинга Эксперт РА (en) ruB+, с 16.06.2024"
                            }, 
                            {
                                link:Fop2, 
                                text:"Свидетельство о присвоении рейтинга Эксперт РА (ru) ruB+, с 16.06.2024"
                            }
                        ]}
                    />
                    <DocumentBlock 
                        header_text="Учредительные документы" 
                        documents={[
                            {
                                link:Sip1, 
                                text:"Устав ООО Страховая Компания Гелиос"
                            },
                            {
                                link:Sip2, 
                                text:"Свидетельство о постановке на учет в ИФНС"
                            }, 
                            {
                                link:Sip3, 
                                text:"Лист записи ЕГРЮЛ"
                            }, 
                            {
                                link:Sip4, 
                                text:"Свидетельство о постановке на учет в налоговом органе"
                            }, 
                            {
                                link:Sip5, 
                                text:"Свидетельство о государственной регистрации юридического лица"
                            }
                        ]}
                    />
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export {Document}
