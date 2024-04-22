import Image from 'next/image';
import React from 'react';
import { FaCaretDown, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#000000]'>
            <footer className="footer py-10  text-white max-w-screen-lg mx-auto">
                <aside className=''>
                    <h1 className='text-2xl font-bold leading-6'>Swift-Cart</h1>
                    <p className='text-xl font-medium text-[#FAFAFA]'>Subscribe</p>
                    <p className='text-base font-normal text-[#FAFAFA]'>Get 10% off Your first Order</p>
                    <div className="w-full">
                        <div className="relative">

                            <input type="email" id="search" className="block w-full py-2 px-3 pe-6 rounded border text-[#F5F5F5] bg-[#000000] focus:outline-none font-normal  text-xs" placeholder="Enter Your Email" required />

                            <div className="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer ">
                                <ion-icon name="send-outline" />
                            </div>

                        </div>
                    </div>
                </aside>
                <nav>
                    <h6 className=" text-xl font-medium text-[#FAFAFA]">Support</h6>
                    <p className="className='text-base font-normal text-[#FAFAFA]">111 Bijoy sarani, Dhaka,<br />  DH 1515, Bangladesh.</p>
                    <p className="className='text-base font-normal text-[#FAFAFA]">swiftcart@gmail.com</p>
                    <p className="className='text-base font-normal text-[#FAFAFA]">+880 1716289767</p>
                </nav>
                <nav>
                    <h6 className=" text-xl font-medium text-[#FAFAFA]">Account</h6>
                    <a className="className='text-base font-normal text-[#FAFAFA]">My Account</a>
                    <a className="className='text-base font-normal text-[#FAFAFA]">Login / Register</a>
                    <a className="className='text-base font-normal text-[#FAFAFA]">Cart</a>
                    <a className="className='text-base font-normal text-[#FAFAFA]">Wishlist</a>
                    <a className="className='text-base font-normal text-[#FAFAFA]">Shop</a>
                </nav>
                <nav>
                    <h6 className=" text-xl font-medium text-[#FAFAFA]">Quick Link</h6>
                    <a className="className='text-base font-normal text-[#FAFAFA]">Privacy Policy</a>
                    <a className="className='text-base font-normal text-[#FAFAFA]">Terms Of Use</a>
                    <a className="className='text-base font-normal text-[#FAFAFA]">FAQ</a>
                    <a className="className='text-base font-normal text-[#FAFAFA]">Contact</a>
                </nav>
                <nav>
                    <h6 className=" text-xl font-medium text-[#FAFAFA]">Download App</h6>
                    <small className="text-xs font-medium text-[#FAFAFA]">Save $3 with App New User Only</small>
                    <div className='flex items-center gap-3'>
                        <div>
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                <rect x="0.75" y="0.75" width="78.5" height="78.5" fill="url(#pattern0)" stroke="white" strokewidth="{2.5}" />
                                <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use href="#image0_1033_4057" transform="scale(0.00757576)" />
                                    </pattern>
                                    <image id="image0_1033_4057" width="132" height="132" href="data:image/jpeg;base64,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" />
                                </defs>
                            </svg>
                        </div>
                        <div>
                            <Image className='w-[104px] h-[40px]'
                                src="/images/icon/GooglePlay.png"
                                alt="Picture of the author"
                                width={1000}
                                height={1000}
                            />
                            <Image className='w-[104px] h-[40px]'
                                src="/images/icon/AppStore.png"
                                alt="Picture of the author"
                                width={1000}
                                height={1000}
                            />
                        </div>

                    </div>
                    <div className='flex items-center justify-between space-x-6 mt-1'>
                        <FaFacebookF className='text-xl cursor-pointer' />
                        <FaTwitter className='text-xl cursor-pointer' />
                        <FaInstagram className='text-xl cursor-pointer' />
                        <FaLinkedinIn className='text-xl cursor-pointer' />


                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;