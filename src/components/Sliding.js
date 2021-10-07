import React, { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Sliding.css';

// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

function Sliding({ img }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="slide-container">
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2"
      >
        {img.map((el, index) => {
          return (
            <SwiperSlide className="swi" key={index}>
              <img className="swiper-photo" src={el} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className="mySwiper"
      >
        {img.map((el, index) => {
          return (
            <SwiperSlide className="swi2" key={index}>
              <img src={el} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Sliding;
