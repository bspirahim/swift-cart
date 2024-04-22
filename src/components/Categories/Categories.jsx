/* eslint-disable react/jsx-no-undef */
'use client';
import { FaArrowLeft, FaArrowRight, FaRegStar, FaStar } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useState } from "react";
import Image from "next/image";
import Rating from "react-rating";



const Categories = () => {
    const [prevEl, setPrevEl] = useState(null)
    const [nextEl, setNextEl] = useState(null)
    return (
        <div className='max-w-screen-lg mx-auto my-10 px-3 md:px-0'>
            <div className=''>
                <div className='flex items-center gap-4'>
                    <div className='w-[20px] h-[40px] bg-[#DB4444] rounded'></div>
                    <h1 className='font-semibold text-base text-[#DB4444]'>Categories</h1>
                </div>
                <div className='flex items-center justify-between py-4'>
                    <div className='flex items-end space-x-16'>
                        <h1 className='md:font-semibold md:text-4xl'>Browse By Categories</h1>

                    </div>
                    <div className='flex items-center space-x-2'>
                        <span ref={(node) => setPrevEl(node)} className='bg-[#F5F5F5] p-2 rounded-full  cursor-pointer '><FaArrowLeft /></span>

                        <span ref={(node) => setNextEl(node)} className='bg-[#F5F5F5] p-2 rounded-full cursor-pointer '><FaArrowRight /></span>
                    </div>
                </div>

            </div>

            <>
                <Swiper
                    breakpoints={{
                        576: {
                          width: 576,
                          slidesPerView: 2,
                          spaceBetween:20
                        },
                        768: {
                          width: 768,
                          slidesPerView: 2,
                          spaceBetween:20
                        },
                        1024: {
                          width: 1024,
                          slidesPerView: 6,
                          spaceBetween:20
                        },
                      }}
                    navigation={{
                        prevEl,
                        nextEl
                    }}

                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="border border-[#000000]/30 transition ease-in-out hover:-translate-y-1 hover:scale-90 w-full h-[130px] rounded text-center my-5 mb-10 cursor-pointer hover:shadow-lg duration-300">
                            <div className="w-14 h-14 m-auto py-6">
                                <Image
                                    className='object-fit'
                                    src="/images/category/Category-CellPhone.png"
                                    alt="category-image"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <p className="text-base font-normal text-[#000000] mt-7">Phones</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="border border-[#000000]/30 transition ease-in-out hover:-translate-y-1 hover:scale-90 w-full h-[130px] rounded text-center my-5 mb-10 cursor-pointer hover:shadow-lg duration-300">
                            <div className="w-14 h-14 m-auto py-6">
                                <Image
                                    className='object-fit'
                                    src="/images/category/Category-computer.png"
                                    alt="category-image"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <p className="text-base font-normal text-[#000000] mt-7">Computer</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="border border-[#000000]/30 transition ease-in-out hover:-translate-y-1 hover:scale-90 w-full h-[130px] rounded text-center my-5 mb-10 cursor-pointer hover:shadow-lg duration-300">
                            <div className="w-14 h-14 m-auto py-6">
                                <Image
                                    className='object-fit'
                                    src="/images/category/Category-SmartWatch.png"
                                    alt="category-image"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <p className="text-base font-normal text-[#000000] mt-7">Stopwatch</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="border border-[#000000]/30 transition ease-in-out hover:-translate-y-1 hover:scale-90 w-full h-[130px] rounded text-center my-5 mb-10 cursor-pointer hover:shadow-lg duration-300">
                            <div className="w-14 h-14 m-auto py-6">
                                <Image
                                    className='object-fit'
                                    src="/images/category/Category-Camera.png"
                                    alt="category-image"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <p className="text-base font-normal text-[#000000] mt-7">Camera</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="border border-[#000000]/30 transition ease-in-out hover:-translate-y-1 hover:scale-90 w-full h-[130px] rounded text-center my-5 mb-10 cursor-pointer hover:shadow-lg duration-300">
                            <div className="w-14 h-14 m-auto py-6">
                                <Image
                                    className='object-fit'
                                    src="/images/category/Category-HeadPhone.png"
                                    alt="category-image"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <p className="text-base font-normal text-[#000000] mt-7">HeadPhone</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="border border-[#000000]/30 transition ease-in-out hover:-translate-y-1 hover:scale-90 w-full h-[130px] rounded text-center my-5 mb-10 cursor-pointer hover:shadow-lg duration-300">
                            <div className="w-14 h-14 m-auto py-6">
                                <Image
                                    className='object-fit'
                                    src="/images/category/Category-GamePad.png"
                                    alt="category-image"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <p className="text-base font-normal text-[#000000] mt-7 text-center">Gaming</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="border border-[#000000]/30 transition ease-in-out hover:-translate-y-1 hover:scale-90 w-full h-[130px] rounded text-center my-5 mb-10 cursor-pointer hover:shadow-lg duration-300">
                            <div className="w-14 h-14 m-auto py-6">
                                <Image
                                    className='object-fit'
                                    src="/images/category/Category-CellPhone.png"
                                    alt="category-image"
                                    width={500}
                                    height={500}
                                />
                            <p className="text-base font-normal text-[#000000] mt-2">Phones</p>
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </>
            <div className="w-full border border-[#000000]/30 mt-4"></div>
        </div>

    );
};

export default Categories;