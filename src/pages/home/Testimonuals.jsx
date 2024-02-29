import Header from '../../components/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
import { FaQuoteLeft } from "react-icons/fa";


const Testimonuals = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json()
                .then(data => setReviews(data))
            )
    }, [])
    return (
        <div>
            <Header header={'What Our Clients Say'} title={'TESTIMONIALS'} />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}
                        review={review}>
                        <div className='text-center justify-center mx-auto px-20'>
                            <StarRatings
                                rating={review.rating}
                                starDimension="40px"
                                starSpacing="15px"
                                starRatedColor="yellow"
                            />
                            <FaQuoteLeft className='text-center justify-center font-bold text-3xl' />
                            <p>{review.details}</p>
                            <h4 className='text-orange-300 font-bold'>{review.name}</h4>
                        </div>

                    </SwiperSlide>)
                }

            </Swiper>
        </div>

    );
};

export default Testimonuals;