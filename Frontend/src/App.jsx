import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Schema from "./components/Schema";
import Header from "./components/Header";
import Home from "./components/Home";
import ForgetPass from "./components/ForgetPass";
import UpdateProfile from "./components/UpdateProfile";
import AddUser from "./components/AddUser";
import Users from "./components/Users";
function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/schema" element={<Schema />} />
                    <Route path="/forgerPass" element={<ForgetPass />} />
                    <Route path="/updateProfile" element={<UpdateProfile />} />
                    <Route path="/addUser" element={<AddUser />} />
                    <Route path="/users" element={<Users />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
