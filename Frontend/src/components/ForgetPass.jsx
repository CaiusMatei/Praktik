import { useState } from "react";
import { hideGetPass } from "../redux/redux";
export default function ForgetPass() {
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            console.log(email);
            hideGetPass();
        }
        else{
            alert("Please complete input")
        }
    };
    return (
        <div className="w-full h-full flex flex-col items-center">
            <form onSubmit={handleSubmit} className=" text-end ">
                <div className="w-full text-center flex justify-start">
                    <h3 className="w-[128px] h-[36px] font-[700] font-din_medium text-[20px] leading-[36px] text-black text-center">
                        Skriv ditt mejl
                    </h3>
                </div>
                <label className="flex items-center w-[404px]  h-[62px]  rounded-[7px] border-[1px] border-slate-600 cursor-pointer">
                    <i className="fa-regular fa-envelope w-[63px] text-[23px]  p-1 text-center text-slate-900  "></i>
                    <input
                        type="email"
                        placeholder="Exempel@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-[277px] h-[38px] font-[400] font-din text-[23px]   outline-none placeholder-black "
                    />
                </label>
                <button
                    type="button"
                    onClick={hideGetPass}
                    className="w-[127px] m-[20px] bg-[#616161] rounded-[7px]  text-center cursor-pointer "
                >
                    <span className="w-[80px] font-[700] font-din_medium text-[16px] leading-[36px]   text-white">
                        Avbryt
                    </span>
                </button>
                <button
                    type="submit"
                    className="w-[127px] m-[20px 0px 20px 20px] bg-[#4E69F6] rounded-[7px]  text-center cursor-pointer "
                >
                    <span className="w-[80px] font-[700] font-din_medium text-[16px] leading-[36px]   text-white">
                        Skicka
                    </span>
                </button>
            </form>
        </div>
    );
}
