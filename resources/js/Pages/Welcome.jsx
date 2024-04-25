import { useForm } from '@inertiajs/react'

const Welcome = () => {
    const { post } = useForm({})

    const handleLogout = () => {
        post('/auth/logout')
    }

    return (
        <div className="leading-normal pt-4 tracking-normal text-indigo-400 bg-cover bg-fixed" style={{ backgroundImage: `url('/asset/images/header.png')` }}>
            <div className="h-full">

                <div className="w-full container mx-auto">
                    <div className="w-full flex items-center justify-between">
                        <a className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                            Nasari {' '}
                            <span className="bg-clip-text pl-2 text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                                Digital
                            </span>
                        </a>

                        <div className="flex w-1/2 justify-end content-center">
                            <button
                                onClick={() => handleLogout()}
                                className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>


                <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center h-screen">

                    <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                        <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                            Solusi Keuangan <br /> Era Digital
                        </h1>
                        <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
                            Transformasi koperasi digital yang bakal bikin urusan keuangan kamu lebih aman, mudah, dan cepat. Semuanya ada di dalam genggamanmu!
                        </p>
                    </div>
                    <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
                        <a className="text-gray-500 no-underline hover:no-underline" href="#">&copy; 2024</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
