import { useState } from "react";

function FakePopup() {

  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed top-10 left-10 z-50 bg-white border-[6px] border-red-700 shadow-2xl w-[320px] animate-bounce">

      <div className="bg-red-700 text-white p-2 flex justify-between items-center">

        <h2 className="font-bold">
          ⚠ Security Warning
        </h2>

        <button
          onClick={() => setShow(false)}
          className="text-[8px] bg-white text-black px-1"
        >
          X
        </button>

      </div>

      <div className="p-4 text-center">

        <p className="text-xl font-bold text-red-600">
          Your device may already be monitored 😭
        </p>

        <button className="mt-4 bg-green-600 text-white px-4 py-2 border-4 border-black">
          I Agree
        </button>

      </div>

    </div>
  );
}

export default FakePopup;