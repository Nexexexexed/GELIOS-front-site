import React from 'react'
import './Shapkaeverysite.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';               // Базовые стили Swiper
import 'swiper/css/navigation';    // Стили для стрелок навигации
import 'swiper/css/pagination';    // Стили для пагинации
import 'swiper/css/scrollbar';     // Стили для скроллбара

const Shapkaeverysite = (props) => {
  return (
    <div className='content-inner'>
        <div className='product-class' /*style={{backgroundImage: `url(`+props.imageURL1+`)`}}*/>
            <div className='info'>
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  pagination={false}
                  scrollbar= {false}
                  autoplay={{
                    delay: 3000, // Задержка в миллисекундах
                    disableOnInteraction: false, // Не останавливать при взаимодействии
                  }}
                >
                  <SwiperSlide>
                    <div className="slide-container">
                      <img src={props.imageURL1} alt="Slide 1" />
                      <h1 className="slide-text">{props.info}</h1> 
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide-container">
                      <img src={props.imageURL2} alt="Slide 2" />
                      <h1 className="slide-text">{props.info}</h1> 
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide-container">
                      <img src={props.imageURL3} alt="Slide 3" />
                      <h1 className="slide-text">{props.info}</h1> 
                    </div>
                  </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Shapkaeverysite
