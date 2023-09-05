import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import iphone from '@/public/earphones.jpeg';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Slider = () => {
  return (
    <div className="w-full h-full bg-yellow overflow-hidden rounded-3xl">
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="h-full w-full"
        id="swiper-button-prev"
      >
        {[...Array(10)].map((_, i) => (
          <SwiperSlide key={i} className="bg-white cursor-pointer">
            <Image src={iphone} alt="image" className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
