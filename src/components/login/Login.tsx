'use client'
import React from 'react'
import LoginForm from './LoginForm'
const Login = () => {

    return (
        <div className='w-full'>
            <div className="flex h-full flex-col lg:flex-row gap-10 w-full min-h-full lg:justify-around py-10 px-6 sm:px-8 lg:px-10 overflow-hidden">
                <LoginForm />
            </div>
        </div>
    )
}

export default Login