export default function Schema() {
    return (
        <div className=" flex flex-col">
            <div className="ml-[130px] mt-[8px]">
                <div className="flex ">
                    <div className=" w-[35%]">
                        <h1 className="font-din_medium text-[20px] mb-[16px] font-[700]">
                            Schema
                        </h1>
                        <h2 className="font-din_medium text-[20px] mb-[16px] font-[700]">
                            Schema för UXK22
                        </h2>
                        <p className="text-[14px] font-din text-[#00000099]">
                            23 timme förvecka 35{" "}
                        </p>
                    </div>
                    <div className="w-[341px] h-[56px]  rounded-[12px] flex justify-around items-center shadow-md shadow-gray-400 *:font-din_medium *:text-[20px]  *:font-[700]  *:rounded-[12px] *:w-full *:h-full">
                        <button>dag</button>
                        <button>vecka</button>
                        <button>månad</button>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
}
