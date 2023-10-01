import Background from "./Background"
function Login() {
    return (
        <div className='bg-[#1B4A68] w-screen h-screen flex items-center justify-center relative z-20'>
            <h1 className="absolute top-8 left-12 text-lg text-white flex  z-20">Tika <span className=" ml-1 leading-[12px]"><h1 className="mt-2">Mobile</h1><p className="text-[8px] italic tracking-tighter">The inteligent CRN</p></span></h1>
            <h1 className="absolute right-4 top-20 md:top-8 text-white text-3xl z-20 ">NE<span className="w-full h-full relative">X <p className="absolute left-1.5 top-0.5 text-2xl text-[#276A8C] z-20">X</p></span>T SCIENCE</h1>
            <div className="border-style absolute bg-orange-400 left-10 top-8 w-10 h-10 z-10"></div>
            <div className="bg-[rgb(43,108,142)] border-[#235979] min-w-[300px] min-h-[348px]  border-[10px]  rounded-3xl flex flex-col items-center p-2 md:p-10 z-[999] lg:min-w-1/4 lg:min-h-1/2">
                <span className="leading-[10px]">
                    <h1 className="text-3xl  text-[#FE7D00] leading-[25px]">TIika<span className="text-[#06AEE5]">Rx</span></h1>
                    <p className="text-[9px] text-white ml-1">Rx Management system</p>
                </span>
                <div className="">
                    <h1 className="text-4xl text-white text-center py-5">Login</h1>
                    <form className="flex flex-col items-center gap-5">
                        <span>
                            <label htmlFor="userId" className="text-white text-sm pl-2">User ID:</label>
                            <input
                                type="text"
                                className="ml-5 rounded-full px-2  focus:outline-none "
                            />
                        </span>
                        <span>
                            <label htmlFor="passcode" className="text-white text-sm">Passcode:</label>
                            <input
                                type="password"
                                className="ml-5 rounded-full px-2 focus:outline-none"
                            />
                        </span>
                        <span className="w-full flex items-center justify-end">
                            <input type="checkbox" className="rounded-3xl mr-1" />
                            <label htmlFor="rememberMe" className="text-white text-[9px] font-light font-sans italic">Remember Me</label>
                            <a href="#" className="ml-2 text-white text-[9px] font-sans italic">
                                Forgot UserID/Passcode
                            </a>
                        </span>
                        <button className="relative self-end rounded-full text-xs px-12 py-1 button-85 bg-white border-2 text-black">Login</button>
                    </form>
                </div>
            </div>
            <Background />
        </div>
    )
}

export default Login