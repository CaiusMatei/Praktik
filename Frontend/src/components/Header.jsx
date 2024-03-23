import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Chas-Logo.png";
import { state } from "../redux/redux";
export default function Header() {
    const showUser = state().userStatus;
    const [showSearch, setShowSearch] = useState(false);
    const [searchItem, setSearchItem] = useState("");
    const [showScheme, setShowScheme] = useState(false);
    const navigate = useNavigate();
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchItem) {
            console.log(searchItem);
        }
        setShowSearch(false);
    };
    const toUpdate = () => {
        navigate("/updateProfile");
        setShowScheme(true);
    };
    const toSchema = () => {
        navigate("/schema");
        setShowScheme(false);
    };
    return (
        <div className=" flex justify-between">
            <div className="">
                <img
                    src={logo}
                    alt="chas logo"
                    className="w-[78px] h-[75px] mt-[23px] ml-[15px]"
                />
            </div>
            {showUser && (
                <div>
                    {!showScheme ? (
                        <div className=" flex  ">
                            {showSearch ? (
                                <form
                                    onSubmit={handleSearch}
                                    className="flex items-center w-[250px]  h-[57px]  rounded-[7px] border-[1px] border-slate-600 cursor-pointer mt-[23px] mr-[23px]  "
                                >
                                    <button type="submit">
                                        <i className="fa-solid fa-magnifying-glass w-[45px]  text-[23px]  p-1 text-center text-slate-900  "></i>
                                    </button>
                                    <input
                                        type="search"
                                        name=""
                                        id=""
                                        placeholder="Sök schema"
                                        value={searchItem}
                                        onChange={(e) =>
                                            setSearchItem(e.target.value)
                                        }
                                        className=" w-[200px] h-[38px] font-[400] font-din text-[23px]  outline-none placeholder-black "
                                    />
                                </form>
                            ) : (
                                <div className="flex">
                                    <button
                                        type="button"
                                        onClick={() => setShowSearch(true)}
                                        className="w-[57px] h-[57px] bg-[#c9c9c9] rounded-full flex justify-center items-center  mt-[23px]  mx-[15px] "
                                    >
                                        <i className="fa-solid fa-magnifying-glass w-[63px]  text-[23px]  p-1 text-center text-slate-900  "></i>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={toUpdate}
                                        className="w-[57px] h-[57px] bg-[#d5d5d5] rounded-full flex justify-center items-center  mt-[23px]  mx-[15px] "
                                    >
                                        <i className="fa-regular fa-user w-[63px]  text-[30px]  p-1 text-center text-slate-900  "></i>
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex">
                            <button
                                type="button"
                                onClick={toSchema}
                                className="w-[57px] h-[57px] bg-[#d5d5d5] rounded-full flex justify-center items-center  mt-[23px]  mx-[15px] "
                            >
                                <i className="fa-solid fa-calendar-days w-[63px]  text-[30px]  p-1 text-center text-slate-600 "></i>
                            </button>
                            <button
                                type="button"
                                onClick={()=>navigate("/users")}
                                className="w-[57px] h-[57px] bg-[#d5d5d5] rounded-full flex justify-center items-center  mt-[23px]  mx-[15px] "
                            >
                                <i className="fa-regular fa-user w-[63px]  text-[30px]  p-1 text-center text-slate-900  "></i>
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
