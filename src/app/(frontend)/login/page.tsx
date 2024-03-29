import Login from '@/components/login/Login'

const Page = () => {
    return (
        <div className='flex flex-col justify-between overflow-y-auto select-none bg-gradient-to-b from-blue-200 to-white relative py-10 lg:py-8'>
            <Login />
        </div>
    )
}

export default Page