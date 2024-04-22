import Image from 'next/image';
import React from 'react';
import Services from '../Services/Services';

const Featured = () => {
    return (
        <div className='max-w-screen-lg mx-auto my-10 px-3 md:px-0'>
            <div className=''>
                <div className='flex items-center gap-4'>
                    <div className='w-[20px] h-[40px] bg-[#DB4444] rounded'></div>
                    <h1 className='font-semibold text-base text-[#DB4444]'>Featured</h1>
                </div>
                <div className='flex items-center justify-between py-4'>
                    <div className='flex items-end space-x-16'>
                        <h1 className='md:font-semibold md:text-4xl'>New Arrival</h1>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 my-5">
                <div className='relative'>
                    <Image width={500} height={500} className='w-full text-[#FAFAFA]' src="/images/product/speaker.jpg" alt="banner-image" />
                    <div className='absolute bottom-7 left-7 '>
                        <p className='text-[#FAFAFA] text-2xl font-semibold'>PlayStation 5</p>
                        <p className='font-normal text-sm py-1.5 text-[#FAFAFA]'>Black and White version of the PS5 <br /> coming out on sale.</p>

                        <button className=' underline underline-offset-4 text-base font-medium text-[#FAFAFA]'>Shop Now</button>
                    </div>
                </div>
                <div className='grid grid-rows-2 gap-3'>
                    <div className='relative'>
                        <Image width={500} height={500} className='w-full text-[#FAFAFA]' src="/images/product/women.png" alt="banner-image" />
                        <div className='absolute bottom-7 left-7 '>
                            <p className='text-[#FAFAFA] text-2xl font-semibold'>Women’s Collections</p>
                            <p className='font-normal text-sm py-1.5 text-[#FAFAFA]'>Featured woman collections that <br /> give you another vibe.</p>

                            <button className=' underline underline-offset-4 text-base font-medium text-[#FAFAFA]'>Shop Now</button>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='relative'>
                            <Image width={500} height={500} className='w-full text-[#FAFAFA]' src="/images/product/speaker-3.png" alt="banner-image" />
                            <div className='absolute bottom-7 left-7 '>
                                <p className='text-[#FAFAFA] text-2xl font-semibold'>Speakers</p>
                                <p className='font-normal text-sm py-1 text-[#FAFAFA]'>Amazon wireless speakers</p>

                                <button className=' underline underline-offset-4 text-base font-medium text-[#FAFAFA]'>Shop Now</button>
                            </div>
                        </div>
                        <div className='relative'>
                            <Image width={500} height={500} className='w-full text-[#FAFAFA]' src="/images/product/perfume.png" alt="banner-image" />
                            <div className='absolute bottom-7 left-7 '>
                                <p className='text-[#FAFAFA] text-2xl font-semibold'>Perfume</p>
                                <p className='font-normal text-sm py-1 text-[#FAFAFA]'>GUCCI INTENSE OUD EDP</p>

                                <button className=' underline underline-offset-4 text-base font-medium text-[#FAFAFA]'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Services></Services>
        </div>
    );
};

export default Featured;