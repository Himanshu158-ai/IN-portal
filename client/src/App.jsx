import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import OTP from "./pages/OTP";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/otp" element={<OTP />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;