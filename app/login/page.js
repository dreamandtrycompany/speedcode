import Navbar from "../(components)/Navbar";

function login(){
    return(
        <>
        <Navbar/>
        <div className=" font-sans flex justify-center items-center h-screen">
                <div>
                    <p className=" text-7xl text-center mb-10">
                        Login
                    </p>
                    <form className="flex flex-col ">
                        <input className = "rounded-3xl mb-5 px-3 text-black py-2" type="email" placeholder="E-mail" required />
                        <input className = "rounded-3xl mb-5 px-3 text-black py-2" type="password" placeholder="Password" required />
                        <div>
                        <input className="mb-10" type="checkbox" /><span className="mx-2 ">Remember Me</span>
                        </div>
                        <button className=" flex justify-around border-2 border-white rounded-3xl px-5 py-2 hover:bg-[#29b960] hover:border-[#29b960]">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default login;