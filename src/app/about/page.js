"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Swiper from 'swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { Swiper as SwiperComponent } from 'swiper/react';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Services from '@/components/Services/Services';



const AboutPage = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <div className=' relative my-12'>
            <section className='grid md:grid-cols-2 gap-10 mt-5 pt-5 items-center'>
                <div className=''>
                    <div className='float-right max-w-lg p-4 '>
                        <h1 className='text-5xl mb-5 font-semibold text-[#000000]'>Our Story</h1>
                        <div>
                            <p className='text-base font-normal mb-3 text-[#000000]'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                        </div>
                        <div>
                            <p className='text-base font-normal text-[#000000]pt-3'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.</p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='max-w-3xl'>
                        <Image className='float-right'
                            src="/images/product/about-img.png"
                            alt="Picture of the author"
                            width={500}
                            height={500}
                            priority
                        />
                    </div>
                </div>
            </section>
            <section className='max-w-screen-lg mx-auto mt-12 pt-10'>
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                    <div className='grid md:grid-cols-4 gap-6'>
                        <div className='text-center border border-[#000000]/30 rounded p-4 shadow-sm'>
                            <div className='flex justify-center items-center '>
                                <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40ZM11.4071 40C11.4071 56.0675 24.4325 69.0929 40.5 69.0929C56.5675 69.0929 69.5929 56.0675 69.5929 40C69.5929 23.9325 56.5675 10.9071 40.5 10.9071C24.4325 10.9071 11.4071 23.9325 11.4071 40Z" fill="#2F2E30" />
                                    <circle cx="40.5" cy="40" r="29" fill="black" />
                                    <path d="M54.6416 25H47.9883L48.8216 33.3333C48.8216 33.3333 50.4883 35 52.9883 35C54.3006 35.0017 55.5684 34.524 56.5533 33.6567C56.6574 33.5594 56.735 33.4372 56.7787 33.3016C56.8224 33.166 56.8309 33.0214 56.8033 32.8817L55.6266 25.8333C55.5873 25.6005 55.4668 25.3891 55.2865 25.2366C55.1062 25.084 54.8778 25.0002 54.6416 25V25Z" stroke="white" strokeWidth={2} />
                                    <path d="M47.9883 25L48.8216 33.3333C48.8216 33.3333 47.1549 35 44.6549 35C42.1549 35 40.4883 33.3333 40.4883 33.3333V25H47.9883Z" stroke="#FAFAFA" strokeWidth={2} />
                                    <path d="M40.4886 25V33.3333C40.4886 33.3333 38.8219 35 36.3219 35C33.8219 35 32.1553 33.3333 32.1553 33.3333L32.9886 25H40.4886Z" stroke="#FAFAFA" strokeWidth={2} />
                                    <path d="M32.9883 25H26.3366C26.0999 24.9999 25.8709 25.0838 25.6902 25.2367C25.5096 25.3896 25.389 25.6016 25.3499 25.835L24.1749 32.8833C24.1475 33.0231 24.156 33.1676 24.1997 33.3032C24.2435 33.4387 24.321 33.5609 24.4249 33.6583C24.9716 34.1417 26.1933 35.0017 27.9883 35.0017C30.4883 35.0017 32.1549 33.335 32.1549 33.335L32.9883 25.0017V25Z" stroke="#FAFAFA" strokeWidth={2} />
                                    <path d="M25.5 35V51.6667C25.5 52.5507 25.8512 53.3986 26.4763 54.0237C27.1014 54.6488 27.9493 55 28.8333 55H52.1667C53.0507 55 53.8986 54.6488 54.5237 54.0237C55.1488 53.3986 55.5 52.5507 55.5 51.6667V35" stroke="#FAFAFA" strokeWidth={2} />
                                    <path d="M45.2217 55V45C45.2217 44.1159 44.8705 43.2681 44.2454 42.6429C43.6202 42.0178 42.7724 41.6666 41.8883 41.6666H38.555C37.671 41.6666 36.8231 42.0178 36.198 42.6429C35.5729 43.2681 35.2217 44.1159 35.2217 45V55" stroke="#FAFAFA" strokeWidth={2} strokeMiterlimit={16} />
                                </svg>
                            </div>
                            <div className='pt-3'>
                                <p className='text-3xl font-bold text-[#000000]'> {counterOn && <CountUp start={0} end={10.5} duration={2} delay={0}></CountUp>}k </p>
                                <small className='text-base font-normal text-[#000000]'>Sallers active our site</small>
                            </div>
                        </div>
                        <div className='text-center border rounded p-4 shadow-sm bg-[#DB4444]'>
                            <div className='flex justify-center items-center '>
                                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z" fill="white" />
                                    <circle cx="40" cy="40" r="29" fill="white" />
                                    <path d="M40.0003 57.2728C49.5397 57.2728 57.273 49.5395 57.273 40C57.273 30.4606 49.5397 22.7273 40.0003 22.7273C30.4608 22.7273 22.7275 30.4606 22.7275 40C22.7275 49.5395 30.4608 57.2728 40.0003 57.2728Z" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M45.0914 34.547C44.762 33.9758 44.2834 33.505 43.707 33.1848C43.1305 32.8646 42.4777 32.7072 41.8186 32.7294H38.1823C37.2178 32.7294 36.2929 33.1124 35.611 33.7941C34.929 34.4759 34.5459 35.4005 34.5459 36.3647C34.5459 37.3288 34.929 38.2535 35.611 38.9353C36.2929 39.617 37.2178 40 38.1823 40H41.8186C42.783 40 43.708 40.383 44.3899 41.0648C45.0719 41.7465 45.455 42.6712 45.455 43.6354C45.455 44.5995 45.0719 45.5242 44.3899 46.2059C43.708 46.8877 42.783 47.2707 41.8186 47.2707H38.1823C37.5232 47.2929 36.8704 47.1354 36.2939 46.8153C35.7174 46.4951 35.2389 46.0242 34.9095 45.453" stroke="black" strokeWidth={2.75} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M40 28.1818V32.1212M40 47.8787V51.8181" stroke="black" strokeWidth={2.75} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className='pt-3'>
                                <p className='text-3xl font-bold text-[#FFFFFF]'> {counterOn && <CountUp start={0} end={33} duration={2} delay={0}></CountUp>}k </p>
                                <small className='text-base font-normal text-[#FFFFFF]'>Mopnthly Produduct Sale</small>
                            </div>
                        </div>
                        <div className='text-center border border-[#000000]/30 rounded p-4 shadow-sm'>
                            <div className='flex justify-center items-center '>
                                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z" fill="#2F2E30" />
                                    <circle cx="40" cy="40" r="29" fill="black" />
                                    <path d="M31.667 31.6667V28.3334C31.667 27.3682 31.9464 26.4236 32.4714 25.6137C32.9965 24.8038 33.7447 24.1632 34.6258 23.7691C35.5069 23.3751 36.4832 23.2445 37.4369 23.3931C38.3906 23.5418 39.2809 23.9633 40.0003 24.6067C40.7197 23.9633 41.61 23.5418 42.5637 23.3931C43.5174 23.2445 44.4937 23.3751 45.3748 23.7691C46.256 24.1632 47.0042 24.8038 47.5292 25.6137C48.0543 26.4236 48.3336 27.3682 48.3337 28.3334V31.6667H50.8337C51.4967 31.6667 52.1326 31.9301 52.6014 32.399C53.0703 32.8678 53.3337 33.5037 53.3337 34.1667V50.8417C53.3337 52.3866 52.72 53.8682 51.6276 54.9606C50.5352 56.053 49.0535 56.6667 47.5087 56.6667H33.3337C31.5655 56.6667 29.8699 55.9643 28.6196 54.7141C27.3694 53.4639 26.667 51.7682 26.667 50.0001V34.1667C26.667 33.5037 26.9304 32.8678 27.3992 32.399C27.8681 31.9301 28.504 31.6667 29.167 31.6667H31.667ZM42.7253 54.1667C42.0454 53.1914 41.6818 52.0306 41.6837 50.8417V34.1667H29.167V50.0001C29.167 50.5472 29.2748 51.089 29.4842 51.5946C29.6936 52.1001 30.0005 52.5594 30.3874 52.9463C30.7743 53.3332 31.2336 53.6402 31.7391 53.8496C32.2447 54.0589 32.7865 54.1667 33.3337 54.1667H42.7253ZM39.167 31.6667V28.3334C39.167 27.6703 38.9036 27.0345 38.4348 26.5656C37.9659 26.0968 37.33 25.8334 36.667 25.8334C36.004 25.8334 35.3681 26.0968 34.8992 26.5656C34.4304 27.0345 34.167 27.6703 34.167 28.3334V31.6667H39.167ZM41.667 31.6667H45.8337V28.3334C45.8337 27.8188 45.6749 27.3167 45.379 26.8957C45.0832 26.4746 44.6645 26.1552 44.1803 25.9809C43.6961 25.8066 43.1699 25.786 42.6736 25.9219C42.1772 26.0577 41.7349 26.3435 41.407 26.7401C41.5753 27.2401 41.667 27.7767 41.667 28.3334V31.6667ZM44.1837 50.8417C44.1837 51.7236 44.534 52.5693 45.1575 53.1929C45.7811 53.8164 46.6268 54.1667 47.5087 54.1667C48.3905 54.1667 49.2362 53.8164 49.8598 53.1929C50.4833 52.5693 50.8337 51.7236 50.8337 50.8417V34.1667H44.1837V50.8417Z" fill="white" />
                                </svg>
                            </div>
                            <div className='pt-3'>
                                <p className='text-3xl font-bold text-[#000000]'> {counterOn && <CountUp start={0} end={45.5} duration={2} delay={0}></CountUp>}k </p>
                                <small className='text-base font-normal text-[#000000]'>Customer active in our site</small>
                            </div>
                        </div>
                        <div className='text-center border border-[#000000]/30 rounded p-4 shadow-sm'>
                            <div className='flex justify-center items-center '>
                                <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40ZM11.4071 40C11.4071 56.0675 24.4325 69.0929 40.5 69.0929C56.5675 69.0929 69.5929 56.0675 69.5929 40C69.5929 23.9325 56.5675 10.9071 40.5 10.9071C24.4325 10.9071 11.4071 23.9325 11.4071 40Z" fill="#2F2E30" />
                                    <circle cx="40.5" cy="40" r="29" fill="black" />
                                    <path d="M40.9278 38.1456V38.6456L41.4278 38.6456C42.0916 38.6457 42.739 38.8514 43.281 39.2346C43.8229 39.6178 44.2327 40.1595 44.454 40.7851C44.4727 40.8381 44.4808 40.8941 44.4778 40.9502C44.4748 41.0062 44.4608 41.0611 44.4366 41.1117C44.4124 41.1624 44.3784 41.2077 44.3367 41.2452C44.295 41.2828 44.2463 41.3117 44.1933 41.3304C44.1404 41.3491 44.0844 41.3571 44.0283 41.3542C43.9723 41.3512 43.9174 41.3372 43.8667 41.313C43.7645 41.2641 43.6858 41.1766 43.6481 41.0697L43.648 41.0695C43.4856 40.6104 43.1849 40.213 42.7873 39.9319C42.3896 39.6509 41.9146 39.5 41.4277 39.5002L40.9278 39.5003V40.0002V43.7092V44.2092H41.4278C42.2789 44.2092 43.0952 44.5473 43.697 45.1491C44.2988 45.7509 44.6369 46.5672 44.6369 47.4183C44.6369 48.2694 44.2988 49.0856 43.697 49.6874C43.0952 50.2892 42.2789 50.6273 41.4278 50.6273H40.9278V51.1273V51.5546H40.0733V51.1273V50.6273L39.5733 50.6273C38.9096 50.6273 38.2621 50.4215 37.7202 50.0383C37.1782 49.6551 36.7684 49.1134 36.5471 48.4876L36.5472 48.4875L36.5422 48.4744C36.5216 48.4211 36.512 48.3642 36.5138 48.3071C36.5156 48.25 36.5289 48.1939 36.5528 48.142C36.5767 48.0901 36.6107 48.0435 36.6529 48.005L36.317 47.6367L36.6529 48.005C36.6952 47.9665 36.7447 47.9369 36.7985 47.9179C36.8524 47.8988 36.9095 47.8908 36.9665 47.8942C37.0236 47.8977 37.0793 47.9125 37.1305 47.9379C37.1817 47.9632 37.2273 47.9986 37.2646 48.0419C37.3019 48.0852 37.3301 48.1355 37.3476 48.1899L37.3499 48.1969L37.3523 48.2039C37.6768 49.1186 38.5484 49.7728 39.5733 49.7728H40.0733V49.2728V45.5637V45.0637H39.5733C38.7222 45.0637 37.906 44.7256 37.3042 44.1238C36.7024 43.522 36.3643 42.7058 36.3643 41.8547C36.3643 41.0036 36.7024 40.1874 37.3042 39.5856C37.906 38.9837 38.7222 38.6456 39.5733 38.6456H40.0733V38.1456V37.7184H40.9278V38.1456ZM40.0733 40.0002V39.5002H39.5733C38.9488 39.5002 38.35 39.7482 37.9084 40.1898C37.4668 40.6314 37.2188 41.2302 37.2188 41.8547C37.2188 42.4792 37.4668 43.078 37.9084 43.5196C38.35 43.9612 38.9488 44.2092 39.5733 44.2092H40.0733V43.7092V40.0002ZM40.9278 49.2728V49.7728H41.4278C42.0523 49.7728 42.6512 49.5247 43.0927 49.0832C43.5343 48.6416 43.7824 48.0427 43.7824 47.4183C43.7824 46.7938 43.5343 46.1949 43.0927 45.7534C42.6512 45.3118 42.0523 45.0637 41.4278 45.0637H40.9278V45.5637V49.2728Z" fill="#FAFAFA" stroke="#FAFAFA" />
                                    <path d="M33.2057 32.5777L33.5219 32.6998C37.8707 34.3798 43.1083 34.3797 47.457 32.698L47.7695 32.5772L48.0001 32.8203C49.8981 34.8211 51.4858 37.0948 52.7105 39.5658L52.7115 39.5677C53.9873 42.1703 54.7037 44.8133 54.5867 47.1301L54.5867 47.1301C54.4723 49.3912 53.5716 51.3572 51.5218 52.806L51.5218 52.806C49.4129 54.296 45.9467 55.3336 40.5354 55.3336C35.1198 55.3336 31.6397 54.3141 29.5132 52.8421L29.5129 52.842C27.4494 51.412 26.5376 49.472 26.4101 47.2374L33.2057 32.5777ZM33.2057 32.5777L32.9752 32.8262M33.2057 32.5777L32.9752 32.8262M32.9752 32.8262C31.1573 34.7856 29.4657 37.1897 28.251 39.6929L28.2509 39.6929M32.9752 32.8262L28.2509 39.6929M28.2509 39.6929C26.9804 42.3123 26.2784 44.9432 26.4101 47.2372L28.2509 39.6929ZM50.3428 26.1814C50.7832 26.3992 51.1642 26.6076 51.4775 26.7943L48.3457 31.3725L48.1141 31.7111L48.401 32.0044C50.3394 33.9861 52.1697 36.5163 53.4805 39.1919C54.7935 41.8721 55.5679 44.6624 55.441 47.1735C55.3151 49.6637 54.3054 51.8863 52.0163 53.5035C49.7051 55.1363 46.0382 56.1881 40.5364 56.1881C35.0332 56.1881 31.3544 55.1551 29.028 53.5441C26.7245 51.9489 25.6991 49.7543 25.558 47.2856C25.4157 44.7951 26.1758 42.0153 27.4835 39.3201C28.7889 36.6299 30.6229 34.0598 32.5812 31.9993L32.8589 31.7071L32.6323 31.3738L29.5225 26.7979C29.6798 26.7052 29.8536 26.6075 30.043 26.5066L30.043 26.5066L30.0447 26.5056C30.2353 26.4032 30.4408 26.2977 30.6614 26.1901L30.8573 26.0946C33.1034 25.024 36.6645 23.8094 40.5364 23.8094C44.4384 23.8094 47.9975 25.0428 50.2165 26.12C50.2165 26.12 50.2165 26.1201 50.2165 26.1201L50.3412 26.1806C50.3417 26.1808 50.3422 26.1811 50.3428 26.1814ZM46.7245 32.0592L46.8779 32.0047L46.9698 31.8703L49.7117 27.8618L50.2968 27.0064L49.2631 27.0808C46.6696 27.2675 43.6003 27.8748 40.6554 28.7274C38.6714 29.3006 36.4387 29.2193 34.3339 28.8311C33.8046 28.7329 33.279 28.6161 32.758 28.4809L31.4726 28.1471L32.2188 29.2457L33.9991 31.8671L34.091 32.0024L34.245 32.0572C38.1692 33.4543 42.7996 33.4542 46.7245 32.0592ZM32.08 26.4803L30.8004 27.0235L32.1328 27.4198C32.8897 27.645 33.6821 27.8413 34.4877 27.9905L34.4881 27.9905C36.523 28.3653 38.6079 28.4298 40.4168 27.9058L40.4175 27.9056C42.3859 27.3322 44.388 26.8812 46.4122 26.5552L46.4768 25.5828C44.7353 25.0585 42.6905 24.664 40.5354 24.664C37.2536 24.664 34.2063 25.5779 32.08 26.4803Z" fill="#FAFAFA" stroke="#FAFAFA" />
                                </svg>
                            </div>
                            <div className='pt-3'>
                                <p className='text-3xl font-bold text-[#000000]'>                                <p className='text-3xl font-bold text-[#000000]'> {counterOn && <CountUp start={0} end={25} duration={2} delay={0}></CountUp>}k </p>
                                </p>
                                <small className='text-base font-normal text-[#000000]'>Anual gross sale in our site</small>
                            </div>
                        </div>
                    </div>
                </ScrollTrigger>
            </section>
            <section className='max-w-screen-lg mx-auto mt-12 pt-10'>
                <div className='grid md:grid-cols-3 gap-6'>
                    <div className="card card-compact rounded">
                        <figure className=''>
                            <Image
                                className='  '
                                src="/images/person/image-1.png"
                                alt="card-image"
                                width={500}
                                height={500}
                            />
                        </figure>
                        <div className=" py-2">
                            <h2 className="card-title text-3xl leading-10 font-medium text-[#000000]">Tom Cruise</h2>
                            <p className='text-base font-normal text-[#000000]'>Founder & Chairman</p>
                            <div className='flex items-center gap-x-4 mt-2'>
                                <FaTwitter className='text-lg cursor-pointer' />
                                <FaInstagram className='text-lg cursor-pointer' />
                                <FaLinkedinIn className='text-lg cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact rounded">
                        <figure className=''>
                            <Image
                                className='  '
                                src="/images/person/image-2.png"
                                alt="card-image"
                                width={500}
                                height={500}
                            />
                        </figure>
                        <div className=" py-2">
                            <h2 className="card-title text-3xl leading-10 font-medium text-[#000000]">Emma Watson</h2>
                            <p className='text-base font-normal text-[#000000]'>Managing Director</p>
                            <div className='flex items-center gap-x-4 mt-2'>
                                <FaTwitter className='text-lg cursor-pointer' />
                                <FaInstagram className='text-lg cursor-pointer' />
                                <FaLinkedinIn className='text-lg cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact rounded">
                        <figure className=''>
                            <Image
                                className='  '
                                src="/images/person/image-3.png"
                                alt="card-image"
                                width={500}
                                height={500}
                            />
                        </figure>
                        <div className=" py-2">
                            <h2 className="card-title text-3xl leading-10 font-medium text-[#000000]">Will Smith</h2>
                            <p className='text-base font-normal text-[#000000]'>Product Designer</p>
                            <div className='flex items-center gap-x-4 mt-2'>
                                <FaTwitter className='text-lg cursor-pointer' />
                                <FaInstagram className='text-lg cursor-pointer' />
                                <FaLinkedinIn className='text-lg cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <Services></Services>
            </section>

        </div>
    );
};

export default AboutPage;