/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import moment from "moment";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { selectEmployee } from "../../../application/store/actions/user";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const [loading] = useState(false);
    const [cleanData] = useState(user[0].employees);

    const headings = ["Name", "Date", "Status", "Action"];

    const update = (employeeId) => {
        dispatch(selectEmployee(employeeId))
        const current = user[0].employees[employeeId - 1]
        if (current?.financialRecord !== undefined) {
            navigate(`/summary/${employeeId}`);
        }
        else if (current?.serviceRecord !== undefined) {
            navigate(`/financialrecord/${employeeId}`);
        }
        else if (current?.nextOfKin !== undefined) {
            navigate(`/servicerecord/${employeeId}`);
        }
        else if (current?.biodata !== undefined) {
            navigate(`/nextofkin/${employeeId}`);
        }
        else {
            navigate(`/biodata/${employeeId}`);
        }
    }
    const add = () => {
        dispatch(selectEmployee(null))
        navigate(`/biodata/${4}`)
    }
    const employeeRep = {
        id: '',
        name: "",
        date: "",
        status: "",
    }
    return (
        <div
            className={`flex flex-col items-center gap-y-5 w-full min-h-fit px-[30px]`}
        >
            <h4 className="font-[600] text-[16px] md:text-[18px] leading-[0.1em] font-montserrat my-[20px]">EMPLOYEES</h4>
            <div className="flex justify-end w-full">
                <span className="px-5 py-[10px] relative cursor-pointer font-[600] text-[16px] rounded-md h-[10%] text-primary bg-[#c7ede1]" onClick={() => add()}>+ Add Employee</span>
            </div>
            <div
                style={{ scrollBehavior: "smooth" }}
                className={`bg-white flex flex-col rounded-t-lg border border-[#F0F3F7] relative  overflow-y-hidden overflow-x-scroll gap-y-5 w-full scrollbar-thumb-gray-300 scrollbar-track-gray-900`}
            >
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
                        ) : cleanData && cleanData.length ? (
                            cleanData.map((employee, index) => (
                                <tr
                                    className={`align-top ${index === cleanData.length - 1 ? "" : "border-b"
                                        } border-[#F0F3F7]`}
                                    key={Math.random()}
                                >
                                    {Object.keys(employeeRep)
                                        .filter(m => m !== "id")
                                        .map((key) => (
                                            <td
                                                key={Math.random()}
                                                className={`py-3 px-5 overflow-hidden font-normal text-sm text-ellipsis leading-5`}
                                            >
                                                {key === "date" &&
                                                    < span >
                                                        {moment(employee?.biodata.date).format(
                                                            "DD/MM/YYYY")}
                                                    </span>
                                                }
                                                {key === "status" &&
                                                    <div className="flex items-center gap-2">
                                                        <div className={`rounded-[100%] h-[10px] w-[10px] ${employee.status === "Progress" ? "bg-[blue]" : employee.status === "Incomplete" ? "bg-[orange]" : "bg-primary"}`}></div>
                                                        <span>{employee.status}</span>
                                                    </div>
                                                }
                                                {key === "name" &&
                                                    <span>{`${employee.biodata.lastName} ${employee.biodata.firstName}`}</span>
                                                }
                                            </td>
                                        ))}
                                    <td className="">
                                        <button
                                            id={employee["id"]}
                                            className={`font-[500] flex items-center mt-2 ${employee.status === "Completed" ? " cursor-not-allowed text-[gray]" : "cursor-pointer text-primary"}`} disabled={employee["status"] === "Completed"} onClick={(e) => update(e.target.id)}>
                                            Update
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <span className="absolute top-[50%] left-[50%] -translate-x-[50%]">
                                No Employee has been Enrolled
                            </span>
                        )}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Dashboard;
