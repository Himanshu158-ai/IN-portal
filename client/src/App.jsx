import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import OTP from "./pages/OTP";
import ApplicationForm from "./pages/ApplicationForm";
import FinalPage from "./pages/FinalPage";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/otp" element={<OTP />} />
        <Route path="/" element={<Login />} />

        <Route path="/application" element={<ApplicationForm />} />
        <Route path="/final" element={<FinalPage />} />


      </Routes>

    </BrowserRouter>

  );
}

export default App;