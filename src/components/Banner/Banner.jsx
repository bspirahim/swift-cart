/* eslint-disable react/jsx-key */
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

const Banner = () => {
    const category = [
        {
            name: 'Woman’s Fashion',
        },
        {
            name: 'Men’s Fashion',
        },
        {
            name: 'Electronics',
        },
        {
            name: 'Home & Lifestyle',
        },
        {
            name: 'Medicine',
        },
        {
            name: 'Sports & Outdoor',
        },
        {
            name: 'Baby’s & Toys',
        },
        {
            name: 'Groceries & Pets',
        },
        {
            name: 'Health & Beauty',
        },
        {
            name: 'Arts & Crafts',
        },
        {
            name: 'Automotive & Motorbike',
        },
        
       
        


    ]
    return (
        <div className='max-w-screen-lg mx-auto'>
            <div className='md:grid md:grid-cols-5 md:mt-5'>
                <div className="border  shadow-lg rounded-lg md:mt-4 md:me-7 md:py-2">
                    <div className=' md:block flex gap-4 overflow-x-scroll no-scrollbar px-3 md:px-0 bg-[#DB4444] md:bg-white duration-500 '>
                        {
                            category?.map(item => <li className='list-none  text-nowrap font-normal text-sm leading-6 md:text-[#000000] md:py-[2px] py-2  px-2 hover:shadow md:hover:text-[#DB4444] text-white md:hover:bg-gray-200'>
                            <Link className='' href=''>{item.name}</Link>
                            </li>)
                        }
                    </div>

                </div>
                <div className="md:row-span-4 md:col-span-4">
                    <div className=''>
                        <Swiper
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="grid md:grid-cols-2 gap-4 md:mt-4   bg-[rgb(0,0,0)] w-full md:h-80 md:rounded-lg">
                                    <div className='text-[#FAFAFA] m-auto md:py-0 py-7 text-center md:text-start'>
                                        <div className='flex items-center justify-center md:justify-start space-x-2 '>
                                            <Image width={100} height={100} className='md:w-10 md:h-12 w-5 h-6' src="/images/banner/apple.png" alt="" />
                                            <p className='font-normal text-base leading-6 '>iPhone 14 Series</p>
                                        </div>
                                        <h1 className='tracking-normal leading-normal font-semibold text-5xl'>Up to 10% <br /> off Voucher</h1>
                                        <div className='flex items-center space-x-2 justify-center md:justify-start'>
                                            <p className='font-medium text-sm leading-6 border-b'>Shop Now</p>
                                            <ion-icon name="return-down-forward-outline" />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <Image width={500} height={500} className='w-full m-auto text-[#FAFAFA] rounded-lg' src="/images/banner/banner.png" alt="banner-image" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="grid md:grid-cols-2 gap-4 md:mt-4   bg-[rgb(0,0,0)] w-full md:h-80 md:rounded-lg">
                                    <div className='text-[#FAFAFA] m-auto md:py-0 py-7 text-center md:text-start'>
                                        <div className='flex items-center justify-center md:justify-start space-x-2 '>
                                            <Image width={100} height={100} className='md:w-10 md:h-12 w-5 h-6' src="/images/banner/apple.png" alt="" />
                                            <p className='font-normal text-base leading-6 '>iPhone 14 Series</p>
                                        </div>
                                        <h1 className='tracking-normal leading-normal font-semibold text-5xl'>Up to 10% <br /> off Voucher</h1>
                                        <div className='flex items-center space-x-2 justify-center md:justify-start'>
                                            <p className='font-medium text-sm leading-6 border-b'>Shop Now</p>
                                            <ion-icon name="return-down-forward-outline" />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <Image width={500} height={500} className='w-full m-auto text-[#FAFAFA] rounded-lg' src="/images/banner/banner.png" alt="banner-image" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="grid md:grid-cols-2 gap-4 md:mt-4   bg-[rgb(0,0,0)] w-full md:h-80 md:rounded-lg">
                                    <div className='text-[#FAFAFA] m-auto md:py-0 py-7 text-center md:text-start'>
                                        <div className='flex items-center justify-center md:justify-start space-x-2 '>
                                            <Image width={100} height={100} className='md:w-10 md:h-12 w-5 h-6' src="/images/banner/apple.png" alt="" />
                                            <p className='font-normal text-base leading-6 '>iPhone 14 Series</p>
                                        </div>
                                        <h1 className='tracking-normal leading-normal font-semibold text-5xl'>Up to 10% <br /> off Voucher</h1>
                                        <div className='flex items-center space-x-2 justify-center md:justify-start'>
                                            <p className='font-medium text-sm leading-6 border-b'>Shop Now</p>
                                            <ion-icon name="return-down-forward-outline" />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <Image width={500} height={500} className='w-full m-auto text-[#FAFAFA] rounded-lg' src="/images/banner/banner.png" alt="banner-image" />
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;