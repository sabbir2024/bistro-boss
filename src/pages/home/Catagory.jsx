import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import Header from '../../components/Header';

const Catagory = () => {
    return (
        <>
            <Header title='ORDER ONLINE' header='From 11:00am to 10:00pm' />

            <div className='py-4'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="slide1" />
                        <h1 className='text-center text-2xl text-white -mt-16 font-bold uppercase'>Salat</h1>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={slide2} alt="slide1" />
                        <h1 className='text-center text-2xl text-white -mt-16 font-bold uppercase'>pizza</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="slide1" />
                        <h1 className='text-center text-2xl text-white -mt-16 font-bold uppercase'>soups</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="slide1" />
                        <h1 className='text-center text-2xl text-white -mt-16 font-bold uppercase'>desserts</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="slide1" />
                        <h1 className='text-center text-2xl text-white -mt-16 font-bold uppercase'>Salat</h1>
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    );
};

export default Catagory;