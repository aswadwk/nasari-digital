import { Dialog, Transition } from '@headlessui/react'
import { useForm } from '@inertiajs/react'
import { Fragment, useState } from 'react'

const Login = () => {
    let [isOpen, setIsOpen] = useState(true)
    const { post, data, setData, errors } = useForm({
        email: '',
        password: ''
    })

    function closeModal() {
        // setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        post('/auth/login')
    }

    return (
        <div className="leading-normal pt-4 tracking-normal text-indigo-400 bg-cover bg-fixed min-h-screen" style={{ backgroundImage: `url('/asset/images/bg-login.jpeg')` }}>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-gray-200 p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 text-center"
                                    >
                                        Silahkan login
                                        <br />
                                        {errors && (
                                            <div className="text-red-500 text-sm">
                                                {errors.email}
                                                <br />
                                                {errors.password}
                                            </div>
                                        )}
                                    </Dialog.Title>
                                    <form action="" className='w-full' onSubmit={handleSubmit}>
                                        <div className="flex items-center mb-6 mt-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                className="icon icon-tabler text-gray-400 icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                                            <div className="w-full">
                                                <input
                                                    onChange={(e) => setData('email', e.target.value)}
                                                    className="text-sm bg-white appearance-none py-2 px-3 ml-2 border-none w-full border-0 focus:border-0 hover:border-0 outline-none" placeholder='Masukkan email' />
                                            </div>
                                        </div>
                                        <div className="flex items-center mb-6 mt-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                className="icon text-gray-400 icon-tabler icons-tabler-outline icon-tabler-lock"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" /><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><path d="M8 11v-4a4 4 0 1 1 8 0v4" /></svg>
                                            <div className="w-full">
                                                <input
                                                    onChange={(e) => setData('password', e.target.value)}
                                                    className="text-sm bg-white appearance-none py-2 px-3 ml-2 border-none w-full border-0 focus:border-0 hover:border-0 outline-none"
                                                    placeholder='Masukkan password' />
                                            </div>
                                        </div>

                                        <div className="flex justify-center">
                                            <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                                type="submit">
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

export default Login
