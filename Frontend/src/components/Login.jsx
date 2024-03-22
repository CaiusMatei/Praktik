import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ForgetPass from "./ForgetPass";
import { state, showGetPass,showUser} from "../redux/redux";
export default function Login() {
    const navigate = useNavigate();
    const passStatus = state().passStatus;
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userName && password) {
            console.log(userName);
            console.log(password);
            navigate("/schema");
            showUser()
        } else {
            alert("Please complete inputs");
        }
    };
    return (
        <div className="w-full flex items-center">
            {passStatus ? (
                <ForgetPass />
            ) : (
                <div className="w-full h-full flex flex-col items-center ">
                    <form onSubmit={handleSubmit} className="text-center  ">
                        <div className="w-full text-center flex justify-center">
                            <h3 className="w-[280px]    h-[36px] font-[700] font-din_medium text-[20px] leading-[36px] text-black text-center">
                                Logga in
                            </h3>
                        </div>
                        <label className="flex items-end w-[371px]  h-[70px]  border-b-[1px] border-b-slate-600  pb-1 cursor-pointer mb-5 ">
                            <i className="fa-regular fa-user w-[63px]  text-[23px]  p-1 text-center text-slate-900  "></i>
                            <input
                                type="text"
                                placeholder="Användernamn"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                className="w-[155px] h-[29px] font-[400] font-din text-[20px]  outline-none placeholder-black "
                            />
                        </label>
                        <label className="flex items-end w-[371px]  h-[70px]  border-b-[1px] border-b-slate-600  pb-1 cursor-pointer ">
                            <i className="fa-solid fa-lock w-[63px]  text-[23px] text-center p-1 text-slate-700 "></i>
                            <input
                                type="password"
                                placeholder="Lösenord"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete=""
                                className="w-[155px] h-[29px] font-[400] font-din text-[20px]  outline-none placeholder-black"
                            />
                        </label>
                        <button
                            type="submit"
                            className="w-[229px] m-[20px] bg-[#4E69F6] rounded-[12px]  text-center cursor-pointer "
                        >
                            <span className="w-[80px] font-[700] font-din_medium text-[16px] leading-[36px]   text-white">
                                Logga in
                            </span>
                        </button>
                    </form>
                    <button
                        type="button"
                        onClick={showGetPass}
                        className="w-[280px]   flex justify-end items-end text-start   "
                    >
                        <span className="  text-[16px]  border-b-[1px] border-b-slate-400 cursor-pointer text-end">
                            Glömt lösenord?
                        </span>
                    </button>
                </div>
            )}
        </div>
    );
}
