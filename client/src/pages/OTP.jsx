import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import modiPortrait from "../assets/modi_portrait.png";

function OTP() {
  const navigate = useNavigate();

  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000)
      .toString()
      .split("");
  };

  const [otp, setOtp] = useState(generateOTP());
  const [timer, setTimer] = useState(30);
  const [inputs, setInputs] = useState(["", "", "", "", "", ""]);
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(true);
  const [randomPopups, setRandomPopups] = useState([]);

  // Sideways scroll on desktop
  useEffect(() => {
    const handleWheel = (e) => {
      if (window.innerWidth >= 1024) {
        window.scrollBy({
          left: e.deltaY * 2,
          top: 0,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  // OTP timer — regenerates on expiry
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          const newOtp = generateOTP();
          setOtp(newOtp);
          setInputs(["", "", "", "", "", ""]);
          setMessage("OTP automatically regenerated for national security.");
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Shuffle user inputs every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setInputs((prev) => {
        const shuffled = [...prev];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Random government popups
  useEffect(() => {
    const messages = [
      "Server under maintenance",
      "Citizen score updated",
      "Authentication synced nationally",
      "Do not refresh page",
      "Patriotism level unstable",
      "Background verification active",
      "Delhi server overloaded",
      "Identity processing delayed",
    ];

    const interval = setInterval(() => {
      const popup = {
        id: Date.now(),
        text: messages[Math.floor(Math.random() * messages.length)],
        top: Math.random() * 75,
        left: Math.random() * 70,
      };
      setRandomPopups((prev) => [...prev, popup]);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const handleVerify = () => {
    const entered = inputs.join("");
    const real = otp.join("");

    if (entered === real) {
      setMessage("Verification successful");
      navigate("/application");
    } else {
      setMessage("Incorrect OTP entered");
    }
  };

  return (
    <div className="
      min-h-screen
      overflow-x-auto
      overflow-y-hidden
      bg-gradient-to-br
      from-yellow-200
      via-red-200
      to-pink-300
      relative
    ">

      {/* Government notification popups */}
      {randomPopups.map((popup) => (
        <motion.div
          key={popup.id}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="
            fixed
            z-50
            bg-white
            border-[4px]
            border-blue-900
            shadow-2xl
            w-[150px]
            sm:w-[220px]
            p-3
          "
          style={{
            top: `${popup.top}%`,
            left: `${popup.left}%`,
          }}
        >
          <div className="
            bg-blue-900
            text-white
            px-2
            py-1
            text-xs
            sm:text-sm
            font-bold
            mb-2
          ">
            Government Notice
          </div>
          <p className="text-xs sm:text-sm font-semibold text-gray-700">
            {popup.text}
          </p>
        </motion.div>
      ))}

      {/* Header */}
      <div className="
        bg-gradient-to-r
        from-orange-500
        via-white
        to-green-500
        p-4
        sm:p-5
        border-b-[8px]
        border-red-700
        shadow-2xl
      ">
        <div className="
          flex
          flex-col
          sm:flex-row
          justify-between
          items-start
          sm:items-center
          gap-4
        ">
          <div>
            <h1 className="
              text-lg
              sm:text-2xl
              md:text-3xl
              lg:text-4xl
              leading-tight
              font-black
              text-blue-900
            ">
              NATIONAL OTP SECURITY PORTAL
            </h1>
            <p className="text-xs sm:text-sm mt-2 font-semibold">
              Ministry of Emotionally Secure Authentication
            </p>
          </div>

          <button className="
            bg-red-700
            text-white
            px-4
            py-2
            sm:px-5
            sm:py-3
            border-[5px]
            border-yellow-300
            font-black
            shadow-xl
            text-sm
            sm:text-base
            shrink-0
          ">
            EMERGENCY LOGOUT
          </button>
        </div>
      </div>

      {/* Notice marquee */}
      <marquee
        scrollamount="15"
        className="
          bg-black
          text-yellow-300
          text-sm
          sm:text-lg
          lg:text-2xl
          p-3
          font-bold
        "
      >
        OTP input values shuffle every 10 seconds |
        Please stay calm citizen |
        National verification in progress
      </marquee>

      {/* Security alert popup */}
      {showPopup && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="
            fixed
            top-28
            sm:top-36
            left-2
            sm:left-10
            w-[200px]
            sm:w-[320px]
            bg-white
            border-[5px]
            sm:border-[6px]
            border-red-700
            shadow-2xl
            z-40
          "
        >
          <div className="bg-red-700 text-white p-3 flex justify-between">
            <h2 className="font-black text-sm sm:text-lg">SECURITY ALERT</h2>
            <button
              onClick={() => setShowPopup(false)}
              className="text-[10px] bg-white text-black px-1"
            >
              X
            </button>
          </div>
          <div className="p-4 sm:p-5 text-sm sm:text-base font-bold text-gray-700 leading-6">
            Please remember your OTP before it starts moving
          </div>
        </motion.div>
      )}

      {/* Main scrollable content */}
      <div className="
        min-w-[360px]
        lg:min-w-0
        w-full
        max-w-7xl
        mx-auto
        mt-4
        sm:mt-8
        lg:mt-12
        mb-10
        sm:mb-20
        px-3
        sm:px-4
        lg:px-6
      ">
        <div className="
          bg-white
          border-[6px]
          sm:border-[10px]
          border-blue-900
          shadow-2xl
          p-4
          sm:p-10
        ">

          {/* Timer row */}
          <div className="
            flex
            flex-col
            lg:flex-row
            justify-between
            gap-6
            mb-8
            sm:mb-10
          ">
            <div>
              <h2 className="
                text-2xl
                sm:text-4xl
                lg:text-5xl
                font-black
                text-red-700
              ">
                OTP VERIFICATION
              </h2>
              <p className="text-gray-600 mt-3 text-sm sm:text-base">
                Complete verification before confusion increases.
              </p>
            </div>

            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="
                bg-black
                text-lime-400
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
                px-5
                py-4
                border-[5px]
                border-yellow-400
                font-black
                text-center
                shrink-0
              "
            >
              00:{timer < 10 ? `0${timer}` : timer}
            </motion.div>
          </div>

          {/* OTP display */}
          <motion.div
            animate={{ rotate: [0, 1, -1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="
              bg-yellow-100
              border-[5px]
              border-orange-500
              p-5
              sm:p-8
              mb-12
              sm:mb-16
            "
          >
            <div className="text-base sm:text-xl font-bold mb-4 sm:mb-6 text-gray-700">
              YOUR OTP:
            </div>
            <div className="
              flex
              justify-center
              gap-2
              sm:gap-4
              flex-wrap
            ">
              {otp.map((digit, index) => (
                <motion.div
                  key={index}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [1, 0.6, 1],
                    x: [0, 3, -3, 0],
                  }}
                  transition={{ repeat: Infinity, duration: 1 + index * 0.2 }}
                  className="
                    w-10
                    h-14
                    text-2xl
                    sm:w-14
                    sm:h-18
                    sm:text-3xl
                    lg:w-20
                    lg:h-24
                    lg:text-5xl
                    bg-black
                    text-lime-400
                    flex
                    items-center
                    justify-center
                    font-black
                    border-[5px]
                    border-red-600
                    shadow-xl
                  "
                >
                  {digit}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scroll-right image (desktop gimmick) */}
          <div className="
            h-[200px]
            sm:h-[350px]
            lg:h-[700px]
            relative
            mb-10
          ">
            <motion.img
              animate={{ rotate: [0, 1, -1, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              src={modiPortrait}
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                border-[12px]
                border-yellow-400
              "
            />
            <div className="
              absolute
              bottom-3
              left-3
              bg-black/70
              text-white
              px-3
              py-2
              sm:px-4
              sm:py-3
              text-xs
              sm:text-lg
              lg:text-2xl
              font-black
            ">
              SCROLL RIGHT TO CONTINUE
            </div>
          </div>

          {/* OTP input section */}
          <div className="mt-8 sm:mt-16">
            <div className="
              bg-red-50
              border
              border-red-300
              p-4
              sm:p-5
              mb-6
              sm:mb-8
            ">
              <p className="text-red-700 font-bold text-base sm:text-lg">
                SECURITY MODE ACTIVE
              </p>
              <p className="text-gray-700 mt-2 leading-6 sm:leading-7 text-sm sm:text-base">
                Enter key moves to next box.
                Input values shuffle every 10 seconds.
              </p>
            </div>

            {/* Input boxes */}
            <div className="
              flex
              justify-center
              gap-2
              sm:gap-4
              flex-wrap
              mb-8
              sm:mb-10
            ">
              {inputs.map((value, index) => (
                <motion.input
                  key={index}
                  animate={{ rotate: [0, 6, -6, 0], x: [0, 4, -4, 0] }}
                  transition={{ duration: 0.4 }}
                  type="text"
                  maxLength={1}
                  value={value}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (!/^\d?$/.test(val)) return;
                    const updated = [...inputs];
                    updated[index] = val;
                    setInputs(updated);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      const next = e.target.nextElementSibling;
                      if (next) next.focus();
                    }
                  }}
                  className="
                    w-10
                    h-14
                    text-2xl
                    sm:w-14
                    sm:h-20
                    sm:text-4xl
                    lg:w-20
                    lg:h-24
                    lg:text-5xl
                    border-[4px]
                    sm:border-[5px]
                    border-blue-900
                    text-center
                    font-black
                    bg-white
                    shadow-xl
                    outline-none
                    focus:bg-yellow-100
                  "
                />
              ))}
            </div>

            {/* Verify button */}
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleVerify}
                className="
                  bg-green-600
                  hover:bg-red-700
                  text-white
                  px-5
                  py-3
                  text-base
                  sm:px-8
                  sm:py-4
                  sm:text-xl
                  lg:px-10
                  lg:py-5
                  lg:text-2xl
                  font-black
                  border-[6px]
                  border-black
                  shadow-2xl
                "
              >
                VERIFY OTP
              </motion.button>
            </div>

            {/* Status message */}
            {message && (
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="
                  mt-8
                  sm:mt-10
                  bg-black
                  text-yellow-300
                  p-4
                  sm:p-6
                  text-center
                  text-base
                  sm:text-xl
                  lg:text-2xl
                  font-black
                  border-[5px]
                  border-red-600
                "
              >
                {message}
              </motion.div>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}

export default OTP;