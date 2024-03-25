'use client';
import Image from 'next/image';
import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const ProductCard = () => {
    return (
        <div>
            <div className="card w-auto h-full border-0 rounded relative mt-7">
                            <div className="group relative bg-[#F5F5F5] p-5 rounded  ">
                                <figure className=' h-[180px] m-auto   p-0'>
                                    <Image
                                        className=' object-fit px-2  '
                                        src="/images/product/gamepad.png"
                                        alt="card-image"
                                        width={500}
                                        height={500}
                                    />
                                </figure>

                            <div>
                                <button className="w-full transition transform  
             translate-x-8 ease-in-out invisible  
            absolute group-hover:visible right-8 py-1 bottom-0
             bg-[#000000] rounded-b font-medium text-base duration-1000
            text-white group-hover:translate-y-0">Add To Cart</button>
                            </div>
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
        </div>
    );
};

export default ProductCard;