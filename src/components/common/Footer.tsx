import React from 'react';
import Link from 'next/link';
import { FOOTER_CONFIG, SOCIAL_LINKS } from '../config';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white lg:pt-20 pt-10 lg:py-10 px-6 md:px-16 lg:px-28 z-[999]">
            <div className='flex flex-col-reverse gap-10 xl:grid grid-cols-12'>
                <div className='col-span-2 flex flex-col gap-5'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-2'>
                            <div className='text-3xl border-2 font-medium py-4 px-2'>Fix Health</div>
                            <span className='flex flex-col gap-5'>
                                <span>
                                    <h3 className="md:text-2xl font-bold whitespace-nowrap">Fix Health</h3>
                                    <p className='text-gray-300 text-xs'>{FOOTER_CONFIG.footerIntro}</p>
                                </span>
                                <div className='flex gap-5 items-center'>
                                    {
                                        SOCIAL_LINKS?.map((ic, index) => {
                                            return (
                                                <a href={ic?.link} key={index} target='_blank'>
                                                    {ic?.icon}
                                                </a>
                                            )
                                        })
                                    }
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-600 mt-8 py-6 flex flex-col lg:flex-row justify-between gap-4">
                <p className='[@media(min-width:100px)]:text-xs [@media(min-width:300px)]:text-sm tracking-wide'>&copy; {new Date().getFullYear()} Fix Health. All rights reserved.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:flex justify-center gap-1 lg:gap-5 text-gray-300">
                    {FOOTER_CONFIG.privacyTerm.map((itm, idx) => {
                        return (
                            <Link className='whitespace-nowrap text-xs lg:text-base' key={idx} href={itm.link}>
                                {itm.title}
                            </Link>
                        )
                    })
                    }
                </div>
            </div>
        </footer>
    );
};

export default Footer;
