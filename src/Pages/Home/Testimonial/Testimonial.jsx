import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'



const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="max-w-screen-xl mx-auto my-20">
            <SectionTitle subHeading="---What Our Clients Say---" heading="TESTIMONIALS"></SectionTitle>
            <section className="my-10">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {reviews.map((item, idx) => <SwiperSlide key={idx}>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={item.rating}
                            readOnly
                            className="mx-auto"
                        />
                        <div className="text-center px-20 mt-5">
                            <p>{item.details}</p>
                            <h3 className="text-2xl text-orange-600 py-4">{item.name}</h3>
                        </div>
                    </SwiperSlide>)}
                </Swiper>
            </section>
        </div>
    );
};

export default Testimonial;