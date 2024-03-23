'use client';

import { FaCaretDown } from "react-icons/fa";
import Image from 'next/image';
import { useState } from "react";
import Link from "next/link";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='shadow-sm '>
            <div className='md:flex items-center justify-between  py-3 max-w-screen-lg mx-auto px-3 md:px-0'>

                <div className='flex items-center justify-between gap-x-2'>
                    <div className='flex items-center gap-2'>
                        <div className='md:hidden text-2xl z-50 cursor-pointer' onClick={() => setOpen(!open)}>
                            <ion-icon name={`${open ? 'close' : 'menu'}`} ></ion-icon>
                        </div>
                        <span className='flex'> <span className='p-0 m-0 text-red-500'><FaCaretDown /></span> <span className='md:text-2xl text-xl font-bold leading-6 text-[#000000]'>Swift <span className='text-red-500'>_</span> Cart</span></span>
                    </div>

                    <div className='flex md:hidden space-x-2'>
                        <ion-icon name="heart-outline" />
                        <ion-icon  name="cart-outline" />
                    </div>
                </div>
                <ul className='md:flex hidden'>
                    <li>
                        <Link href='/' className='font-normal text-base leading-6 text-[#000000] mx-3 '>Home</Link>
                        <Link href='' className='mx-3 font-normal text-base leading-6 text-[#000000]'>Contact</Link>
                        <Link href='/about' className='mx-3 font-normal text-baseleading-6 text-[#000000]'>About</Link>
                        <Link href='/signUp' className='mx-3 font-normal text-base leading-6 text-[#000000]'>Sign Up</Link>
                    </li>
                </ul>

                <div className='md:flex items-center justify-between md:space-x-4'>
                    <div className=' md:w-[243px] w-full py-2'>
                        <form className=''>
                            <label htmlFor="search" className="mb-2 text-sm font-medium text-black sr-only dark:text-white">Search</label>
                            <div className="relative">

                                <input type="search" id="search" className="block w-full py-2 px-3 pe-6 rounded text-[#000000] bg-[#F5F5F5] focus:outline-none font-normal  text-xs" placeholder="What are you loking for?" required />

                                <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none ">
                                <ion-icon name="search-outline" />
                                </div>

                            </div>
                        </form>
                    </div>
                    <div className='md:flex hidden md:space-x-2'>
                        <span className="text-xl"><ion-icon name="heart-outline" /></span>
                        <span className="text-xl"><ion-icon name="cart-outline" /></span>
                    </div>
                </div>





                {/*mobile device*/}
                <ul className={`
                md:hidden bg-gray-500 z-10 absolute w-3/4 h-full bottom-0 py-12 pl-4 duration-500 ${open ? 'left-0' : 'left-[-100%]'}
                
                `}>
                    <li className="flex flex-col">
                        <Link href='' className=' font-normal text-base leading-6 text-[#000000] mx-3 '>Home</Link>
                        <Link href='' className='mx-3 font-normal text-base leading-6 text-[#000000]'>Contact</Link>
                        <Link href='' className='mx-3 font-normal text-baseleading-6 text-[#000000]'>About</Link>
                        <Link href='/signUp' className='mx-3 font-normal text-base leading-6 text-[#000000]'>Sign Up</Link>
                    </li>
                </ul>
            </div>
            <hr />
        </nav>
    );
};

export default Header;