import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function FinalPage() {

  // STATES 😭

  const [showCaptcha, setShowCaptcha] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const [progress, setProgress] = useState(0);

  const [sessionExpired, setSessionExpired] =
    useState(false);

  const [redirectTimer, setRedirectTimer] =
    useState(5);

  const [selectedImages, setSelectedImages] =
    useState([]);

  // FAKE IMAGE DATA 😭

  const images = [
    "https://images.unsplash.com/photo-1504215680853-026ed2a45def",

    "https://images.unsplash.com/photo-1494526585095-c41746248156",

    "https://images.unsplash.com/photo-1519501025264-65ba15a82390",

    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",

    "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b",

    "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
  ];

  // REDIRECT 😭

  useEffect(() => {

    if (sessionExpired) {

      const interval = setInterval(() => {

        setRedirectTimer((prev) => {

          if (prev <= 1) {

            // REDIRECT 😭

            window.location.href = "/";

            return 0;
          }

          return prev - 1;
        });

      }, 1000);

      return () => clearInterval(interval);
    }

  }, [sessionExpired]);

  // CAPTCHA SUBMIT 😭

  const handleCaptchaSubmit = () => {

    setLoading(true);

    let value = 0;

    const interval = setInterval(() => {

      // GLITCHY LOADING 😭

      const random =
        Math.floor(Math.random() * 35) - 10;

      value += random;

      if (value < 0) value = 0;

      if (value >= 100) {

        clearInterval(interval);

        setProgress(100);

        setTimeout(() => {

          setLoading(false);

          setSessionExpired(true);

        }, 2000);

        return;
      }

      setProgress(value);

    }, 400);
  };

  return (

    <div className="
      min-h-screen

      overflow-x-hidden

      bg-gradient-to-br
      from-green-100
      via-yellow-100
      to-orange-200

      relative
    ">

      {/* CONFETTI 😭 */}

      <div className="
        absolute
        inset-0
        pointer-events-none
        overflow-hidden
      ">

        {[...Array(40)].map((_, index) => (

          <motion.div

            key={index}

            animate={{
              y: [-100, 1200],
              rotate: [0, 360],
            }}

            transition={{
              repeat: Infinity,
              duration: 3 + Math.random() * 5,
              delay: Math.random() * 2,
            }}

            className="
              absolute

              w-4
              h-4

              bg-red-500
              rounded-full
            "

            style={{
              left: `${Math.random() * 100}%`,
            }}

          />

        ))}

      </div>

      {/* HEADER 😭 */}

      <div className="
        bg-gradient-to-r
        from-orange-500
        via-white
        to-green-500

        border-b-[8px]
        border-green-700

        shadow-2xl

        p-4
        sm:p-6
      ">

        <h1 className="
          text-center

          text-2xl
          sm:text-4xl
          lg:text-5xl

          font-black

          text-blue-900
        ">

          NATIONAL VERIFICATION SUCCESS PORTAL

        </h1>

      </div>

      {/* MAIN 😭 */}

      <div className="
        w-full
        max-w-6xl

        mx-auto

        px-4
        sm:px-8

        py-10
      ">

        {/* SUCCESS 😭 */}

        {!showCaptcha &&
        !loading &&
        !sessionExpired && (

          <motion.div

            initial={{
              scale: 0.8,
              opacity: 0
            }}

            animate={{
              scale: 1,
              opacity: 1
            }}

            className="
              bg-white

              border-[8px]
              border-green-700

              shadow-2xl

              p-6
              sm:p-12

              text-center
            "

          >

            <div className="
              text-6xl
              sm:text-8xl

              mb-6
            ">

              🎉

            </div>

            <h2 className="
              text-3xl
              sm:text-5xl

              font-black

              text-green-700
            ">

              VERIFICATION SUCCESSFUL 🇮🇳

            </h2>

            <p className="
              mt-6

              text-lg
              sm:text-2xl

              font-bold

              text-gray-700

              leading-10
            ">

              Congratulations Citizen.

              <br />

              You are among the top
              0.001% verified citizens.

            </p>

            {/* CERTIFICATE 😭 */}

            <motion.button

              whileHover={{
                scale: 1.05
              }}

              whileTap={{
                scale: 0.9
              }}

              onClick={() => {

                // SHAKE 😭

                document.body.style.transform =
                  "translateX(10px)";

                setTimeout(() => {

                  document.body.style.transform =
                    "translateX(-10px)";
                }, 100);

                setTimeout(() => {

                  document.body.style.transform =
                    "translateX(0px)";
                }, 200);

                // SHOW CAPTCHA 😭

                setTimeout(() => {

                  setShowCaptcha(true);

                }, 1000);
              }}

              className="
                mt-12

                bg-green-700
                hover:bg-red-700

                text-white

                px-8
                py-5

                text-xl
                sm:text-3xl

                font-black

                border-[6px]
                border-black

                shadow-2xl
              "

            >

              DOWNLOAD CERTIFICATE

            </motion.button>

          </motion.div>

        )}

        {/* CAPTCHA 😭 */}

        {showCaptcha &&
        !loading &&
        !sessionExpired && (

          <motion.div

            initial={{
              scale: 0.8,
              opacity: 0
            }}

            animate={{
              scale: 1,
              opacity: 1
            }}

            className="
              mt-10

              bg-white

              border-[8px]
              border-red-700

              shadow-2xl

              p-6
              sm:p-10
            "

          >

            <h2 className="
              text-2xl
              sm:text-4xl

              font-black

              text-red-700

              text-center
            ">

              ⚠ FINAL HUMAN VERIFICATION REQUIRED

            </h2>

            <p className="
              mt-6

              text-center

              text-lg
              sm:text-2xl

              font-bold

              text-gray-700
            ">

              Select all images containing
              traffic lights 😭

            </p>

            {/* IMAGES 😭 */}

            <div className="
              grid
              grid-cols-2
              sm:grid-cols-3

              gap-4

              mt-10
            ">

              {images.map((img, index) => (

                <motion.div

                  whileHover={{
                    scale: 1.03
                  }}

                  key={index}

                  onClick={() => {

                    if (
                      selectedImages.includes(index)
                    ) {

                      setSelectedImages(
                        selectedImages.filter(
                          (i) => i !== index
                        )
                      );

                    }

                    else {

                      setSelectedImages([
                        ...selectedImages,
                        index,
                      ]);
                    }
                  }}

                  className={`
                    relative
                    cursor-pointer

                    border-[6px]

                    ${
                      selectedImages.includes(index)
                        ? "border-green-600"
                        : "border-transparent"
                    }
                  `}
                >

                  <img

                    src={`${img}?w=500&q=10&blur=20`}

                    alt="captcha"

                    className="
                      w-full
                      h-40
                      sm:h-52

                      object-cover

                      blur-sm
                    "
                  />

                  {/* RANDOM LABEL 😭 */}

                  <div className="
                    absolute
                    bottom-2
                    left-2

                    bg-black/70
                    text-white

                    px-2
                    py-1

                    text-xs
                    sm:text-sm

                    font-bold
                  ">

                    maybe traffic light?

                  </div>

                </motion.div>

              ))}

            </div>

            {/* SUBMIT 😭 */}

            <div className="
              mt-10
              flex
              justify-center
            ">

              <motion.button

                whileHover={{
                  scale: 1.05
                }}

                whileTap={{
                  scale: 0.9
                }}

                onClick={handleCaptchaSubmit}

                className="
                  bg-red-700
                  hover:bg-black

                  text-white

                  px-8
                  py-4

                  text-xl
                  sm:text-2xl

                  font-black

                  border-[6px]
                  border-black

                  shadow-2xl
                "

              >

                VERIFY HUMANITY

              </motion.button>

            </div>

          </motion.div>

        )}

        {/* LOADING 😭 */}

        {loading && (

          <motion.div

            initial={{
              opacity: 0
            }}

            animate={{
              opacity: 1
            }}

            className="
              mt-16

              bg-black

              border-[8px]
              border-yellow-400

              p-6
              sm:p-10
            "

          >

            <h2 className="
              text-center

              text-yellow-300

              text-2xl
              sm:text-4xl

              font-black
            ">

              CONNECTING TO NATIONAL DATABASE...

            </h2>

            <div className="
              mt-10

              w-full

              bg-gray-700

              h-10

              overflow-hidden

              border-[4px]
              border-white
            ">

              <motion.div

                animate={{
                  width: `${progress}%`
                }}

                transition={{
                  duration: 0.2
                }}

                className="
                  bg-green-500
                  h-full
                "

              />

            </div>

            <div className="
              mt-4

              text-center

              text-yellow-300

              text-xl
              sm:text-3xl

              font-black
            ">

              {progress}%
            </div>

          </motion.div>

        )}

        {/* SESSION EXPIRED 😭 */}

        {sessionExpired && (

          <motion.div

            initial={{
              scale: 0.7,
              opacity: 0
            }}

            animate={{
              scale: 1,
              opacity: 1
            }}

            className="
              mt-16

              bg-red-700

              border-[8px]
              border-black

              shadow-2xl

              p-6
              sm:p-12

              text-center
            "

          >

            <div className="
              text-6xl
              sm:text-8xl

              mb-6
            ">

              ⚠

            </div>

            <h2 className="
              text-white

              text-3xl
              sm:text-6xl

              font-black
            ">

              SESSION EXPIRED

            </h2>

            <p className="
              mt-8

              text-yellow-300

              text-lg
              sm:text-3xl

              font-black

              leading-10
            ">

              Reason:

              <br />

              You took too long
              to verify patriotism 😭

            </p>

            {/* REDIRECT 😭 */}

            <div className="
              mt-10

              text-white

              text-xl
              sm:text-4xl

              font-black
            ">

              Redirecting to login page in
              {" "}
              {redirectTimer}...
            </div>

            {/* HELP 😭 */}

            <div className="
              mt-12
            ">

              <a

                href="https://youtu.be/dQw4w9WgXcQ"

                target="_blank"

                rel="noreferrer"

                className="
                  text-yellow-200

                  underline

                  text-sm
                  sm:text-lg
                "
              >

                Need Help?

              </a>

            </div>

          </motion.div>

        )}

      </div>

    </div>
  );
}

export default FinalPage;