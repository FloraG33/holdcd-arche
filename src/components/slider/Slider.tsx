import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const Slider = () => {

    const t = useTranslations("Supplier");

    return (
        <div className="mb-10">
            <div className="">
              <div className="text-title	text-2xl font-medium">
                {t("supplier-list")}
              </div>
              <span className="w-full bg-minibar h-[2px] block my-5"></span>
            </div>
            <div>
                <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    },
                    768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                    },
                    1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                    },
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
                >
                <SwiperSlide>
                    <Image
                        src="/images/logo-web.jpg"
                        alt="lgo"
                        width={100}
                        height={100}
                        style={{ width: "auto", height: "auto" }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/images/logo-web-white.png"
                        alt="lgo"
                        width={100}
                        height={100}
                        style={{ width: "auto", height: "auto" }}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Image
                        src="/images/logo-web.jpg"
                        alt="lgo"
                        width={100}
                        height={100}
                        style={{ width: "auto", height: "auto" }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                    src="/images/logo-web-white.png"
                    alt="lgo"
                    width={100}
                    height={100}
                    style={{ width: "auto", height: "auto" }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                    src="/images/logo-web.jpg"
                    alt="lgo"
                    width={100}
                    height={100}
                    style={{ width: "auto", height: "auto" }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                    src="/images/logo-web-white.png"
                    alt="lgo"
                    width={100}
                    height={100}
                    style={{ width: "auto", height: "auto" }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                    src="/images/logo-web.jpg"
                    alt="lgo"
                    width={100}
                    height={100}
                    style={{ width: "auto", height: "auto" }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                    src="/images/logo-web.jpg"
                    alt="lgo"
                    width={100}
                    height={100}
                    style={{ width: "auto", height: "auto" }}
                    />
                </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};
