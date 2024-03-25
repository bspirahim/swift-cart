import Link from 'next/link';
import React from 'react';

const ContactPage = () => {
    return (
        <div className='max-w-screen-lg mx-auto md:my-12'>
            <div className='space-x-2 mb-10'>
                <Link href='/' className='text-[#000000]/30'>Home</Link><span>/</span><span>Contact</span>
            </div>
            <div className='md:flex items-start justify-between gap-10'>
                <div className='md:w-2/4 w-full shadow-md m-4 md:m-0 py-4 px-4 rounded'>
                    <div className='p-4 md:p-0'>
                        <div className='flex items-center gap-4 mb-2'>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="40" height="40" rx="20" fill="#DB4444" />
                                <path d="M18.5542 14.24L15.1712 10.335C14.7812 9.885 14.0662 9.887 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0194 22.6566 23.0353C22.5567 23.0512 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8502 17.0052 17.619C16.9573 17.5298 16.9399 17.4272 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z" stroke="white" strokewidth="{1.5}" strokelinecap="round" strokelinejoin="round" />
                            </svg>
                            <p className='text-base font-medium text-[#000000]'>Call To Us</p>
                        </div>
                        <p className='text-sm font-normal text-[#000000] py-2'>We are available 24/7, 7 days a week.</p>
                        <p className='text-sm font-normal text-[#000000] py-2'>Phone: +8801611112222</p>
                    </div>
                    <div className='border-[1px] border-[#000000] my-3'></div>
                    <div>
                        <div className='flex items-center gap-4 mb-2'>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="40" height="40" rx="20" fill="#DB4444" />
                                <path d="M10 13L20 20L30 13M10 27H30V13H10V27Z" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className='text-base font-medium text-[#000000]'>Call To Us</p>
                        </div>
                        <p className='text-sm font-normal text-[#000000] py-2'>Fill out our form and we will contact you within 24 hours.</p>
                        <p className='text-sm font-normal text-[#000000] py-2'>Emails: customer@exclusive.com</p>
                        <p className='text-sm font-normal text-[#000000] py-2'>Emails: customer@exclusive.com</p>

                    </div>
                </div>
                <div className='w-full shadow-md py-4 px-4  rounded'>
                    <div className='flex items-center justify-between gap-4 md:m-4'>
                        <div>
                            <input type="text" id="first_name" name="first_name" className="mt-1 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-500 rounded p-3 bg-[#FAFAFA]" placeholder='Your Name*' />
                        </div>
                        <div>
                            <input type="email" id="first_name" name="first_name" className="mt-1 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-500 rounded p-3 bg-[#FAFAFA]" placeholder='Your Email*' />
                        </div>
                        <div>
                            <input type="number" id="first_name" name="first_name" className="mt-1 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-500 rounded p-3 bg-[#FAFAFA]" placeholder='Your Phone*' />
                        </div>
                    </div>
                    <div className='md:m-4 mt-4 md:mt-0'>
                        <textarea id="w3review" name="w3review" rows={6} cols={50} className="mt-1 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-500 rounded p-3 bg-[#FAFAFA]" placeholder='Your Message' >
                        </textarea>
                    </div>
                    <div className='flex items-end justify-end mt-5 mb-2 mx-4'>
                        <button className='primary-btn'>Send Massage</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;