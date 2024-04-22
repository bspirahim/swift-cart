'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const SignUp = () => {
    const [error, setError] = useState('')
    const { push } = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password })
            })
            if (res.status === 400) {
                setError('This email is already used.')
            } if (res.status === 200) {
                setError('')
                toast('Account Created Successfully!')
                push('/login')
            }
            
        } catch (error) {
            setError('Error, try again')
            console.log(error);
        }
    }


    return (
        <div className=''>
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
                        <h1 className='text-4xl font-medium text-[#000000]'>Create an account</h1>
                        <p className='text-base font-normal text-[#000000] pt-2'>Enter your details below</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='mt-3'>
                            <div className='py-2 form-control'>
                                <input type="text" name='name' className="w-full py-2  border-b border-[#000000]/30 focus:outline-none focus:border-[#000000]" placeholder="Name" required />
                            </div>
                            <div className='py-2 form-control'>
                                <input type="email" name='email' className="w-full py-2  border-b border-[#000000]/30 focus:outline-none focus:border-[#000000]" placeholder="Enter Your Email" required />
                            </div>
                            <div className='py-2 form-control'>
                                <input type="password" name='password' className="w-full py-2  border-b border-[#000000]/30 focus:outline-none focus:border-[#000000]" placeholder="Enter Your Password" required />
                            </div>
                            {error != "" && <p className='text-red-500 text-center mt-2'>{error}</p>}
                            <div className='mt-5'>
                                <button className="w-full my-2  bg-[#DB4444] hover:bg-[#E07575] py-2 px-12 rounded text-[#FAFAFA] text-base font-medium">Create Account</button>
                            </div>
                            <div className='form-control'>
                                <button className="flex items-center justify-center gap-2 w-full my-2  border border-[#000000]/30 py-2 px-12 rounded text-[#000000] text-base font-normal">
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clippath="url(#clip0_3010_3336)">
                                            <path d="M23.766 12.7764C23.766 11.9607 23.6999 11.1406 23.5588 10.3381H12.24V14.9591H18.7217C18.4528 16.4494 17.5885 17.7678 16.323 18.6056V21.6039H20.19C22.4608 19.5139 23.766 16.4274 23.766 12.7764Z" fill="#4285F4" />
                                            <path d="M12.2401 24.5008C15.4766 24.5008 18.2059 23.4382 20.1945 21.6039L16.3276 18.6055C15.2517 19.3375 13.8627 19.752 12.2445 19.752C9.11388 19.752 6.45946 17.6399 5.50705 14.8003H1.5166V17.8912C3.55371 21.9434 7.7029 24.5008 12.2401 24.5008Z" fill="#34A853" />
                                            <path d="M5.50253 14.8003C4.99987 13.3099 4.99987 11.6961 5.50253 10.2057V7.11481H1.51649C-0.18551 10.5056 -0.18551 14.5004 1.51649 17.8912L5.50253 14.8003Z" fill="#FBBC04" />
                                            <path d="M12.2401 5.24966C13.9509 5.2232 15.6044 5.86697 16.8434 7.04867L20.2695 3.62262C18.1001 1.5855 15.2208 0.465534 12.2401 0.500809C7.7029 0.500809 3.55371 3.05822 1.5166 7.11481L5.50264 10.2058C6.45064 7.36173 9.10947 5.24966 12.2401 5.24966Z" fill="#EA4335" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3010_3336">
                                                <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Sign Up With Google</button>
                            </div>
                        </div>
                    </form>
                    <div className='mt-4 text-center'>Already Have an Account? <Link className='underline underline-offset-4' href='/login'>Login</Link> </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;