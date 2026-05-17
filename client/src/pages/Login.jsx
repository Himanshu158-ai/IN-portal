import GovernmentHeader from "../components/GovernmentHeader";
import NoticeBanner from "../components/NoticeBanner";
import FakePopup from "../components/FakePopup";
import MovingButton from "../components/MovingButton";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-yellow-200 overflow-hidden relative font-serif">

      <GovernmentHeader />
      <NoticeBanner />
      <FakePopup />

      <div className="flex justify-center items-center mt-8 sm:mt-10 px-4 pb-16">

        <div className="bg-red-100 border-[8px] border-green-700 p-6 sm:p-8 shadow-2xl w-full max-w-md relative">

          <h1 className="text-2xl sm:text-4xl text-center text-blue-900 font-bold blink mb-4 sm:mb-6">
            Citizen Login Portal
          </h1>

          <marquee className="bg-red-600 text-white p-2 mb-4 text-sm sm:text-base">
            WARNING: Multiple login attempts may increase patriotism.
          </marquee>

          <form className="space-y-4 sm:space-y-5">

            <div>
              <label className="text-base sm:text-xl font-bold block mb-1">
                Username / Aadhaar / PAN / Ration Card / Blood Group
              </label>
              <input
                type="text"
                placeholder="Enter Everything"
                className="w-full mt-1 p-3 border-4 border-purple-700 bg-pink-100 outline-none text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="text-base sm:text-xl font-bold block mb-1">
                Password (Must contain 1 emoji, 1 Sanskrit letter, and freedom fighter name)
              </label>
              <input
                type="password"
                placeholder="Example: BhagatSingh123"
                className="w-full mt-1 p-3 border-4 border-red-700 bg-green-100 outline-none text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="text-base sm:text-xl font-bold block mb-1">
                Enter Captcha
              </label>
              <div className="bg-black text-lime-400 text-xl sm:text-2xl tracking-[10px] p-3 mt-2 rotate-2 select-none font-mono">
                Il1|O0xX
              </div>
              <input
                type="text"
                placeholder="Can you even read this?"
                className="w-full mt-2 p-3 border-4 border-yellow-600 bg-blue-100 outline-none text-sm sm:text-base"
              />
            </div>

            <div className="flex justify-center mt-8 sm:mt-10">
              <MovingButton onclick={() => navigate("/otp")} />
            </div>

          </form>
        </div>
      </div>

      <footer className="fixed bottom-0 w-full bg-black text-yellow-300 text-center p-2 text-xs sm:text-sm animate-pulse">
        Government Portal works best on Internet Explorer 69.
      </footer>

    </div>
  );
}

export default Login;