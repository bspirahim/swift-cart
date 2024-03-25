import Image from 'next/image';
import React from 'react';

const CartPage = () => {
    return (
        <div className='max-w-screen-lg mx-auto my-12'>

            <div className="">
                <table className='border-spacing-y-5 border-separate w-full mx-auto '>
                    <thead>
                        <tr className='table-row-shadow rounded'>
                            <th className='w-[40%] text-base font-normal text-[#000000] py-4 px-6 text-left '>Product</th>
                            <th className='text-base font-normal text-[#000000] py-4 px-6 text-left '>Price</th>
                            <th className='text-base font-normal text-[#000000] py-4 px-6 text-left '>Quantity</th>
                            <th className='text-base font-normal text-[#000000] py-4 px-6 text-left '>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='table-row-shadow rounded'>
                            <td className='py-4 px-6 flex items-center justify-start'>
                                <div className='w-14 h-14 flex items-center'>
                                    <Image
                                        className=' object-fit w-full'
                                        src="/images/product/monitor.png"
                                        alt="card-image"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <p className='text-base font-normal pl-4'>LCD Monitor</p>
                            </td>
                            <td className='text-base font-normal text-[#000000] py-4 px-6 text-left '>$650</td>
                            <td className='text-base font-normal text-[#000000] py-4 px-6 text-left '>
                                <div className=''>
                                    <input type="number" name="" id="" className='w-12 h-8 border-[1.5px] p-2 border-[#000000]/40 rounded focus:outline-none' />
                                </div>
                            </td>
                            <td className='text-base font-normal text-[#000000] py-4 px-6 text-left '>$650</td>
                        </tr>
                        <tr className='table-row-shadow rounded'>
                            <td className='py-4 px-6 flex items-center justify-start'>
                                <div className='w-14 h-14 flex items-center'>
                                    <Image
                                        className=' object-fit w-full'
                                        src="/images/product/gamepad.png"
                                        alt="card-image"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <p className='text-base font-normal pl-4'>H1 Gamepad</p>
                            </td>
                            <td className='text-base font-normal text-[#000000] py-4 px-6 text-left '>$650</td>
                            <td className='text-base font-normal text-[#000000] py-4 px-6 text-left '>
                                <div className=''>
                                    <input type="number" name="" id="" className='w-12 h-8 border-[1.5px] p-2 border-[#000000]/40 rounded focus:outline-none' />
                                </div>
                            </td>
                            <td className='text-base font-normal text-[#000000] py-4 px-6 text-left '>$650</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div className='md:flex items-center justify-between px-4 md:px-0'>
                <button className='secondary-btn'>Return To Shop</button>
                <button className='secondary-btn'>Update Cart</button>
            </div>
            <div className='md:mt-24 px-4 md:px-0'>
                <div className='md:flex justify-between items-start'>
                    <div className='flex items-center gap-x-4'>
                        <div className='border md:w-80 h-14 flex items-center rounded border-[#000000] px-4 text-base font-normal text-[#000000]'>Coupon Code</div>
                        <button className='primary-btn'>Apply Coupon</button>
                    </div>
                    <div className='md:w-[40%] w-full border-[1.5px] border-[#000000] rounded p-6 md:mt-0 mt-4'>
                        <h3 className='text-xl font-medium text-[#000000]'>Cart Total</h3>
                        <div>
                            <div className='flex items-center justify-between mt-4 py-1'>
                                <p className='text-base font-normal text-[#000000]'>Subtotal:</p>
                                <p className='text-base font-normal text-[#000000]'>$1750</p>
                            </div>
                            <div className='border-[1px] border-[#000000]'></div>
                            <div className='flex items-center justify-between mt-4 py-1'>
                                <p className='text-base font-normal text-[#000000]'>Subtotal:</p>
                                <p className='text-base font-normal text-[#000000]'>$1750</p>
                            </div>
                            <div className='border-[1px] border-[#000000]'></div>
                            <div className='flex items-center justify-between mt-4 py-2'>
                                <p className='text-base font-normal text-[#000000]'>Total:</p>
                                <p className='text-base font-normal text-[#000000]'>$1750</p>
                            </div>
                            <div className='text-center mt-5'>
                                <button className='primary-btn'>Procees to checkout</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default CartPage;