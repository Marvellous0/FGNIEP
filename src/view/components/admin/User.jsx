import React, { useState } from "react";
import { AiOutlineBank, AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const headings = ["Full Name", "Email", "Username", "Role", "Last Logged In", "Created", "Action"];

const userRep = {
    id: '',
    fullName: "",
    email: "",
    username: "",
    role: "",
    lastLoggedIn: "",
    created: "",
    status: ""
}

const users = [
    {
        id: 1,
        fullName: "John Smith",
        email: "admin@admin.com",
        username: "admin",
        role: "Administrator",
        lastLoggedIn: "	28 Feb 2023",
        created: "09 November 2022"
    },
    {
        id: 2,
        fullName: "Olanite Abdulrazaq",
        email: "olaniteabdulrazaq@gmail.com",
        username: "olaniteabdulrazaq@gmail.com",
        role: "Institution Administrator",
        lastLoggedIn: "	28 Feb 2023",
        created: "09 November 2022"
    },
    {
        id: 3,
        fullName: "Marvellous Adeoye",
        email: "adeoyemarvellous7@gmail.com",
        username: "adeoyemarvellous7@gmail.com",
        role: "Reviewer",
        lastLoggedIn: "	28 Feb 2023",
        created: "09 November 2022"
    },
    {
        id: 4,
        fullName: "Olanite Abdulrazaq",
        email: "olaniteabdulrazaq@gmail.com",
        username: "olaniteabdulrazaq@gmail.com",
        role: "Institution Administrator",
        lastLoggedIn: "	28 Feb 2023",
        created: "09 November 2022"
    },
]


const User = () => {
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
                    <span className="px-3 py-[10px] relative cursor-pointer font-[600] text-[16px] rounded-md h-[10%] text-primary bg-[#c7ede1]" onClick={() => navigate("/user/add")}>+ Create</span>
                </div>
                <div className="flex gap-2 items-center p-2 md:p-3">
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
                        ) : users && users.length ? (
                            users.map((user, index) => (
                                <tr
                                    className={`align-top ${index === users.length - 1 ? "" : "border-b"
                                        } border-[#F0F3F7]`}
                                    key={Math.random()}
                                >
                                    {Object.keys(userRep)
                                        .filter(m => m !== "id")
                                        .map((key) => (
                                            <td
                                                key={Math.random()}
                                                className={`py-3 px-5 overflow-hidden font-normal text-sm text-ellipsis leading-5`}
                                            >
                                                {key === "fullName" &&
                                                    < span >{user.fullName.toUpperCase()}
                                                    </span>
                                                }
                                                {key === "email" &&
                                                    < span >{user.email.toLowerCase()}
                                                    </span>
                                                }
                                                {key === "username" &&
                                                    < span >{user.username}
                                                    </span>
                                                }

                                                {key === "role" &&
                                                    < span >{user.role}
                                                    </span>
                                                }
                                                {key === "lastLoggedIn" &&
                                                    < span >{user.lastLoggedIn}
                                                    </span>
                                                }
                                                {key === "created" &&
                                                    <span>{user.created}</span>
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
                                No User listed
                            </span>
                        )}
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default User;