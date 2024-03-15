export default function Login() {
    return (
        <div className="w-full flex items-center">
            <div className="w-full h-full flex flex-col items-center ">
                <form className="text-center  ">
                    <div className="w-full text-center flex justify-center">
                        <h3 className="w-[80px] h-[36px] font-[700] text-[20px] leading-[36px] text-black text-center">
                            Logga in
                        </h3>
                    </div>
                    <label className="flex items-end w-[371px]  h-[70px] border-b-[1px] border-b-slate-600 mb-[23px] pb-1 cursor-pointer">
                        <i className="fa-regular fa-user w-[63px]  text-[23px]  p-1 text-center text-slate-900  "></i>
                        <input
                            type="text"
                            placeholder="Användernamn"
                            className="w-[155px] h-[29px] font-[400] text-[16px]  outline-none placeholder-black "
                        />
                    </label>
                    <label className="flex items-end  w-[371px] h-[70x] border-b-[1px] border-b-slate-600 mb-[23px] pb-1 cursor-pointer">
                        <i className="fa-solid fa-lock w-[63px]  text-[23px] text-center p-1 text-slate-700 "></i>
                        <input
                            type="text"
                            placeholder="Lösenord"
                            className="w-[155px] h-[29px] font-[400] text-[16px]  outline-none placeholder-black"
                        />
                    </label>
                    <button
                        type="submit"
                        className="w-[229px] bg-[#4E69F6] rounded-[12px]  text-center cursor-pointer "
                    >
                        <span className="w-[80px] h-[30px] font-[700] text-[16px] leading-[36px]   text-white">
                            Logga in
                        </span>
                    </button>
                </form>
                <button
                    type="button"
                    className="w-[280px] h-[34px]  flex justify-end items-end text-end  pt-10"
                >
                    <span className="  text-[16px]  border-b-[1px] border-b-slate-400 cursor-pointer text-end">
                        Glömt lösenord?
                    </span>
                </button>
            </div>
        </div>
    );
}
