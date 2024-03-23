import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function UpdateProfile() {
    const navigate = useNavigate();
    const [showPass1, setShowPass1] = useState(true);
    const [showPass2, setShowPass2] = useState(true);
    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email1, setEmail1] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (fullName) {
            console.log(fullName);
        } else {
            alert("Vänligen ange namn och efternamn");
        }
        if (userName) {
            console.log(userName);
        } else {
            alert("Vänligen ange använder namn");
        }
        if (password && confirmPassword && password === confirmPassword) {
            console.log(password);
        } else {
            alert("Vänligen ange lösenord");
        }
        if (email1 && confirmEmail && email1 === confirmEmail) {
            console.log(email1);
        } else {
            alert("Vänligen ange email");
        }
    };
    return (
        <div className="w-full flex items-center justify-center">
            <div className=" border w-[709px] h-[673px] m-[59px] rounded-[12px] bg-[#e9e9e9]  ">
                <div className=" m-[24px]">
                    <h1 className="h-[44px] w-[198px]  flex justify-center items-center font-[700] font-din_medium text-[23px] leading-[36px] text-black">
                        Redigera Profilen
                    </h1>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="m-[30px] font-[400] font-din    "
                >
                    <div className="flex justify-between">
                        <label
                            htmlFor=""
                            className="w-[307px] h-[73px]  flex flex-col my-[23px]"
                        >
                            <span className="my-[3px] font-din">
                                Namn och efternamen
                            </span>
                            <input
                                type="text"
                                placeholder="Elon Azulay "
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="h-[44px] rounded-[9px] border-[1px] border-black  font-[400] font-din text-[20px] px-4   outline-none placeholder-black bg-[#e9e9e9]  "
                            />
                        </label>
                        <label
                            htmlFor=""
                            className="w-[307px] h-[73px]  flex flex-col my-[23px]"
                        >
                            <span className="my-[3px] font-din">
                                Användernamn
                            </span>
                            <input
                                type="text"
                                placeholder="@Eazulay"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                className="h-[44px] rounded-[9px] border-[1px] border-black  font-[400] font-din text-[20px] px-4   outline-none placeholder-black bg-[#e9e9e9]  "
                            />
                        </label>
                    </div>
                    <div className="flex justify-between">
                        <label
                            htmlFor=""
                            className="w-[307px] h-[73px]  flex flex-col my-[23px]"
                        >
                            <span className="my-[3px] font-din">Lösenord</span>
                            <div className=" flex items-center justify-between h-[44px] rounded-[9px] border-[1px] border-black  font-[400] font-din text-[20px] px-4   outline-none placeholder-black">
                                <input
                                    type={showPass1 ? "password" : "text"}
                                    placeholder={
                                        showPass1 ? "********" : "Lösenord"
                                    }
                                    autoComplete=""
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="outline-none bg-[#e9e9e9]  placeholder-black "
                                />
                                {showPass1 ? (
                                    <i
                                        className="fa-solid fa-eye"
                                        onClick={() => setShowPass1(false)}
                                    ></i>
                                ) : (
                                    <i
                                        className="fa-solid fa-eye-slash"
                                        onClick={() => setShowPass1(true)}
                                    ></i>
                                )}
                            </div>
                        </label>
                        <label
                            htmlFor=""
                            className="w-[307px] h-[73px]  flex flex-col my-[23px]"
                        >
                            <span className="my-[3px] font-din">
                                Bekräfta lösenord
                            </span>
                            <div className=" flex items-center justify-between h-[44px] rounded-[9px] border-[1px] border-black  font-[400] font-din text-[20px] px-4   outline-none placeholder-black">
                                <input
                                    type={showPass2 ? "password" : "text"}
                                    placeholder={
                                        showPass2
                                            ? "********"
                                            : "Bekräfta lösenord"
                                    }
                                    autoComplete=""
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    className="outline-none bg-[#e9e9e9]  placeholder-black "
                                />
                                {showPass2 ? (
                                    <i
                                        className="fa-solid fa-eye"
                                        onClick={() => setShowPass2(false)}
                                    ></i>
                                ) : (
                                    <i
                                        className="fa-solid fa-eye-slash"
                                        onClick={() => setShowPass2(true)}
                                    ></i>
                                )}
                            </div>
                        </label>
                    </div>
                    <div className=" flex justify-between">
                        <label
                            htmlFor=""
                            className="w-[307px] h-[73px]  flex flex-col my-[23px]"
                        >
                            <span className="my-[3px] font-din">Meil</span>
                            <div className=" flex items-center justify-between h-[44px] rounded-[9px] border-[1px] border-black  font-[400] font-din text-[20px] px-4   outline-none placeholder-black">
                                <input
                                    type="email"
                                    placeholder="Elonazulay@chas.se"
                                    value={email1}
                                    onChange={(e) => setEmail1(e.target.value)}
                                    className="outline-none bg-[#e9e9e9]  placeholder-black "
                                />
                                <i className="fa-regular fa-envelope text-[25px]"></i>
                            </div>
                        </label>
                        <label
                            htmlFor=""
                            className="w-[307px] h-[73px]  flex flex-col my-[23px]"
                        >
                            <span className="my-[3px] font-din">
                                Bekräfta mejlet
                            </span>
                            <div className=" flex items-center justify-between h-[44px] rounded-[9px] border-[1px] border-black  font-[400] font-din text-[20px] px-4   outline-none placeholder-black">
                                <input
                                    type="email"
                                    placeholder="Elonazulay@chas.se"
                                    value={confirmEmail}
                                    onChange={(e) =>
                                        setConfirmEmail(e.target.value)
                                    }
                                    className="outline-none bg-[#e9e9e9]  placeholder-black "
                                />
                                <i className="fa-regular fa-envelope text-[25px]"></i>
                            </div>
                        </label>
                    </div>
                    <div className="my-[48px] ">
                        <button
                            type="submit"
                            className="w-[203px] h-[44px] rounded-[7px] bg-[#4E69F6] text-white font-din_medium text-[20px]"
                        >
                            Uppdatera info
                        </button>
                    </div>
                </form>
            </div>
            <div className=" flex flex-col justify-start w-[450px]  mb-20  ">
                <button
                    type="button"
                    onClick={() => navigate("/addUser")}
                    className="font-[700] font-din_regular text-[23px] leading-[36px] bg-[#e9e9e9] w-[339px] h-[87px]  rounded-[7px] mb-[9px] text-black"
                >
                    Lägga till användare
                </button>
                <button
                    type="button"
                    onClick={() => navigate("/users")}
                    className="font-[700] font-din_regular text-[23px] leading-[36px] bg-black text-white w-[339px] h-[87px] rounded-[7px] mt-[9px]"
                >
                    Se användare
                </button>
            </div>
        </div>
    );
}
