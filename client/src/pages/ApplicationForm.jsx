import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ApplicationForm() {

  // STATES 😭

  const [captcha, setCaptcha] = useState(
    Math.random().toString(36).substring(2, 8)
  );

  const [progress, setProgress] = useState(0);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const [buttonX, setButtonX] = useState(0);

  const [checked, setChecked] = useState(false);

  const [realSubmitVisible, setRealSubmitVisible] =
    useState(false);

  const [popups, setPopups] = useState([]);

  // RANDOM GOVT POPUPS 😭

  useEffect(() => {

    const govtMessages = [
      "Connecting to Delhi server...",
      "Citizen patriotism under review...",
      "Captcha synced nationally...",
      "Verification cluster overloaded...",
      "Please do not refresh portal...",
      "Identity confidence low...",
    ];

    const interval = setInterval(() => {

      const popup = {
        id: Date.now(),

        text:
          govtMessages[
          Math.floor(
            Math.random() * govtMessages.length
          )
          ],

        top: Math.random() * 80,

        left: Math.random() * 80,
      };

      setPopups((prev) => [...prev, popup]);

    }, 5000);

    return () => clearInterval(interval);

  }, []);

  // CAPTCHA CHANGE 😭

  useEffect(() => {

    const interval = setInterval(() => {

      setCaptcha(
        Math.random()
          .toString(36)
          .substring(2, 8)
      );

    }, 7000);

    return () => clearInterval(interval);

  }, []);

  // FAKE SUBMIT 😭

  const fakeSubmit = () => {

    // CHECKBOX NOT CHECKED 😭

    if (!checked) {

      setMessage(
        "⚠ Please confirm patriotism checkbox before proceeding."
      );

      return;
    }

    // START LOADING 😭

    setLoading(true);

    let value = 0;

    const interval = setInterval(() => {

      // GLITCHY LOADING 😭

      const random =
        Math.floor(Math.random() * 25) - 5;

      value += random;

      if (value < 0) value = 0;

      if (value >= 100) {

        clearInterval(interval);

        setTimeout(() => {

          setLoading(false);

          setMessage(
            "❌ Wrong button detected. Find the correct submit button!!!"
          );

        }, 1500);

        return;
      }

      setProgress(value);

    }, 400);
  };

  // REAL SUBMIT 😭🔥

  const realSubmit = () => {

    setMessage(
      "✅ Citizen verification submitted successfully 🇮🇳"
    );
  };

  return (

    <div className="
      min-h-screen
      overflow-x-hidden

      bg-gradient-to-br
      from-yellow-100
      via-red-100
      to-orange-200

      relative
    ">

      {/* RANDOM POPUPS 😭 */}

      {popups.map((popup) => (

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

            w-[150px]
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

      {/* HEADER 😭 */}

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

              font-black
              text-blue-900
            ">

              NATIONAL CITIZEN
              CROSS VERIFICATION SYSTEM

            </h1>

            <p className="
              text-xs
              sm:text-sm

              mt-2
              font-semibold
            ">

              Ministry of Multi Layer Authentication

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
          ">

            EMERGENCY EXIT

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

        ⚠ Hidden verification controls active ⚠
        Incorrect submission may reset identity confidence ⚠
        District verification overloaded ⚠

      </marquee>

      {/* MAIN 😭 */}

      <div className="
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

          {/* TITLE */}

          <div className="mb-10">

            <h2 className="
              text-2xl
              sm:text-4xl
              lg:text-5xl

              font-black
              text-red-700
            ">

              CITIZEN VERIFICATION FORM

            </h2>

            <p className="
              mt-4

              text-gray-600

              text-sm
              sm:text-base
            ">

              Please fill all mandatory optional fields carefully.

            </p>

          </div>

          {/* FORM 😭 */}

          <div className="
            grid
            grid-cols-1
            lg:grid-cols-2

            gap-6
          ">

            {[
              "Full Name",
              "Aadhaar Number",
              "Blood Group",
              "Internet Speed",
              "Favorite Freedom Fighter",
              "State",
              "District",
              "Zone",
              "Sub Zone",
              "Verification Cluster",
              "Pan Card",
              "Electricity Bill ID",
            ].map((field, index) => (

              <motion.div

                key={index}

                animate={{
                  x: [0, 2, -2, 0]
                }}

                transition={{
                  repeat: Infinity,
                  duration: 2 + index * 0.2
                }}

              >

                <label className="
                  block
                  mb-2

                  font-bold
                  text-gray-700
                ">

                  {field}

                </label>

                {field.includes("Zone") ||
                  field === "State" ||
                  field === "District" ? (

                  <div className="relative">

                    <select

                      onChange={(e) => {

                        // SECRET OPTION 😭🔥

                        if (
                          e.target.value ===
                          "DONE_SUBMIT"
                        ) {

                          setRealSubmitVisible(true);
                        }
                      }}

                      className="
                        w-full

                        border-[4px]
                        border-blue-900

                        p-4

                        bg-yellow-50
                        font-bold
                      "
                    >

                      <option>
                        Select {field}
                      </option>

                      <option>
                        National Sector Alpha
                      </option>

                      <option>
                        Central Verification Unit
                      </option>

                      <option>
                        Regional Identity Cluster
                      </option>

                      {/* SECRET 😭 */}

                      <option value="DONE_SUBMIT">

                      done

                      </option>

                    </select>

                  </div>

                ) : (

                  <input

                    type="text"

                    placeholder={`Enter ${field}`}

                    className="
                      w-full

                      border-[4px]
                      border-red-700

                      p-4

                      bg-gray-50

                      font-bold

                      outline-none

                      focus:bg-yellow-100
                    "
                  />

                )}

              </motion.div>

            ))}

          </div>

          {/* CAPTCHA 😭 */}

          <div className="mt-12">

            <h3 className="
              text-2xl
              font-black
              text-red-700
              mb-4
            ">

              SECURITY CAPTCHA

            </h3>

            <div className="
              flex
              flex-col
              sm:flex-row

              items-start
              sm:items-center

              gap-4
            ">

              <motion.div

                animate={{
                  rotate: [0, 2, -2, 0]
                }}

                transition={{
                  repeat: Infinity,
                  duration: 1
                }}

                className="
                  bg-black
                  text-lime-400

                  px-8
                  py-5

                  text-2xl
                  font-black

                  border-[5px]
                  border-yellow-400
                "

              >

                {captcha}

              </motion.div>

              <input

                type="text"

                placeholder="Enter captcha before it changes"

                className="
                  border-[4px]
                  border-red-700

                  p-4

                  w-full
                  sm:w-[400px]

                  font-bold
                  bg-yellow-50
                "
              />

            </div>

          </div>

          <div className="
  mt-16
  flex
  items-center
  gap-4
  relative
">

            {/* RUNNING CHECKBOX 😭 */}

            <motion.input

              animate={{
                x: [0, 80, -60, 40, 0],
                y: [0, -10, 10, -5, 0]
              }}

              transition={{
                repeat: Infinity,
                duration: 3
              }}

              id="patriot"

              type="checkbox"

              checked={checked}

              readOnly

              className="
      w-6
      h-6

      pointer-events-none
    "
            />

            {/* ONLY LABEL WORKS 😭 */}

            <label

              htmlFor="patriot"

              onClick={() =>
                setChecked(!checked)
              }

              className="
      font-black
      text-gray-700

      cursor-pointer

      bg-yellow-200

      px-4
      py-2

      border-[3px]
      border-red-700

      shadow-lg

      hover:scale-105

      transition
    "
            >

              Click this text to confirm patriotism 🇮🇳

            </label>

          </div>

          {/* GLITCHY LOADING 😭 */}

          {loading && (

            <div className="mt-16">

              <div className="
                flex
                justify-between

                mb-2

                font-bold
              ">

                <span>
                  Uploading citizen identity...
                </span>

                <span>
                  {progress}%
                </span>

              </div>

              <div className="
                w-full

                bg-gray-300

                h-8

                overflow-hidden

                border-[4px]
                border-black
              ">

                <motion.div

                  animate={{
                    width: `${progress}%`
                  }}

                  transition={{
                    duration: 0.2
                  }}

                  className="
                    bg-green-600
                    h-full
                  "

                />

              </div>

            </div>

          )}

          {/* FAKE BUTTON 😭 */}

          <div className="
            mt-16

            flex
            justify-center
          ">

            <motion.button

              onMouseEnter={() => {

                if (
                  window.innerWidth > 768
                ) {

                  setButtonX(
                    Math.random() * 300 - 150
                  );
                }
              }}

              animate={{
                x: buttonX
              }}

              whileTap={{
                scale: 0.9
              }}

              onClick={fakeSubmit}

              className="
                bg-green-700
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

              FINAL SUBMIT

            </motion.button>

          </div>

          {/* REAL SUBMIT 😭🔥 */}

          {realSubmitVisible && (

            <div className="
              mt-10
              flex
              justify-center
            ">

              <button

                onClick={realSubmit}

                className="
                  bg-black
                  text-lime-400

                  px-8
                  py-4

                  text-xl
                  font-black

                  border-[5px]
                  border-yellow-400
                "
              >

                DONE

              </button>

            </div>

          )}

          {/* MESSAGE 😭 */}

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
  );
}

export default ApplicationForm;