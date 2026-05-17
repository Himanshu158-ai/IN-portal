import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Howl } from "howler";



function OTP() {

  // OTP GENERATOR

  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000)
      .toString()
      .split("");
  };

  // STATES

  const [otp, setOtp] = useState(generateOTP());

  const [timer, setTimer] = useState(30);

  const [inputs, setInputs] = useState([
    "",
    "",
    "",
    "",
    "",
    ""
  ]);

  const [message, setMessage] = useState("");

  const [showPopup, setShowPopup] = useState(true);

  const [randomPopups, setRandomPopups] = useState([]);


  // SIDEWAYS SCROLL 😭💀

  useEffect(() => {

    const handleWheel = (e) => {

      window.scrollBy({
        left: e.deltaY * 2,
        top: 0,
        behavior: "smooth"
      });
    };

    window.addEventListener(
      "wheel",
      handleWheel
    );

    return () => {

      window.removeEventListener(
        "wheel",
        handleWheel
      );
    };

  }, []);

  // TIMER 😭

  useEffect(() => {

    const interval = setInterval(() => {

      setTimer((prev) => {

        if (prev <= 1) {

          const newOtp = generateOTP();

          setOtp(newOtp);

          setInputs([
            "",
            "",
            "",
            "",
            "",
            ""
          ]);

          setMessage(
            "⚠ OTP automatically regenerated for national security."
          );

          glitchSound.play();

          return 30;
        }

        return prev - 1;
      });

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  // USER INPUT SHUFFLE 😭🔥

  useEffect(() => {

    const interval = setInterval(() => {

      setInputs((prev) => {

        const shuffled = [...prev];

        for (
          let i = shuffled.length - 1;
          i > 0;
          i--
        ) {

          const j =
            Math.floor(Math.random() * (i + 1));

          [shuffled[i], shuffled[j]] =
            [shuffled[j], shuffled[i]];
        }

        return shuffled;
      });

      glitchSound.play();

    }, 10000);

    return () => clearInterval(interval);

  }, []);

  // RANDOM GOVT POPUPS 😭

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

        text:
          messages[
          Math.floor(Math.random() * messages.length)
          ],

        top: Math.random() * 80,

        left: Math.random() * 80,
      };

      setRandomPopups((prev) => [...prev, popup]);

    }, 3500);

    return () => clearInterval(interval);

  }, []);

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

      {/* RANDOM POPUPS 😭 */}

      {randomPopups.map((popup) => (

        <motion.div

          key={popup.id}

          initial={{
            opacity: 0,
            scale: 0.5
          }}

          animate={{
            opacity: 1,
            scale: 1
          }}

          className="
            fixed
            z-50
            bg-white
            border-[4px]
            border-blue-900
            shadow-2xl

            w-[160px]
            sm:w-[220px]

            p-3
          "

          style={{
            top: `${popup.top}%`,
            left: `${popup.left}%`
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

          <p className="
            text-xs
            sm:text-sm
            font-semibold
            text-gray-700
          ">

            {popup.text}

          </p>

        </motion.div>

      ))}

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
          sm:text-lg
          lg:text-2xl

          p-3
          font-bold
        "

      >

        ⚠ OTP input values shuffle every 10 seconds ⚠
        Please stay calm citizen 🇮🇳 ⚠
        National verification in progress ⚠

      </marquee>

      {/* FLOATING POPUP 😭 */}

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
            top-36
            left-2
            sm:left-10

            w-[220px]
            sm:w-[320px]

            bg-white
            border-[5px]
            sm:border-[6px]

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
            p-4
            sm:p-5

            text-sm
            sm:text-lg

            font-bold
            text-gray-700
            leading-7
          ">

            Please remember your OTP before it starts moving 😭

          </div>

        </motion.div>

      )}

      {/* MAIN 😭 */}

      <div className="
        min-w-[1200px]
        lg:min-w-0

        w-full
        max-w-7xl

        mx-auto

        mt-4
        sm:mt-8
        lg:mt-12

        mb-10
        sm:mb-20

        px-2
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
                text-2xl
                sm:text-4xl
                lg:text-5xl

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

                Complete verification before confusion increases.

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
              "

            >

              00:{timer < 10 ? `0${timer}` : timer}

            </motion.div>

          </div>

          {/* OTP DISPLAY 😭 */}

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
                    y: [0, -10, 0],
                    opacity: [1, 0.6, 1],
                    x: [0, 3, -3, 0]
                  }}

                  transition={{
                    repeat: Infinity,
                    duration: 1 + index * 0.2
                  }}

                  className="
                    w-12
                    h-16
                    text-3xl

                    sm:w-16
                    sm:h-20
                    sm:text-4xl

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

          {/* HUGE GAP 😭 */}

          <div className="
            h-[250px]

            sm:h-[400px]

            md:h-[500px]

            lg:h-[700px]

            relative
          ">

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

              text-sm
              sm:text-lg
              lg:text-2xl

              font-black
            ">

              SCROLL RIGHT TO CONTINUE 🇮🇳

            </div>

          </div>

          {/* INPUT SECTION 😭 */}

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

                Enter key moves to next box.
                Input values shuffle every 10 seconds.

              </p>

            </div>

            {/* INPUTS 😭 */}

            <div className="
              flex
              justify-center

              gap-2
              sm:gap-4

              flex-wrap

              mb-10
            ">

              {inputs.map((value, index) => (

                <motion.input

                  key={index}

                  animate={{
                    rotate: [0, 6, -6, 0],
                    x: [0, 4, -4, 0]
                  }}

                  transition={{
                    duration: 0.4
                  }}

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

                      const next =
                        e.target.nextElementSibling;

                      if (next) {

                        next.focus();
                      }
                    }
                  }}

                  className="
                    w-12
                    h-16
                    text-3xl

                    sm:w-16
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

                  px-5
                  py-3
                  text-lg

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

                  p-4
                  sm:p-6

                  text-center

                  text-lg
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