"use client";

import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function QuoteSlider() {
    const buttonStyling =
        "text-white w-10 h-10 cursor-pointer block relative transition-transform duration-2500";

    const slideStyling = "text-white 2xl:text-4xl text-2xl";

    return (
        <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            speed={800}
            loop={true}
            navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
            }}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper: any) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="relative"
            id="quote-swiper"
        >
            <SwiperSlide className={slideStyling}>
                <div className="pb-32">
                    {'"'}Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                    obcaecati minus ducimus saepe culpa vitae porro exercitationem tenetur
                    omnis! Sapiente, dignissimos? Perferendis voluptate aut ut porro,
                    earum neque minima sint.{'"'}
                </div>
            </SwiperSlide>
            <SwiperSlide className={slideStyling}>
                <div className="pb-32 ">
                    {'"'}Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                    obcaecati minus ducimus saepe culpa vitae porro exercitationem tenetur
                    omnis! Sapiente, dignissimos? Perferendis voluptate aut ut porro,
                    earum neque minima sint.{'"'}
                </div>
            </SwiperSlide>
            <SwiperSlide className={slideStyling}>
                <div className="pb-32 ">
                    {'"'}Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                    obcaecati minus ducimus saepe culpa vitae porro exercitationem tenetur
                    omnis! Sapiente, dignissimos? Perferendis voluptate aut ut porro,
                    earum neque minima sint.{'"'}
                </div>
            </SwiperSlide>
            <SwiperSlide className={slideStyling}>
                <div className="pb-32 ">
                    {'"'}Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                    obcaecati minus ducimus saepe culpa vitae porro exercitationem tenetur
                    omnis! Sapiente, dignissimos? Perferendis voluptate aut ut porro,
                    earum neque minima sint.{'"'}
                </div>
            </SwiperSlide>
            <div className="absolute bottom-2 flex gap-8 w-fit">
                <div
                    className={`custom-prev swiper-button-prev hover:-translate-x-0.5 ${buttonStyling}`}
                ></div>
                <div
                    className={`custom-next swiper-button-next hover:translate-x-0.5 ${buttonStyling}`}
                ></div>
            </div>
        </Swiper>
    );
}
