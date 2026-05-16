import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


function OTP() {

  // GENERATE RANDOM OTP

  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000)
      .toString()
      .split("");
  };

  // STATES

  const [otp, setOtp] = useState(generateOTP());
  const [popupScale, setPopupScale] = useState(0);

  const [timer, setTimer] = useState(20);

  const [inputs, setInputs] = useState(["", "", "", "", "", ""]);

  const [positions, setPositions] = useState([0, 1, 2, 3, 4, 5]);

  const [message, setMessage] = useState("");

  const [showPopup, setShowPopup] = useState(true);

  const [securityNotice, setSecurityNotice] = useState(false);


  useEffect(() => {

  if (securityNotice) {

    const timeout = setTimeout(() => {

      setSecurityNotice(false);

    }, 3500);

    return () => clearTimeout(timeout);
  }

}, [securityNotice]);
  // AUTO OTP CHANGE 😭

  useEffect(() => {

    const interval = setInterval(() => {

      setTimer((prev) => {

        if (prev <= 1) {

          const newOtp = generateOTP();

          setOtp(newOtp);

          setInputs(["", "", "", "", "", ""]);

          setPositions([0, 1, 2, 3, 4, 5]);

          setSecurityNotice(true);

          setPopupScale((prev) => prev + 1);

          setMessage(
            "🔒 Security update from Modi Ji just for you 🇮🇳 OTP changed automatically."
          );

          return 20;
        }

        return prev - 1;
      });

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  // HIDE NOTICE

  useEffect(() => {

    if (securityNotice) {

      const timeout = setTimeout(() => {
        setSecurityNotice(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }

  }, [securityNotice]);

  // SHUFFLE INPUTS FIRST 15 SEC 😭

  useEffect(() => {

    if (timer <= 5) return;

    const interval = setInterval(() => {

      setPositions((prev) => {

        const updated = [...prev];

        const a = Math.floor(Math.random() * 6);
        const b = Math.floor(Math.random() * 6);

        [updated[a], updated[b]] =
          [updated[b], updated[a]];

        return updated;
      });

    }, 1200);

    return () => clearInterval(interval);

  }, [timer]);

  // VERIFY

  const handleVerify = () => {

    const entered = inputs.join("");

    const real = otp.join("");

    if (entered === real) {

      setMessage(
        "✅ Verification successful 🇮🇳"
      );

    }

    else {

      setMessage(
        "❌ Incorrect OTP entered 😭"
      );
    }
  };

  return (

    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-yellow-200 via-red-200 to-pink-300 relative">

      {/* HEADER */}

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
              text-2xl
              sm:text-4xl
              font-black
              text-blue-900
            ">

              NATIONAL OTP SECURITY PORTAL

            </h1>

            <p className="
              text-xs
              sm:text-sm
              mt-2
              font-semibold
            ">

              Ministry of Emotionally Secure Authentication

            </p>

          </div>

          <button className="
            bg-red-700
            text-white
            px-5
            py-3
            border-[5px]
            border-yellow-300
            font-black
            shadow-xl
            text-sm
            sm:text-base
          ">

            EMERGENCY LOGOUT

          </button>

        </div>

      </div>

      {/* MARQUEE 😭 */}

      <marquee

        scrollamount="15"

        className="
          bg-black
          text-yellow-300
          text-sm
          sm:text-2xl
          p-3
          font-bold
        "

      >

        ⚠ OTP boxes will rearrange for national security ⚠
        Please remain calm citizen 🇮🇳 ⚠
        Security Enhancement Activated By Modi Ji ⚠

      </marquee>

      {/* MODI SECURITY NOTICE 😭 */}


{/* NATIONAL SECURITY POPUP ATTACK 😭 */}

<AnimatePresence>

  {securityNotice && (

    <motion.div

      initial={{
        scale: 0,
        opacity: 0
      }}

      animate={{
        scale: 1 + popupScale * 0.15,
        opacity: 1
      }}

      exit={{
        opacity: 0
      }}

      transition={{
        duration: 0.6
      }}

      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        pointer-events-none
      "

    >

      <div className="
        bg-white
        border-[10px]
        border-red-700
        shadow-[0_0_80px_rgba(255,0,0,0.8)]
        w-[90%]
        sm:w-[700px]
        overflow-hidden
      ">

        {/* HEADER */}

        <div className="
          bg-red-700
          text-white
          px-6
          py-4
          text-xl
          sm:text-3xl
          font-black
          animate-pulse
        ">

          ⚠ NATIONAL SECURITY UPDATE ⚠

        </div>

        {/* BODY */}

        <div className="
          p-6
          sm:p-10
          bg-yellow-100
          relative
        ">

          {/* FLOATING MODI 😭 */}

          <motion.img

            animate={{
              rotate: [0, 4, -4, 0],
              scale: [1, 1.05, 1]
            }}

            transition={{
              repeat: Infinity,
              duration: 1.5
            }}

            src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Prime_Minister_Narendra_Modi_in_2024.jpg"

            className="
              w-28
              h-36
              sm:w-40
              sm:h-52
              object-cover
              border-[6px]
              border-white
              shadow-2xl
              mx-auto
              mb-6
            "

          />

          <h2 className="
            text-2xl
            sm:text-5xl
            text-center
            font-black
            text-red-700
            leading-tight
          ">

            OTP HAS BEEN UPGRADED
            FOR EXTRA SECURITY 🇮🇳

          </h2>

          <p className="
            mt-6
            text-center
            text-lg
            sm:text-2xl
            font-bold
            text-gray-700
            leading-9
          ">

            Dear Citizen,

            <br />

            Modi Ji noticed suspicious patriotism levels
            in your authentication process.

            <br /><br />

            Your previous OTP has been invalidated automatically.

          </p>

          {/* BLINKING WARNING 😭 */}

          <motion.div

            animate={{
              opacity: [1, 0, 1]
            }}

            transition={{
              repeat: Infinity,
              duration: 0.6
            }}

            className="
              mt-8
              bg-black
              text-yellow-300
              text-center
              p-5
              text-lg
              sm:text-2xl
              font-black
              border-[5px]
              border-red-600
            "

          >

            PLEASE MEMORISE NEW OTP IMMEDIATELY 😭

          </motion.div>

        </div>

      </div>

    </motion.div>

  )}

</AnimatePresence>
      

      {/* RANDOM POPUP 😭 */}

      {showPopup && (

        <motion.div

          initial={{
            scale: 0
          }}

          animate={{
            scale: 1
          }}

          className="
            fixed
            top-40
            left-3
            sm:left-10
            w-[260px]
            sm:w-[320px]
            bg-white
            border-[6px]
            border-red-700
            shadow-2xl
            z-40
          "

        >

          <div className="
            bg-red-700
            text-white
            p-3
            flex
            justify-between
          ">

            <h2 className="
              font-black
              text-sm
              sm:text-lg
            ">

              SECURITY ALERT

            </h2>

            <button

              onClick={() => setShowPopup(false)}

              className="
                text-[10px]
                bg-white
                text-black
                px-1
              "

            >

              X

            </button>

          </div>

          <div className="
            p-5
            text-sm
            sm:text-lg
            font-bold
            text-gray-700
            leading-7
          ">

            Please remember your OTP before it changes again 😭

          </div>

        </motion.div>

      )}

      {/* FLOATING MODI 😭 */}

      <motion.img

        animate={{
          y: [0, -12, 0],
          rotate: [0, 2, -2, 0]
        }}

        transition={{
          repeat: Infinity,
          duration: 3
        }}

        src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Prime_Minister_Narendra_Modi_in_2024.jpg"

        className="
          fixed
          right-2
          top-28
          w-24
          h-32
          sm:w-40
          sm:h-52
          object-cover
          border-[5px]
          sm:border-[8px]
          border-white
          shadow-2xl
          z-30
        "

      />

      {/* MAIN */}

      <div className="
        max-w-5xl
        mx-auto
        mt-8
        sm:mt-12
        mb-20
        px-3
        sm:px-6
      ">

        <div className="
          bg-white
          border-[6px]
          sm:border-[10px]
          border-blue-900
          shadow-2xl
          p-5
          sm:p-10
        ">

          {/* TOP */}

          <div className="
            flex
            flex-col
            lg:flex-row
            justify-between
            gap-6
            mb-10
          ">

            <div>

              <h2 className="
                text-3xl
                sm:text-5xl
                font-black
                text-red-700
              ">

                OTP VERIFICATION

              </h2>

              <p className="
                text-gray-600
                mt-3
                text-sm
                sm:text-base
              ">

                Complete verification before OTP migrates.

              </p>

            </div>

            {/* TIMER */}

            <motion.div

              animate={{
                scale: [1, 1.08, 1]
              }}

              transition={{
                repeat: Infinity,
                duration: 1
              }}

              className="
                bg-black
                text-lime-400
                text-3xl
                sm:text-5xl
                px-5
                py-4
                border-[5px]
                border-yellow-400
                font-black
                text-center
              "

            >

              00:{timer < 10 ? `0${timer}` : timer}

            </motion.div>

          </div>

          {/* OTP DISPLAY */}

          <motion.div

            animate={{
              rotate: [0, 1, -1, 0]
            }}

            transition={{
              repeat: Infinity,
              duration: 0.8
            }}

            className="
              bg-yellow-100
              border-[5px]
              border-orange-500
              p-5
              sm:p-8
              mb-16
            "

          >

            <div className="
              text-lg
              sm:text-xl
              font-bold
              mb-6
              text-gray-700
            ">

              YOUR OTP:

            </div>

            <div className="
              flex
              justify-center
              gap-2
              sm:gap-5
              flex-wrap
            ">

              {otp.map((digit, index) => (

                <motion.div

                  key={index}

                  animate={{
                    y: [0, -10, 0]
                  }}

                  transition={{
                    repeat: Infinity,
                    duration: 1 + index * 0.2
                  }}

                  className="
                    w-12
                    h-16
                    sm:w-20
                    sm:h-24
                    bg-black
                    text-lime-400
                    flex
                    items-center
                    justify-center
                    text-3xl
                    sm:text-5xl
                    font-black
                    border-[4px]
                    sm:border-[5px]
                    border-red-600
                    shadow-xl
                  "

                >

                  {digit}

                </motion.div>

              ))}

            </div>

          </motion.div>

          {/* HUGE GAP 😭 */}

          <div className="h-[350px] sm:h-[600px] relative">

            <motion.img

              animate={{
                rotate: [0, 1, -1, 0]
              }}

              transition={{
                repeat: Infinity,
                duration: 2
              }}

              src="https://images.news18.com/ibnlive/uploads/2024/03/narendra-modi-2024-03-5c16f1dd75d95c0f0919e6a695e1e9d.jpg"

              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                border-[8px]
                sm:border-[12px]
                border-yellow-400
              "
            />

            <div className="
              absolute
              bottom-3
              left-3
              bg-black/70
              text-white
              px-4
              py-3
              text-sm
              sm:text-2xl
              font-black
            ">

              KEEP SCROLLING CITIZEN 🇮🇳

            </div>

          </div>

          {/* INPUT SECTION */}

          <div className="mt-16">

            <div className="
              bg-red-50
              border
              border-red-300
              p-5
              mb-8
            ">

              <p className="
                text-red-700
                font-bold
                text-lg
              ">

                SECURITY MODE ACTIVE

              </p>

              <p className="
                text-gray-700
                mt-2
                leading-7
                text-sm
                sm:text-base
              ">

                OTP boxes will rearrange for first 15 seconds.
                Last 5 seconds are stable for emotional recovery.

              </p>

            </div>

            {/* INPUTS 😭 */}

            <div className="
              flex
              justify-center
              gap-3
              flex-wrap
              mb-10
            ">

              {positions.map((pos, visualIndex) => (

                <motion.input

                  key={visualIndex}

                  animate={{
                    rotate: timer > 5
                      ? [0, 6, -6, 0]
                      : 0,

                    x: timer > 5
                      ? [0, 4, -4, 0]
                      : 0
                  }}

                  transition={{
                    duration: 0.4
                  }}

                  type="text"

                  maxLength={1}

                  value={inputs[pos]}

                  onChange={(e) => {

                    const val = e.target.value;

                    if (!/^\d?$/.test(val)) return;

                    const updated = [...inputs];

                    updated[pos] = val;

                    setInputs(updated);
                  }}

                  className="
                    w-14
                    h-16
                    sm:w-20
                    sm:h-24
                    border-[4px]
                    border-blue-900
                    text-center
                    text-3xl
                    sm:text-5xl
                    font-black
                    bg-white
                    shadow-xl
                    outline-none
                    focus:bg-yellow-100
                  "

                />

              ))}

            </div>

            {/* VERIFY BUTTON */}

            <div className="flex justify-center">

              <motion.button

                whileHover={{
                  scale: 1.05
                }}

                whileTap={{
                  scale: 0.95
                }}

                onClick={handleVerify}

                className="
                  bg-green-600
                  hover:bg-red-700
                  text-white
                  px-8
                  py-4
                  sm:px-10
                  sm:py-5
                  text-xl
                  sm:text-2xl
                  font-black
                  border-[5px]
                  sm:border-[6px]
                  border-black
                  shadow-2xl
                "

              >

                VERIFY OTP

              </motion.button>

            </div>

            {/* MESSAGE */}

            {message && (

              <motion.div

                initial={{
                  scale: 0.8
                }}

                animate={{
                  scale: 1
                }}

                className="
                  mt-10
                  bg-black
                  text-yellow-300
                  p-5
                  sm:p-6
                  text-center
                  text-lg
                  sm:text-2xl
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