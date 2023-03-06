import React, { useState } from "react";
import { AiOutlineBank, AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaEdit, FaTrash } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

const headings = ["Name", "Created", "Action"];

const pfaRep = {
    id: '',
    name: "",
    created: "",
    status: ""
}

const pfas = [
    {
        id: 1,
        name: "	AIICO PENSION MANAGERS LIMITED",
        created: "09 November 2022"
    },
    {
        id: 2,
        name: "ARM PENSION MANAGERS",
        created: "09 November 2022"
    },
    {
        id: 3,
        name: "CITI TRUST PENSION MANAGERS LIMITED",
        created: "09 November 2022"
    },
    {
        id: 4,
        name: "EVERGREEN PENSIONS LIMITED",
        created: "09 November 2022"
    },
]


const Pfa = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    return (
        <div
            className={`flex flex-col items-center gap-y-5 w-full min-h-fit px-[30px]`}
        >
            <div
                style={{ scrollBehavior: "smooth" }}
                className={`bg-white flex flex-col rounded-t-lg border border-[#F0F3F7] relative  overflow-y-hidden overflow-x-scroll gap-y-5 md:w-full w-[100vw] scrollbar-thumb-gray-300 scrollbar-track-gray-900`}
            >
                <div className="mx-4 mt-[30px] flex gap-2 rounded-md">
                    <span className="px-3 py-[10px] relative cursor-pointer font-[600] text-[16px] rounded-md h-[10%] text-primary bg-[#c7ede1]" onClick={() => navigate("/pfa/add")}>+ Create</span>
                </div>

                <div className="flex gap-2 items-center p-2">
                    <AiOutlineBank />
                    <p>All Pension Institutions</p>
                </div>
                <table
                    style={{ borderSpacing: "1rem" }}
                    className="w-full min-w-[670px] "
                >
                    <thead className="w-full h-[40.83px] bg-[#F9F9F9] ">
                        {headings.map((heading) => (
                            <th
                                key={Object.values(heading)[0]}
                                className={`text-left text-[#939AA3] text-xs pl-5 w-[20%] leading-[18px] font-normal`}
                            >
                                {heading.toUpperCase()}
                            </th>
                        ))}
                    </thead>
                    <tbody>
                        {loading ? (
                            <div className="absolute top-[50%] left-[50%] -translate-x-[50%]">
                                <AiOutlineLoading3Quarters className="inline animate-spin" />
                            </div>
                        ) : pfas && pfas.length ? (
                            pfas.map((pfa, index) => (
                                <tr
                                    className={`align-top ${index === pfas.length - 1 ? "" : "border-b"
                                        } border-[#F0F3F7]`}
                                    key={Math.random()}
                                >
                                    {Object.keys(pfaRep)
                                        .filter(m => m !== "id")
                                        .map((key) => (
                                            <td
                                                key={Math.random()}
                                                className={`py-3 px-5 overflow-hidden font-normal text-sm text-ellipsis leading-5`}
                                            >
                                                {key === "name" &&
                                                    < span >{pfa.name.toUpperCase()}
                                                    </span>
                                                }
                                                {key === "created" &&
                                                    <span>{pfa.created}</span>
                                                }
                                                {key === "status" &&
                                                    <div className="flex items-center gap-2">
                                                        <div className="rounded-md text-white bg-primary p-2 cursor-pointer">
                                                            <FaEdit />
                                                        </div>

                                                        <div className="rounded-md text-white bg-[red] p-2 cursor-pointer">
                                                            <FaTrash />
                                                        </div>
                                                    </div>
                                                }
                                            </td>
                                        ))}

                                </tr>
                            ))
                        ) : (
                            <span className="absolute top-[50%] left-[50%] -translate-x-[50%]">
                                No Pension Institution listed
                            </span>
                        )}
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default Pfa;