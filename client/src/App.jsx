import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import ForgetPassword from "./Components/Auth/ForgetPassword";
import VerifyOTP from "./Components/Auth/VerifyOTP";
import UpdatePassword from "./Components/Auth/UpdatePassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget/password" element={<ForgetPassword />} />
        <Route path="/verify" element={<VerifyOTP />} />
        <Route path="/password/update" element={<UpdatePassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
