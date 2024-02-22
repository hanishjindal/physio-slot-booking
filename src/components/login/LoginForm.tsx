import React, { useRef, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import FormBox from './common/FormBox';
import { useDispatch } from 'react-redux';
import { signIn } from '@/redux/slice/authSlice';
import { fieldType } from '../utils'

const LoginForm = () => {
    const router = useRouter()
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: {
            label: false,
            value: '',
            labelText: 'Email',
            ref: useRef<HTMLInputElement | null>(null),
            type: 'email',
            placeholder: 'john@xyz.in',
            required: true,
            name: 'email'
        },
        password: {
            label: false,
            value: '',
            labelText: 'Password',
            type: 'password',
            placeholder: 'enter password',
            required: true,
            name: 'password'
        },
    })
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    useEffect(() => {
        formData.email.ref.current?.focus()
    }, [])

    const handleInput = (type: fieldType, val: string) => {
        if (type === 'email' || type === 'password') {
            setFormData({
                ...formData,
                [type]: { ...formData[type], value: val }
            })
        }
    }

    const handleFieldClick = (type: fieldType) => {
        setFormData({
            ...formData,
            email: { ...formData.email, label: (type === 'email') },
            password: { ...formData.password, label: (type === 'password') },
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setIsSubmitting(true)
            const user = {
                email: formData.email.value,
                password: formData.password.value
            }
            const res = await axios.post("/api/user/login", user)
            dispatch(signIn(res.data.data))
            toast.success('Success')
            router.push('/portal')
        } catch (error: any) {
            toast.error(error?.response?.data?.message ?? 'Something went wrong')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleResetFocus = () => {
        setFormData({
            ...formData,
            email: { ...formData.email, label: false },
            password: { ...formData.password, label: false },
        })
    }

    return (
        <FormBox
            heading='Sign In'
            handleResetFocus={() => handleResetFocus()}
            handleInput={handleInput}
            handleFieldClick={handleFieldClick}
            handleSubmit={(e) => handleSubmit(e)}
            isSubmitting={isSubmitting}
            formData={formData}
        />
    )
}

export default LoginForm;