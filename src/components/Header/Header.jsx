'use client';

import { FaCaretDown, FaFacebookF, FaInstagram, FaLinkedinIn, FaRegUser, FaTwitter } from "react-icons/fa";
import Image from 'next/image';
import React, { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Free Shipping for All orders valued at $200+', 'Download our mobile app for exclusive offers, notifications, and real time order updates'];

const Header = () => {
    const [open, setOpen] = useState(false);
    const { data: session } = useSession();

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <nav className='shadow-sm '>
            <div className="bg-[#DB4444] md:py-2.5 py-3 hidden md:block">
                <div className="max-w-screen-lg mx-auto text-[#FAFAFA] md:flex items-center justify-between">
                    <div className='md:flex items-center hidden space-x-2'>
                        <FaFacebookF className='text-md cursor-pointer' />
                        <FaTwitter className='text-md cursor-pointer' />
                        <FaInstagram className='text-md cursor-pointer' />
                        <FaLinkedinIn className='text-md cursor-pointer' />
                    </div>
                    <div className="flex items-center text-center text-sm md:font-bold p-1 underline underline-offset-2">
                        <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                    </div>
                    <div className="hidden md:flex items-center cursor-pointer space-x-1">
                        <p className="text-sm">Bangladesh(USD$)</p>
                        <ion-icon name="chevron-down-outline" />
                    </div>
                </div>
            </div>
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
                        <ion-icon name="cart-outline" />
                    </div>
                </div>
                <ul className='md:flex hidden'>
                    <li>
                        <Link href='/' className='font-normal text-base leading-6 text-[#000000] mx-3 '>Home</Link>
                        <Link href='/contact' className='mx-3 font-normal text-base leading-6 text-[#000000]'>Contact</Link>
                        <Link href='/about' className='mx-3 font-normal text-baseleading-6 text-[#000000]'>About</Link>
                        <Link href='/signUp' className='mx-3 font-normal text-base leading-6 text-[#000000]'>Sign Up</Link>
                    </li>
                </ul>

                <div className='md:flex items-center justify-between md:space-x-4'>
                    <div className=' md:w-[243px] w-full py-2'>
                        <form className=''>
                            <label htmlFor="search" className="mb-2 text-sm font-medium text-black sr-only dark:text-white">Search</label>
                            <div className="relative">

                                <input type="text" id="search" className="block w-full py-2 px-3 pe-6 rounded text-[#000000] bg-[#F5F5F5] focus:outline-none font-normal  text-xs" placeholder="What are you loking for?" required />

                                <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none ">
                                    <ion-icon name="search-outline" />
                                </div>

                            </div>
                        </form>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className='md:flex hidden md:space-x-2'>
                            <Link href='/wishlist' className="text-xl cursor-pointer"><ion-icon name="heart-outline" /></Link>
                            <Link href='/cart' className="text-xl cursor-pointer"><ion-icon name="cart-outline" /></Link>
                        </div>
                        {!session ? (
                            <></>
                        ) : (
                            <>
                                <div className="space-x-2">

                                    <div className="relative inline-block text-left">
                                        <button onClick={toggleDropdown}>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="32" height="32" rx="16" fill="#DB4444" />
                                                <path d="M21 23V21.3333C21 20.4493 20.691 19.6014 20.1408 18.9763C19.5907 18.3512 18.8446 18 18.0667 18H12.9333C12.1554 18 11.4093 18.3512 10.8592 18.9763C10.309 19.6014 10 20.4493 10 21.3333V23" stroke="white" strokewidth="{1.5}" strokelinecap="round" strokelinejoin="round" />
                                                <path d="M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z" stroke="white" strokewidth="{1.5}" strokelinecap="round" strokelinejoin="round" />
                                            </svg>
                                        </button>
                                        {isOpen && (
                                            <div
                                                className="origin-top-right z-10 absolute right-0 w-56 rounded-none shadow-lg bg-transparent/30  backdrop-blur-2xl ring-1 ring-black ring-opacity-5"
                                                role="menu"
                                                aria-orientation="vertical"
                                                aria-labelledby="options-menu"
                                            >
                                                <div className="py-1" role="none">
                                                    {/* Dropdown items */}
                                                    <Link
                                                        href="/profile"
                                                        className="flex items-center  px-4 py-1  text-sm font-normal text-[#FAFAFA] gap-2"
                                                        role="menuitem"
                                                    >
                                                        <svg width="32" height="32" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g filter="url(#filter0_d_3004_4695)">
                                                                <path d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27" stroke="#FAFAFA" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z" stroke="#FAFAFA" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                                                            </g>
                                                            <defs>
                                                                <filter id="filter0_d_3004_4695" x="-4" y="0" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dy="4" />
                                                                    <feGaussianBlur stdDeviation="2" />
                                                                    <feComposite in2="hardAlpha" operator="out" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3004_4695" />
                                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3004_4695" result="shape" />
                                                                </filter>
                                                            </defs>
                                                        </svg>
                                                        Manage My Account
                                                    </Link>
                                                    <Link
                                                        href="#"
                                                        className="flex items-center  px-4 py-1  text-sm font-normal text-[#FAFAFA] gap-4"
                                                        role="menuitem"
                                                    >
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M3 6.3V20.5C3 20.7652 3.10536 21.0196 3.29289 21.2071C3.48043 21.3946 3.73478 21.5 4 21.5H20C20.2652 21.5 20.5196 21.3946 20.7071 21.2071C20.8946 21.0196 21 20.7652 21 20.5V6.3H3Z" stroke="#FAFAFA" strokewidth="{1.5}" strokelinejoin="round" />
                                                            <path d="M21 6.3L18.1665 2.5H5.8335L3 6.3M15.7775 9.6C15.7775 11.699 14.0865 13.4 12 13.4C9.9135 13.4 8.222 11.699 8.222 9.6" stroke="#FAFAFA" strokewidth="{1.5}" strokelinecap="round" strokelinejoin="round" />
                                                        </svg>
                                                        My Order
                                                    </Link>
                                                    <Link
                                                        href="#"
                                                        className="flex items-center  px-4 py-1  text-sm font-normal text-[#FAFAFA] gap-4"
                                                        role="menuitem"
                                                    >
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clippath="url(#clip0_3004_4706)">
                                                                <path d="M8 16L12 12M16 8L11.9992 12M11.9992 12L8 8M12 12L16 16" stroke="#FAFAFA" strokewidth="{1.5}" strokelinecap="round" strokelinejoin="round" />
                                                                <circle cx="12" cy="12" r="11.25" stroke="white" strokewidth="{1.5}" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_3004_4706">
                                                                    <rect width="24" height="24" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                        My Cancellations
                                                    </Link>
                                                    <Link
                                                        href="#"
                                                        className="flex items-center  px-4 py-1  text-sm font-normal text-[#FAFAFA] gap-4"
                                                        role="menuitem"
                                                    >
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M15.8726 9.93621H19.8284C20.4517 9.93621 20.7176 10.7286 20.2205 11.1046L16.8905 13.6234C16.1688 14.1693 15.8661 15.1087 16.1334 15.9732L17.3864 20.0261C17.5735 20.6312 16.8729 21.1193 16.3701 20.7341L13.3075 18.3879C12.536 17.7969 11.464 17.7969 10.6925 18.3879L7.61357 20.7466C7.11152 21.1312 6.41161 20.645 6.59677 20.0403L7.83243 16.0046C8.09532 15.146 7.79694 14.2145 7.08413 13.6684L3.73432 11.1022C3.24111 10.7244 3.50831 9.93621 4.12961 9.93621H8.12744C9.07024 9.93621 9.90305 9.32198 10.1815 8.42124L11.379 4.5479C11.5678 3.93721 12.4322 3.93722 12.621 4.5479L13.8185 8.42124C14.0969 9.32198 14.9298 9.93621 15.8726 9.93621Z" stroke="#FAFAFA" strokewidth="{1.5}" />
                                                        </svg>
                                                        My Reviews
                                                    </Link>
                                                    <button
                                                        onClick={() => { signOut() }}
                                                        className="flex items-center  px-4 py-1  text-sm font-normal text-[#FAFAFA] gap-4"
                                                        role="menuitem"
                                                    >
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4 12H13.5M6 15L3 12L6 9M11 7V6C11 5.46957 11.2107 4.96086 11.5858 4.58579C11.9609 4.21071 12.4696 4 13 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H13C12.4696 20 11.9609 19.7893 11.5858 19.4142C11.2107 19.0391 11 18.5304 11 18V17" stroke="#FAFAFA" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        Logout
                                                    </button>

                                                </div>
                                            </div>
                                        )}
                                    </div>

                                </div>
                            </>
                        )}
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