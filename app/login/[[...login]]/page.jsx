import Navbar from '../../(components)/Navbar';
import { SignIn } from '@clerk/nextjs';

function login() {
  return (
    <>
      {/* <Navbar />
      <div className="font-sans flex justify-center items-center h-screen">
        <div>
          <p className="text-7xl text-center mb-10">Login</p>
          <form className="flex flex-col">
            <input
              className="rounded-3xl mb-5 px-6 text-black py-2"
              type="email"
              placeholder="E-mail"
              required
            />
            <input
              className="rounded-3xl mb-5 px-6 text-black py-2"
              type="password"
              placeholder="Password"
              required
            />
            <div className="flex justify-center items-center mb-10">
              <input type="checkbox" />
              <span className="mx-2">Remember Me</span>
            </div>
            <button className="flex justify-around border-2 border-white rounded-3xl px-5 py-2 hover:bg-[#29b960] hover:border-[#29b960] transition-all duration-300">
              Dive in
            </button>
          </form>
        </div>
      </div> */}
      <div className="flex justify-center p-24">
        <SignIn />
      </div>
    </>
  );
}

export default login;
