import { useState } from "react";

export default function UpdateProfile() {
    const [showPass1, setShowPass1] = useState(true);
    const [showPass2, setShowPass2] = useState(true);
    return (
        <div className="w-full flex items-center justify-center">
            <div className=" border w-[709px] h-[673px] m-[59px] rounded-[12px] bg-[#f1f1f1] ">
                <div className=" m-[24px]">
                    <h1 className="h-[44px] w-[198px]  flex justify-center items-center font-[700] font-din_medium text-[23px] leading-[36px] text-black">
                        Redigera Profilen
                    </h1>
                </div>
                <form action="" className="m-[30px] font-[400] font-din    ">
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
                                className="h-[44px] rounded-[9px] border-[1px] border-black  font-[400] font-din text-[20px] px-4   outline-none placeholder-black bg-[#f1f1f1] "
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
                                className="h-[44px] rounded-[9px] border-[1px] border-black  font-[400] font-din text-[20px] px-4   outline-none placeholder-black bg-[#f1f1f1] "
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
                                    className="outline-none bg-[#f1f1f1] placeholder-black "
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
                                    className="outline-none bg-[#f1f1f1] placeholder-black "
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
                                    className="outline-none bg-[#f1f1f1] placeholder-black "
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
                                    className="outline-none bg-[#f1f1f1] placeholder-black "
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
            <div className=" flex flex-col justify-start w-[450px]   ">
                <button
                    type="button"
                    className="font-[700] font-din_regular text-[23px] leading-[36px] bg-[#f1f1f1] w-[339px] h-[87px]  rounded-[7px] my-[9px] text-black"
                >
                    Lägga till användare
                </button>
                <button
                    type="button"
                    className="font-[700] font-din_regular text-[23px] leading-[36px] bg-black text-white w-[339px] h-[87px] rounded-[7px] my-[9px]"
                >
                    Se användare
                </button>
            </div>
        </div>
    );
}
