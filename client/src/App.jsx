import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import OTP from "./pages/OTP";
import ApplicationForm from "./pages/ApplicationForm";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/otp" element={<OTP />} />
        <Route path="/" element={<Login />} />

        <Route path="/application" element={<ApplicationForm />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;