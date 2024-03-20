import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Login = () => {
    return (
        <div className='my-12'>
            <div className='grid md:grid-cols-2 items-center gap-4'>
                <div>
                    <Image
                        src="/images/auth/auth-img.png"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        priority
                    />
                </div>
                <div className='md:w-9/12 w-full px-5'>
                    <div className=''>
                        <h1 className='text-4xl font-medium text-[#000000]'>Log in to Swift-Cart</h1>
                        <p className='text-base font-normal text-[#000000] pt-6'>Enter your details below</p>
                    </div>
                    <div className='mt-5'>
                        <div className='py-2'>
                            <input type="email" className="w-full py-2  border-b border-[#000000]/30 focus:outline-none focus:border-[#000000]" placeholder="Enter Your Email" />
                        </div>
                        <div className='py-2'>
                            <input type="password" className="w-full py-2  border-b border-[#000000]/30 focus:outline-none focus:border-[#000000]" placeholder="Enter Your Password" />
                        </div>
                        <div className='mt-5 flex items-center justify-between'>
                            <button className=" my-2  bg-[#DB4444] hover:bg-[#E07575] py-2 px-12 rounded text-[#FAFAFA] text-base font-medium">Login</button>
                            <p className='text-[#DB4444] text-base font-normal cursor-pointer'>Forgot Password?</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;