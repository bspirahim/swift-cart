import Image from 'next/image';
import React from 'react';

const EnhanceProduct = () => {
    return (
        <div className='max-w-screen-lg mx-auto my-12'>
            <div className='bg-[#000000] grid md:grid-cols-2 gap-4'>
                <div className='text-[#FAFAFA] m-auto md:py-10 py-7 text-center md:text-start'>
                    <div className='flex items-center justify-center md:justify-start space-x-2 '>

                        <p className='font-semibold text-sm leading-6 pb-5 text-[#00FF66]'>Categories</p>
                    </div>
                    <h1 className='tracking-normal  font-semibold text-5xl leading-tight pb-1'>Enhance Your <br />Music Experience</h1>
                    <div className='flex items-center justify-arround space-x-4 py-3'>
                        <div className='bg-white rounded-full w-16 h-16 text-center p-2'>
                            <p className='text-black font-semibold text-base'>23</p>
                            <p className='text-black font-normal text-xs'>Hours</p>
                        </div>
                        <div className='bg-white rounded-full w-16 h-16 text-center p-2'>
                            <p className='text-black font-semibold text-base'>05</p>
                            <p className='text-black font-normal text-xs'>Days</p>
                        </div>
                        <div className='bg-white rounded-full w-16 h-16 text-center p-2'>
                            <p className='text-black font-semibold text-base'>59</p>
                            <p className='text-black font-normal text-xs'>Minutes</p>
                        </div>
                        <div className='bg-white rounded-full w-16 h-16 text-center p-2'>
                            <p className='text-black font-semibold text-base'>35</p>
                            <p className='text-black font-normal text-xs'>Seconds</p>
                        </div>
                    </div>
                    <div className='pt-3'>
                        <button className="bg-[#00FF66] hover:bg-[#1ad766] py-4 px-12 rounded text-[#FAFAFA] text-base font-medium">Buy Now!</button>
                    </div>
                </div>
                <div className='shadow-lg m-5 pb-5'>
                    <Image width={500} height={500} className='w-full p-5 text-[#FAFAFA]' src="/images/product/speaker2.png" alt="banner-image" />
                </div>
            </div>
        </div>
    );
};

export default EnhanceProduct;