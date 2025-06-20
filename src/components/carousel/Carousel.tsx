import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';


import './styles.css';

// import required modules
import { EffectFade, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const Carousel = () => {
  return (
    <>
    <Swiper
      spaceBetween={30}
      effect={'fade'}
    
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image className="w-full" src="/images/Frame44.png" alt="" width={34} height={2} sizes="(max-width: 1800px) 100vw, 50vw" priority/>
      </SwiperSlide>
      <SwiperSlide>
        <Image className="w-full" src="/images/Frame45.png" alt="" width={34} height={2} sizes="(max-width: 1800px) 100vw, 50vw" priority/>
      </SwiperSlide>
      <SwiperSlide>
        <Image className="w-full" src="/images/Frame50.png" alt="" width={34} height={2} sizes="(max-width: 1800px) 100vw, 50vw" priority/>
      </SwiperSlide>
    </Swiper>
  </>
  )
}

export default Carousel