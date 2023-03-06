import React, { useState } from "react";
import { AiOutlineBank, AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const headings = ["Name", "Abbreviation", "Created", "Action"];

const universityRep = {
    id: '',
    name: "",
    abbr: "",
    created: "",
    status: "",
}

const universities = [
    {
        id: 1,
        name: "ABUBAKAR TAFAWA BALEWA UNIVERSITY",
        abbr: "ATBU",
        created: "09 November 2022"
    },
    {
        id: 2,
        name: "federal university of agriculture",
        abbr: "funaab",
        created: "09 November 2022"
    },
    {
        id: 3,
        name: "obafemi awolowo university",
        abbr: "oau",
        created: "09 November 2022"
    },
    {
        id: 4,
        name: "lasu state university",
        abbr: "lasu",
        created: "09 November 2022"
    },
]


const University = () => {
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
                    <span className="px-3 py-[10px] relative cursor-pointer font-[600] text-[16px] rounded-md h-[10%] text-primary bg-[#c7ede1]" onClick={() => navigate("/university/add")}>+ Create</span>
                </div>
                <div className="flex gap-2 items-center p-2 md:p-3">
                    <AiOutlineBank />
                    <p>List Of All Universities</p>
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
                        ) : universities && universities.length ? (
                            universities.map((university, index) => (
                                <tr
                                    className={`align-top ${index === universities.length - 1 ? "" : "border-b"
                                        } border-[#F0F3F7]`}
                                    key={Math.random()}
                                >
                                    {Object.keys(universityRep)
                                        .filter(m => m !== "id")
                                        .map((key) => (
                                            <td
                                                key={Math.random()}
                                                className={`py-3 px-5 overflow-hidden font-normal text-sm text-ellipsis leading-5`}
                                            >
                                                {key === "name" &&
                                                    < span >{university.name.toUpperCase()}
                                                    </span>
                                                }
                                                {key === "abbr" &&
                                                    <span>{university.abbr.toUpperCase()}</span>
                                                }
                                                {key === "created" &&
                                                    <span>{university.created}</span>
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
                                No University listed
                            </span>
                        )}
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default University;