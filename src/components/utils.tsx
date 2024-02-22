import { signOut } from '@/redux/slice/authSlice';
import axios from 'axios'
import toast from 'react-hot-toast';
import { Dispatch } from 'redux';

export type fieldType = 'name' | 'mobile' | 'email' | 'password'


export const logout = async (setIsLoading: (value: boolean) => void, dispatch: Dispatch, router: any) => {
    try {
        setIsLoading(true)
        await axios.post('/api/user/logout', {})
        dispatch(signOut())
        toast.success('Logout successful')
        router.push('/login')
    } catch (error: any) {
        toast.error(error.message)
    } finally {
        setIsLoading(false)
    }
}