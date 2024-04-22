'use client';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Login = () => {
    const [error, setError] = useState('');
    const router = useRouter();
    const session = useSession();

    useEffect(() => {
        if (session?.status === 'authenticated') {
            router.replace('/')
        }
    }, [session, router])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        const res = await signIn('credentials', {
            redirect: false,
            email,
            password
        })

        if (res?.error) {
            setError('Invalid email or password');
            if (res?.url){
                router.replace('/');
            } 
        } else {
            setError('');
            toast.success('User Log in Successfully')
        }


    };

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
                    <form className='mt-5' onSubmit={handleSubmit}>
                        <div className='py-2 form-control'>
                            <input type="email" name='email' className="w-full py-2  border-b border-[#000000]/30 focus:outline-none focus:border-[#000000]" placeholder="Enter Your Email" />
                        </div>
                        <div className='py-2 form-control'>
                            <input type="password" name='password' className="w-full py-2  border-b border-[#000000]/30 focus:outline-none focus:border-[#000000]" placeholder="Enter Your Password" />
                        </div>
                        {error != "" && <p className='text-red-500 text-center mt-2'>{error}</p>}
                        <div className='mt-5 flex items-center justify-between'>
                            <button className=" my-2  bg-[#DB4444] hover:bg-[#E07575] py-2 px-12 rounded text-[#FAFAFA] text-base font-medium">Login</button>
                            <p className='text-[#DB4444] text-base font-normal cursor-pointer'>Forgot Password?</p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;