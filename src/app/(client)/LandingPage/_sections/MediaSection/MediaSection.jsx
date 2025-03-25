'use client'

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import test from '../../../../../../public/assets/7.webp'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const data = [
    {
        img: test,
        link: "https://yourstory.com/2024/12/decentralising-indias-digital-landscape-innovation",
        title: "Bengaluru Tech Summit '24",
        desc: "Future of India's tourism: Innovations in open networks and digital infrastructure"
    },
    {
        img: test,
        link: "https://www.deccanherald.com/india/karnataka/karnataka-budget-cm-proposes-to-leverage-coastal-heritage-tourism-3436568",
        title: "Karnataka Budget Announcement ",
        desc: "OneTAC (tourism, art and culture) digital grid will be used to collect complete information about popular tourist spots in the state."
    },
    {
        img: test,
        link: "https://www.youtube.com/watch?v=jcm_LlRuH9Q",
        title: "Panel Discussion on OneTAC",
        desc: "Industry leaders and change-makers discussing the potential of OneTAC"
    },
    {
        img: test,
        link: "https://www.youtube.com/watch?v=jcm_LlRuH9Q",
        title: "Panel Discussion on OneTAC",
        desc: "Industry leaders and change-makers discussing the potential of OneTAC"
    },
]

export default function App() {
    const [isPrevButtonFaded, setIsPrevButtonFaded] = useState(true);

    return (
        <div className='px-4 py-10 lg:py-24 md:p-8 lg:p-16 relative'>
            <div className='flex items-center gap-4 mb-12 md:mb-16'>
                <span className='flex-1 h-0.5 bg-gray-400 rounded'></span>
                <h1 className='whitespace-nowrap text-[var(--brown)] text-2xl md:text-4xl font-bold px-4'>News & Media</h1>
                <span className='flex-1 h-0.5 bg-gray-400 rounded'></span>
            </div>
            <Swiper
                breakpoints={{
                    640: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    },
                }}
                loop={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: '.custom-next-button',
                    prevEl: '.custom-prev-button',
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
                onNavigationPrev={() => setIsPrevButtonFaded(false)}
            >
                {
                    data.map((item, key) => (
                        <SwiperSlide key={key}>
                            <Link href={item.link} target="_blank" rel='noreferrer'>
                                <div className='flex flex-col gap-2'>
                                    <div className="h-[15rem] overflow-hidden rounded-2xl">
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            width={400}
                                            height={400}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <b>{item.title}</b>
                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))
                }

                <div className="custom-next-button absolute z-10 right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </div>
                <div className={`custom-prev-button absolute z-10 left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-opacity duration-500 ${isPrevButtonFaded ? 'opacity-20' : 'opacity-100'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </div>
            </Swiper>
        </div>
    );
}