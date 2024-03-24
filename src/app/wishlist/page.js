import ProductCard from '@/components/Product/ProductCard';
import Image from 'next/image';
import React from 'react';

const WishlistPage = () => {
    return (
        <div className='max-w-screen-lg mx-auto my-12'>
            <section className=''>
                <div className='flex items-center justify-between mb-8'>
                    <p>Whishlist(4)</p>
                    <button className='py-4 px-12 rounded text-[#000000] border border-[#000000]/50 text-xl font-normal'>Move All To Bag</button>
                </div>
                <div className='grid md:grid-cols-4 gap-6'>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                </div>
            </section>
            <section className='my-10'>
                <div className='flex items-center justify-between mb-8'>
                <div className='flex items-center gap-4'>
                    <div className='w-[20px] h-[40px] bg-[#DB4444] rounded'></div>
                    <h1 className='font-semibold text-base text-[#DB4444]'>Just For You</h1>
                </div>
                    <button className='py-4 px-12 rounded text-[#000000] border border-[#000000]/50 text-xl font-normal'>See All</button>
                </div>
                <div className="grid md:grid-cols-4 gap-6">
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                </div>
            </section>

        </div>
    );
};

export default WishlistPage;