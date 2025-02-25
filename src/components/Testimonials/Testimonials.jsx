import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(()=> {
    fetch('reviews.json')
    .then(res => res.json())
    .then(data => setReviews(data))
  },[])
  return (
    <section className="md:py-6 md:my-16 my-4 py-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
        <h2 className="uppercase my-6 font-bold text-center text-xl lg:text-5xl text-red-500">
            What our happy Customer says!
          </h2>
          <p className="mx-auto md:w-9/12 text-lg text-justify font-thin text-gray-200">
          At Tasty, our customers are the heart of everything we do. Nothing brings us more joy than seeing satisfied smiles after a meal. We take pride in delivering not only delicious food but also exceptional service that makes every dining experience special. Our customers know they can count on fresh ingredients, flavorful dishes, and a welcoming atmosphere every time they visit. Their happiness drives us to continually improve and innovate, ensuring that every plate we serve exceeds expectations. Join the Tasty family and see why our customers leave happy, every single time.
          </p>
        </div>
        <div className="swiper-container">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={32}
            loop={true}
            centeredSlides={true}
            grabCursor={true}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 32,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
          >
            {reviews.map(review => (
            <SwiperSlide key={review.id}>
              <div className="group bg-transparent border border-solid border-gray-300 rounded-lg p-6 transition-all duration-500 w-full mx-auto hover:border-red-500 hover:shadow-sm">
                <div>
                  <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                    <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-base font-semibold text-amber-500">{review.rating}</span>
                  </div>
                  <p className="text-base text-justify text-gray-300 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-100">
                    {review.text}
                  </p>
                </div>
                <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                  <img className="rounded-full h-10 w-10" src={review.image} alt="avatar" />
                  <div className="block">
                    <h5 className="text-slate-100 font-medium transition-all duration-500 mb-1">{review.name}</h5>
                    <span className="text-sm leading-4 text-gray-400">{review.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          </Swiper>
          
        </div>
      </div>
    </section>
  );
}