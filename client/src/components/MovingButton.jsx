import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MovingButton() {

  const navigate = useNavigate();

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const moveButton = () => {

    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 120) - 60;

    setPosition({
      x: randomX,
      y: randomY,
    });
  };

  return (

    <motion.button

      animate={{
        x: position.x,
        y: position.y,
      }}

      transition={{
        type: "spring",
        stiffness: 300,
      }}

      onMouseEnter={moveButton}

      onClick={() => navigate("/otp")}

      className="bg-green-500 hover:bg-red-600 text-white text-2xl font-bold px-8 py-4 border-[6px] border-blue-900 shadow-2xl"

    >

      LOGIN

    </motion.button>
  );
}

export default MovingButton;