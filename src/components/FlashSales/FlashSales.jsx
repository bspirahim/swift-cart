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



const FlashSales = () => {
    const [prevEl, setPrevEl] = useState(null)
    const [nextEl, setNextEl] = useState(null)
    return (
        <div className='max-w-screen-lg mx-auto py-12'>
            <div className=''>
                <div className='flex items-center gap-4'>
                    <div className='w-[20px] h-[40px] bg-[#DB4444] rounded'></div>
                    <h1 className='font-semibold text-base text-[#DB4444]'>Todays</h1>
                </div>
                <div className='flex items-center justify-between py-4'>
                    <div className='flex items-end space-x-16'>
                        <h1 className='md:font-semibold md:text-4xl'>Flash Sales</h1>
                        <div className='flex items-center space-x-4'>
                            <div>
                                <p className='text-xs font-medium text-[#000000]'>Days</p>
                                <div className='flex'>
                                    <span className='text-3xl font-bold space-x-2'>03</span>
                                    <span className='text-[#E07575] ps-3 text-2xl font-semibold '>:</span>
                                </div>
                            </div>
                            <div>
                                <p className='text-xs font-medium text-[#000000]'>Hours</p>
                                <div className='flex'>
                                    <span className='text-3xl font-bold space-x-2'>23</span>
                                    <span className='text-[#E07575] ps-3 text-2xl font-semibold '>:</span>
                                </div>
                            </div>
                            <div>
                                <p className='text-xs font-medium text-[#000000]'>Minutes</p>
                                <div className='flex'>
                                    <span className='text-3xl font-bold space-x-2'>19</span>
                                    <span className='text-[#E07575] ps-3 text-2xl font-semibold '>:</span>
                                </div>
                            </div>
                            <div>
                                <p className='text-xs font-medium text-[#000000]'>Seconds</p>
                                <div className='flex'>
                                    <span className='text-3xl font-bold space-x-2'>56</span>

                                </div>
                            </div>


                        </div>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <span ref={(node) => setPrevEl(node)} className='bg-[#F5F5F5] p-2 rounded-full  cursor-pointer '><FaArrowLeft /></span>

                        <span ref={(node) => setNextEl(node)} className='bg-[#F5F5F5] p-2 rounded-full cursor-pointer '><FaArrowRight /></span>
                    </div>
                </div>
            </div>

            <>
                <Swiper
                slidesPerView={4}
                spaceBetween={30}
                    navigation={{
                        prevEl,
                        nextEl
                    }}

                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                       <div>
                        <h1>card1</h1>
                       </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div>
                        <h1>card2</h1>
                       </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div>
                        <h1>card3</h1>
                       </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div>
                        <h1>card4</h1>
                       </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card w-[250px] h-full border-0 rounded relative mt-7">
                            <div>
                                <figure className='bg-[#F5F5F5] p-16'>
                                    <Image
                                        className='w-[170px] h-[130px] object-cover'
                                        src="/images/product/monitor.png"
                                        alt="card-image"
                                        width={170}
                                        height={130}
                                    />
                                </figure>
                            </div>
                            <div className="absolute w-[55px] h-[26px] top-0 start-0 m-3"><span className='rounded text-[#FAFAFA] text-xs font-normal bg-[#DB4444] py-1.5 px-3'>-30% </span>
                            </div>
                            <div>
                                <div className="absolute top-0 end-0 m-3 rounded-full">
                                    <div className=''>
                                        <p className='bg-[#FAFAFA] p-1  rounded-full w-6 h-6 mb-2' >
                                            <ion-icon name="heart-outline" />
                                        </p>
                                        <p className='bg-[#FAFAFA] p-1 rounded-full w-6 h-6'><ion-icon name="eye-outline" /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body py-2 px-0">

                                <h2 className="card-title font-medium text-base text-[#000000]">IPS LCD Gaming Monitor</h2>
                                <div className='space-x-3'>
                                    <span className='font-medium text-base text-[#DB4444]'>$370</span>
                                    <span>$400</span>
                                </div>
                                <div className="card-actions">
                                    <Rating
                                        placeholderRating={4}
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-[#FFAD33] hover:text-[#FFAD33]'></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    ></Rating>
                                    <span className='text-sm font-semibold text-[#000000]'>(99)</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card w-[250px] h-full border-0 rounded relative mt-7">
                            <div>
                                <figure className='bg-[#F5F5F5]   p-16'>
                                    <Image
                                        className='w-[170px] h-[130px] object-cover'
                                        src="/images/product/monitor.png"
                                        alt="card-image"
                                        width={170}
                                        height={130}
                                    />
                                </figure>
                            </div>
                            <div className="absolute w-[55px] h-[26px] top-0 start-0 m-3"><span className='rounded text-[#FAFAFA] text-xs font-normal bg-[#DB4444] py-1.5 px-3'>-30% </span>
                            </div>
                            <div>
                                <div className="absolute top-0 end-0 m-3 rounded-full">
                                    <div className=''>
                                        <p className='bg-[#FAFAFA] p-1  rounded-full w-6 h-6 mb-2' >
                                            <ion-icon name="heart-outline" />
                                        </p>
                                        <p className='bg-[#FAFAFA] p-1 rounded-full w-6 h-6'><ion-icon name="eye-outline" /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body py-2 px-0">

                                <h2 className="card-title font-medium text-base text-[#000000]">IPS LCD Gaming Monitor</h2>
                                <div className='space-x-3'>
                                    <span className='font-medium text-base text-[#DB4444]'>$370</span>
                                    <span>$400</span>
                                </div>
                                <div className="card-actions">
                                    <Rating
                                        placeholderRating={4}
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-[#FFAD33] hover:text-[#FFAD33]'></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    ></Rating>
                                    <span className='text-sm font-semibold text-[#000000]'>(99)</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card w-[250px] h-full border-0 rounded relative mt-7">
                            <div>
                                <figure className='bg-[#F5F5F5]   p-16'>
                                    <Image
                                        className='w-[170px] h-[130px] object-cover'
                                        src="/images/product/monitor.png"
                                        alt="card-image"
                                        width={170}
                                        height={130}
                                    />
                                </figure>
                            </div>
                            <div className="absolute w-[55px] h-[26px] top-0 start-0 m-3"><span className='rounded text-[#FAFAFA] text-xs font-normal bg-[#DB4444] py-1.5 px-3'>-30% </span>
                            </div>
                            <div>
                                <div className="absolute top-0 end-0 m-3 rounded-full">
                                    <div className=''>
                                        <p className='bg-[#FAFAFA] p-1  rounded-full w-6 h-6 mb-2' >
                                            <ion-icon name="heart-outline" />
                                        </p>
                                        <p className='bg-[#FAFAFA] p-1 rounded-full w-6 h-6'><ion-icon name="eye-outline" /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body py-2 px-0">

                                <h2 className="card-title font-medium text-base text-[#000000]">IPS LCD Gaming Monitor</h2>
                                <div className='space-x-3'>
                                    <span className='font-medium text-base text-[#DB4444]'>$370</span>
                                    <span>$400</span>
                                </div>
                                <div className="card-actions">
                                    <Rating
                                        placeholderRating={4}
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-[#FFAD33] hover:text-[#FFAD33]'></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    ></Rating>
                                    <span className='text-sm font-semibold text-[#000000]'>(99)</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card w-[250px] h-full border-0 rounded relative mt-7">
                            <div>
                                <figure className='bg-[#F5F5F5]   p-16'>
                                    <Image
                                        className='w-[170px] h-[130px] object-cover'
                                        src="/images/product/monitor.png"
                                        alt="card-image"
                                        width={170}
                                        height={130}
                                    />
                                </figure>
                            </div>
                            <div className="absolute w-[55px] h-[26px] top-0 start-0 m-3"><span className='rounded text-[#FAFAFA] text-xs font-normal bg-[#DB4444] py-1.5 px-3'>-30% </span>
                            </div>
                            <div>
                                <div className="absolute top-0 end-0 m-3 rounded-full">
                                    <div className=''>
                                        <p className='bg-[#FAFAFA] p-1  rounded-full w-6 h-6 mb-2' >
                                            <ion-icon name="heart-outline" />
                                        </p>
                                        <p className='bg-[#FAFAFA] p-1 rounded-full w-6 h-6'><ion-icon name="eye-outline" /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body py-2 px-0">

                                <h2 className="card-title font-medium text-base text-[#000000]">IPS LCD Gaming Monitor</h2>
                                <div className='space-x-3'>
                                    <span className='font-medium text-base text-[#DB4444]'>$370</span>
                                    <span>$400</span>
                                </div>
                                <div className="card-actions">
                                    <Rating
                                        placeholderRating={4}
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-[#FFAD33] hover:text-[#FFAD33]'></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    ></Rating>
                                    <span className='text-sm font-semibold text-[#000000]'>(99)</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>

            <div style={{fontFamily:'Poppins'}} className="text-center my-10"><button className="bg-[#DB4444] hover:bg-[#ef3232] py-4 px-12 rounded text-[#FAFAFA] text-base font-medium">View All Products</button></div>
            <hr />
        </div>

    );
};

export default FlashSales;