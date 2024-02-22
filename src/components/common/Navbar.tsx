"use client"
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import { MENU_DATA } from '@/components/config'
import { usePathname, useRouter } from 'next/navigation'
import Button from './Button'
import { TfiMenu } from 'react-icons/tfi'
import { BiLogOut } from 'react-icons/bi'
import { selectIsAuthenticated } from '@/redux/slice/authSlice'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../utils'

const Navbar = () => {
    const router = useRouter()
    const pathname = usePathname();
    const dispatch = useDispatch()
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const isAuthenticated = useSelector(selectIsAuthenticated);

    const menuMap = () => {
        try {
            return (
                MENU_DATA.map((item, index) => {
                    const navActive = pathname.slice(1) === item?.label;
                    if (!item.protected || isAuthenticated) {
                        return (
                            <Link
                                key={index}
                                href={item.link}
                                className={`text-black cursor-pointer h-full ${navActive ? "border-b-2 text-blue-500" : ""} flex items-center hover:text-blue-500 hover:border-b-2 border-blue-500`}
                                onClick={() => { setMobileMenu(false) }}
                            >
                                {item.text}
                            </Link>
                        )
                    } else {
                        return (
                            <Fragment key={index}>
                            </Fragment>
                        )
                    }
                })
            )
        } catch (error) {
            return <></>
        }
    }
    return (
        <nav
            className='sticky top-0 select-none w-full h-16 bg-white shadow-lg z-[10]'
            onClick={e => e.stopPropagation()}
            onMouseLeave={() => {
                setMobileMenu(false)
            }}
        >
            <div
                className='w-full h-full py-2 px-8 lg:px-10 flex items-center justify-between relative'
                onClick={e => e.stopPropagation()}
            >
                <Link href='/' className='text-2xl font-bold'>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Fix Health</button>
                </Link>

                <div className='flex items-center justify-between gap-10'>
                    <div className='hidden lg:inline-flex gap-8 text-lg font-medium h-full items-center'>
                        {
                            menuMap()
                        }
                    </div>

                    {isAuthenticated ?
                        <Button
                            type='button'
                            handleClick={() => {
                                logout(setIsLoading, dispatch, router)
                            }}
                            isSubmitting={isLoading}
                            buttonType='secondary'
                            className={`hidden lg:flex font-semibold text-lg w-40 h-12 ${isLoading ? "!bg-blue-500" : ""}`}
                        >
                            Log Out
                        </Button>
                        :
                        <Button
                            type='button'
                            handleClick={() => {
                                router.push('/login')
                            }}
                            isSubmitting={isLoading}
                            buttonType='secondary'
                            className='hidden lg:flex font-semibold text-lg w-40 h-12'
                        >
                            Sign In
                        </Button>
                    }
                    <TfiMenu
                        className='lg:hidden cursor-pointer'
                        onClick={() => { setMobileMenu(!mobileMenu) }}
                        size={25}
                    />
                </div>

                {
                    mobileMenu &&
                    <div className='lg:hidden absolute w-full top-full left-0 bg-white px-10 shadow-lg flex flex-col gap-4'>
                        <div className='flex flex-col gap-4 text-lg font-medium'>
                            {
                                MENU_DATA.map((item, index) => {
                                    if (!item.protected) {
                                        return (
                                            <Link
                                                key={index}
                                                href={item.link}
                                                className={`cursor-pointer hover:text-blue-500`}
                                                onClick={() => { setMobileMenu(false) }}
                                            >
                                                {item.text}
                                            </Link>
                                        )
                                    } else {
                                        return (
                                            <Fragment key={index}>
                                            </Fragment>
                                        )
                                    }
                                })
                            }
                            {isAuthenticated &&
                                <Link
                                    key={'Portal'}
                                    href={'/portal'}
                                    className={`cursor-pointer hover:text-blue-500`}
                                    onClick={() => { setMobileMenu(false) }}
                                >
                                    Portal
                                </Link>
                            }
                        </div>

                        <Button
                            type='button'
                            handleClick={() => {
                                if (isAuthenticated) {
                                    logout(setIsLoading, dispatch, router)
                                } else {
                                    router.push('/login')
                                }
                                setMobileMenu(false)
                            }}
                            isSubmitting={isLoading}
                            buttonType='primary'
                            className='font-semibold text-lg mb-4 py-2 w-full h-12 flex gap-2 items-center'
                        >
                            Sign {isAuthenticated ? <>Out <BiLogOut className='rotate-180' /></> : 'In'}
                        </Button>
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar