import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CheckoutPage = () => {
    return (
        <div className='max-w-screen-lg mx-auto md:my-12 my-5'>
            <h1 className='text-4xl font-medium tracking-wide mb-7 text-[#000000]'>Billing Details</h1>
            <div className="grid md:grid-cols-2 gap-10">
                <div className="md:w-3/4 w-full md:p-0 p-4 ">
                    <div className="mb-4">
                        <label htmlFor="first_name" className="block text-base font-normal text-[#000000]">First Name<span className='text-[#DB4444]'>*</span></label>
                        <input type="text" id="first_name" name="first_name" className="mt-1 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-500 rounded p-3 bg-[#FAFAFA]" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="company_name" className="block text-base font-normal text-[#000000]">Company Name</label>
                        <input type="text" id="company_name" name="company_name" className="mt-1 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-500 rounded p-3 bg-[#FAFAFA]" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="street_address" className="block text-base font-normal text-[#000000]">Street Address<span className='text-[#DB4444]'>*</span></label>
                        <input type="text" id="street_address" name="street_address" className="mt-1 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-500 rounded p-3 bg-[#FAFAFA]" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="apartment" className="block text-base font-normal text-[#000000]">Apartment, Floor, etc(optional)</label>
                        <input type="text" id="apartment" name="apartment" className="mt-1 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-500 rounded p-3 bg-[#FAFAFA]" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="town_city" className="block text-base font-normal text-[#000000]">Town/City<span className='text-[#DB4444]'>*</span></label>
                        <input type="text" id="town_city" name="town_city" className="mt-1 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-500 rounded p-3 bg-[#FAFAFA]" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone_number" className="block text-base font-normal text-[#000000]">Phone Number</label>
                        <input type="tel" id="phone_number" name="phone_number" className="mt-1 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-500 rounded p-3 bg-[#FAFAFA]" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-base font-normal text-[#000000]">Email Address<span className='text-[#DB4444]'>*</span></label>
                        <input type="email" id="email" name="email" className="mt-1 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-500 rounded p-3 bg-[#FAFAFA]" />
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" name="" id="" className='form-checkbox text-[#DB4444]' />
                        <p className='text-sm font-normal'>Save this information for faster check-out next time</p>
                    </div>
                </div>
                <div>
                    <div className='md:w-3/4 w-full md:mt-0 mt-4 md:p-0 p-4'>

                        <div>
                            <div className='flex items-center justify-between mt-4 py-1'>
                                <div className=' flex items-center justify-start'>
                                    <div className='w-12 h-12 flex items-center'>
                                        <Image
                                            className=' object-fit w-full'
                                            src="/images/product/monitor.png"
                                            alt="card-image"
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                    <p className='text-base font-normal pl-4'>LCD Monitor</p>
                                </div>
                                <p className='text-base font-normal text-[#000000]'>$650</p>
                            </div>
                            <div className='flex items-center justify-between mt-4 py-1'>
                                <div className=' flex items-center justify-start'>
                                    <div className='w-12 h-12 flex items-center'>
                                        <Image
                                            className=' object-fit w-full'
                                            src="/images/product/gamepad.png"
                                            alt="card-image"
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                    <p className='text-base font-normal pl-4'>H1 Gamepad</p>
                                </div>
                                <p className='text-base font-normal text-[#000000]'>$1100</p>
                            </div>
                            <div className='flex items-center justify-between mt-4 py-1'>
                                <p className='text-base font-normal text-[#000000]'>Subtotal:</p>
                                <p className='text-base font-normal text-[#000000]'>$1750</p>
                            </div>
                            <div className='border-[1px] border-[#000000]'></div>
                            <div className='flex items-center justify-between mt-4 py-1'>
                                <p className='text-base font-normal text-[#000000]'>Shipping:</p>
                                <p className='text-base font-normal text-[#000000]'>Free</p>
                            </div>
                            <div className='border-[1px] border-[#000000]'></div>
                            <div className='flex items-center justify-between mt-4 py-2'>
                                <p className='text-base font-normal text-[#000000]'>Total:</p>
                                <p className='text-base font-normal text-[#000000]'>$1750</p>
                            </div>
                            <div className='flex items-center justify-between my-4'>
                                <div className='flex items-center gap-2'>
                                    <input type="radio" name="" id="" className='' />
                                    <p>Bank</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <div className='w-9 h-4 flex items-center'>
                                        <Image
                                            className=' object-fit w-full cursor-pointer'
                                            src="/images/payment/Bkash.png"
                                            alt="card-image"
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                    <div className='w-9 h-4 flex items-center'>
                                        <Image
                                            className=' object-fit w-full cursor-pointer'
                                            src="/images/payment/Visa.png"
                                            alt="card-image"
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                    <div className='w-9 h-4 flex items-center'>
                                        <Image
                                            className=' object-fit w-full cursor-pointer'
                                            src="/images/payment/Mastercard.png"
                                            alt="card-image"
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                    <div className='w-9 h-4 flex items-center'>
                                        <Image
                                            className=' object-fit w-full cursor-pointer'
                                            src="/images/payment/Nagad.png"
                                            alt="card-image"
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 my-4'>
                                <input type="radio" name="" id="" className='' />
                                <p>Cash on Delivary</p>
                            </div>


                        </div>
                    </div>
                    <div className='md:p-0 p-4'>
                        <div className='flex items-center gap-x-4'>
                            <div className='border md:w-2/4 h-14 flex items-center rounded border-[#000000] px-4 text-base font-normal text-[#000000]'>Coupon Code</div>
                            <button className='primary-btn'>Apply Coupon</button>
                        </div>
                        <div className='mt-2'>
                            <button className='primary-btn'>Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;