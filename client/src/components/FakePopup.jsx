import { useState } from "react";

function FakePopup() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 sm:top-10 sm:left-10 sm:right-auto z-50 bg-white border-[6px] border-red-700 shadow-2xl w-[260px] sm:w-[320px] animate-bounce">
      <div className="bg-red-700 text-white p-2 flex justify-between items-center">
        <h2 className="font-bold text-sm sm:text-base">Security Warning</h2>
        <button
          onClick={() => setShow(false)}
          className="text-[10px] bg-white text-black px-2 py-0.5 font-bold"
        >
          X
        </button>
      </div>

      <div className="p-4 text-center">
        <p className="text-base sm:text-xl font-bold text-red-600">
          Your device may already be monitored
        </p>
        <button className="mt-4 bg-green-600 text-white px-4 py-2 border-4 border-black text-sm sm:text-base">
          I Agree
        </button>
      </div>
    </div>
  );
}

export default FakePopup;