import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import Menu from '../Menu/Menu'

const Menus = () => {
    const menus = [
        {"id": 1, "name": "STARTERS", 'pic': './assets/categories/starter.png', 'items': 10},
        {"id": 2, "name": "SOUP", 'pic': './assets/categories/soup.png', 'items': 5},
        {"id": 3, "name": "SALAD", 'pic': './assets/categories/salad.png', 'items': 4},
        {"id": 4, "name": "FAMILY PLATTERS", 'pic': './assets/categories/platters.png', 'items': 4},
        {"id": 5, "name": "SPAGHETTIES", 'pic': './assets/categories/spaghetti.png', 'items': 4},
        {"id": 6, "name": "OPEN FIRE GRILL", 'pic': './assets/categories/firegrills.png', 'items': 10},
        {"id": 7, "name": "SIZZLERS", 'pic': './assets/categories/sizzlers.png', 'items': 8},
        {"id": 8, "name": "SEA FOODS", 'pic': './assets/categories/seafoods.png', 'items': 9},
        {"id": 9, "name": "BIRYANI", 'pic': './assets/categories/biryani.png', 'items': 6},
        {"id": 10, "name": "STIR FRIED RICE", 'pic': './assets/categories/fried-rice.png', 'items': 5},
        {"id": 11, "name": "AUTHENTIC CURRIES", 'pic': './assets/categories/curries.png', 'items': 16},
        {"id": 12, "name": "LAMB", 'pic': './assets/categories/lamb.png', 'items': 6},
        {"id": 13, "name": "BEEF", 'pic': './assets/categories/beef.png', 'items': 9},
        {"id": 14, "name": "VEGETABLES", 'pic': './assets/categories/vegetables.png', 'items': 13},
        {"id": 15, "name": "PARATHAS/NAAN/ROTIES", 'pic': './assets/categories/naan.png', 'items': 7},
        {"id": 16, "name": "BUNNYCHOW", 'pic': './assets/categories/bunnychow.png', 'items': 4},
        {"id": 17, "name": "BURGER, WRAPS & SHAWARMA", 'pic': './assets/categories/burger.png', 'items': 12},
        {"id": 18, "name": "KIDDIES MEAL", 'pic': './assets/categories/meal.png', 'items': 7},
        {"id": 19, "name": "HOT BEVERAGES", 'pic': './assets/categories/hot-beverages.png', 'items': 2},
        {"id": 20, "name": "COLD BEVERAGES", 'pic': './assets/categories/cold-beverages.png', 'items': 1},
        {"id": 21, "name": "MILKSHAKES", 'pic': './assets/categories/milkshakes.png', 'items': 1},
        {"id": 22, "name": "BOMBAY KRUSH", 'pic': './assets/categories/bombay-crush.png', 'items': 1},
        {"id": 23, "name": "LASSI", 'pic': './assets/categories/lassi.png', 'items': 2},
        {"id": 24, "name": "SOFT DRINKS", 'pic': './assets/categories/softdrinks.png', 'items': 3},
        {"id": 25, "name": "DESSERTS", 'pic': './assets/categories/dessert.png', 'items': 3}
      ]
    
    return (
        <div className='py-8'>
            <h2 className='text-red-500 font-bold text-center uppercase text-xl lg:text-5xl' >Our Delicious Menu</h2>
            <p className='text-center md:text-3xl text-base text-gray-300 font-medium py-3'>Menu that always make you fall in love</p>                    

            <div className="swiper-container my-6">
          <Swiper
            modules={[Autoplay, FreeMode]}
            slidesPerView={'auto'}
            spaceBetween={32}
            loop={true}
            centeredSlides={true}
            grabCursor={true}
            freeMode={true}
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
                slidesPerView: 4,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 32,
              },
              1440: {
                slidesPerView: 8,
                spaceBetween: 32,
              },
            }}
          >
            {menus.map((menu,i) => (
            <SwiperSlide key={i} >
              <Menu key={menu.id} menu={menu}></Menu>
            </SwiperSlide>
          ))}
          </Swiper>
          
        </div>

        </div>
    )
}

export default Menus