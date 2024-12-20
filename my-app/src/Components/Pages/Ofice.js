import React from 'react'
import './Ofice.css'

const Ofice = () => {
  return (
    <>
        <div className='back-for-header'></div>
        <main className='page-content'>
            <div className='wrapper-ofice'>
                <div className='vpk-content'>
                    <h3>Офис "Гелиосы"</h3>
                </div>
                <div className='vpk-content'>
                    <h2>Москва и Московская область</h2>
                    <iframe className='map_ofice' src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab0db8ae0bf0f034c2372cee35bb188bf72d6a488ef9fd77397972e95f22f6740&amp;source=constructor" width="1136" height="500" frameborder="0"></iframe>
                </div>
            </div>
        </main>
    </>
  )
}

export {Ofice}
