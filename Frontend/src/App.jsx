import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Schema from "./components/Schema";
import Header from "./components/Header";
import Home from "./components/Home";
import ForgetPass from "./components/ForgetPass";
import UpdateProfile from "./components/UpdateProfile";
function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                <Route path="/" element = {<Home/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/schema" element={<Schema />} />
                    <Route path="/forgerPass" element = {<ForgetPass/>} />
                    <Route path="/updateProfile" element = {<UpdateProfile/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
