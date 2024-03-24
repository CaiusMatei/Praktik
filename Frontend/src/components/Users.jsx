import { useState } from "react";

export default function Users() {
    const [showSelect, setShowSelect] = useState(false);
    const [showModal, setShowModal] = useState(false)
    return (
        <div>
            <div className="relative overflow-x-auto mx-[85px]   ">
                <h1 className="w-[224px] my-[38px] font-din_medium text-[30px] ">
                    Användar lista
                </h1>
                <table className="w-full text-sm text-left rtl:text-right text-black dark:text-black ">
                    <thead className="text-[20px] font-din_medium   dark:text-black text-center  ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Namn
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Efternamn
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Mail
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Användernamen
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-center   cursor-default">
                        <tr
                            onClick={() => setShowSelect((prev) => !prev)}
                            className={`font-din_regular bg-[#F2F2F2]   text-[23px]  font-[700] dark:text-black ${
                                showSelect ? "bg-[#EE8091] " : "bg-[#F2F2F2] "
                            }  `}
                        >
                            <td
                                scope="row"
                                className="px-6 py-4  text-black border border-[#aea9a9]    "
                            >
                                Noa
                            </td>
                            <td className="px-6 py-4 border border-[#aea9a9] ">
                                Eklund
                            </td>
                            <td className="px-6 py-4 border border-[#aea9a9] ">
                                Noaeklund@gmail.com
                            </td>
                            <td className="px-6 py-4 border border-[#aea9a9] ">
                                NoaEk
                            </td>
                        </tr>
                        <tr className=" font-din_regular bg-[#F2F2F2] font-[700] dark:text-black text-[23px] ">
                            <td
                                scope="row"
                                className="px-6 py-4  text-black border border-[#aea9a9]  "
                            >
                                Alex
                            </td>
                            <td className="px-6 py-4 border border-[#aea9a9] ">
                                Ibrahimovic
                            </td>
                            <td className="px-6 py-4 border border-[#aea9a9] ">
                                AlexIbrahimovic@gmail.com
                            </td>
                            <td className="px-6 py-4 border border-[#aea9a9] ">
                                Alex.ic
                            </td>
                        </tr>
                        <tr className=" font-din_regular bg-[#F2F2F2] font-[700] dark:text-black text-[23px] ">
                            <td
                                scope="row"
                                className="px-6 py-4  text-black border border-[#aea9a9]  "
                            >
                                Gabriela
                            </td>
                            <td className="px-6 py-4 border border-[#aea9a9] ">
                                Nordström
                            </td>
                            <td className="px-6 py-4 border border-[#aea9a9] ">
                                Gabrielanordstrm@gmail.com
                            </td>
                            <td className="px-6 py-4 border border-[#aea9a9] ">
                                Gabstr
                            </td>
                        </tr>
                        <tr className=" font-din_regular bg-[#F2F2F2] font-[700] dark:text-black text-[23px] ">
                            <td
                                scope="row"
                                className="px-6 py-4  text-black border border-[#aea9a9]  "
                            >
                                Rafael
                            </td>
                            <td className="px-6 py-4 border border-[#aea9a9] ">
                                Charles
                            </td>
                            <td className="px-6 py-4 border border-[#aea9a9] ">
                                Rafaelcharles14@gmail.com
                            </td>
                            <td className="px-6 py-4 border border-[#aea9a9] ">
                                Raf123
                            </td>
                        </tr>
                        <tr className=" font-din_regular bg-[#F2F2F2] font-[700] dark:text-black text-[23px] ">
                            <td
                                scope="row"
                                className="px-6 py-4  text-black border border-[#aea9a9]  "
                            >
                                Lucas
                            </td>
                            <td className="px-6 py-4 border border-[#aea9a9] ">
                                Penchas
                            </td>
                            <td className="px-6 py-4 border border-[#aea9a9] ">
                                Lucaspenchas@gmail.com
                            </td>
                            <td className="px-6 py-4 border border-[#aea9a9] ">
                                Lucaspenchas
                            </td>
                        </tr>
                        <tr className=" font-din_regular bg-[#F2F2F2] font-[700] dark:text-black text-[23px] ">
                            <td
                                scope="row"
                                className="px-6 py-4  text-black border border-[#aea9a9]  "
                            >
                                Amadeus
                            </td>
                            <td className="px-6 py-4 border border-[#aea9a9] ">
                                Rodriguez
                            </td>
                            <td className="px-6 py-4 border border-[#aea9a9] ">
                                Amadeus@gmail.com
                            </td>
                            <td className="px-6 py-4 border border-[#aea9a9] ">
                                Amrodiguez
                            </td>
                        </tr>
                        <tr className=" font-din_regular bg-[#F2F2F2] font-[700] dark:text-black text-[23px] ">
                            <td
                                scope="row"
                                className="px-6 py-4  text-black border border-[#aea9a9]  "
                            >
                                Isabela
                            </td>
                            <td className="px-6 py-4 border border-[#aea9a9] ">
                                Aleesandro
                            </td>
                            <td className="px-6 py-4 border border-[#aea9a9] ">
                                Aleesandro@gmail.com
                            </td>
                            <td className="px-6 py-4 border border-[#aea9a9] ">
                                Isabela717
                            </td>
                        </tr>
                        <tr className=" font-din_regular bg-[#F2F2F2] font-[700] dark:text-black text-[23px] ">
                            <td
                                scope="row"
                                className="px-6 py-4  text-black border border-[#aea9a9]  "
                            >
                                Amanda
                            </td>
                            <td className="px-6 py-4 border border-[#aea9a9]  ">
                                Bylund
                            </td>
                            <td className="px-6 py-4 border border-[#aea9a9] ">
                                Amanda.by@gmail.com
                            </td>
                            <td className="px-6 py-4 border border-[#aea9a9] ">
                                AmandaB
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="  text-end my-10">
                    <button onClick={()=>setShowModal(true)} className="w-[317px ] px-[77px] h-[66px] bg-[#EE8091] rounded-[7px] font-din_medium text-[25px]">
                        Ta bort konto
                    </button>
                </div>
            </div>
            { showModal && <div className="fixed w-full h-screen  z-50 top-0 flex justify-center items-center   ">
                <div className="  w-[545px] h-[203px] rounded-[12px] bg-black flex flex-col justify-around items-center ">
                    <h3 className="text-white text-[27px] font-din">
                        Är du säker att du vill ta bort ..... konto
                    </h3>
                    <div>
                        <button onClick={()=>setShowModal(false)} className="w-[170px] h-[57px] bg-[#D9D9D9] rounded-[7px] text-[20px] font-[400] font-din_medium cursor-pointer m-[20px]">
                            Nej
                        </button>
                        <button onClick={()=>setShowModal(false)} className="w-[170px] h-[57px] bg-[#EE8091] rounded-[7px] text-[20px] font-[400] font-din_medium cursor-pointer m-[20px] text-black">
                            Ja
                        </button>
                    </div>
                </div>
            </div>}
        </div>
    );
}
