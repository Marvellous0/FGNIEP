import {  FaUserPlus, FaRegBuilding, FaUsers, FaRegUser } from 'react-icons/fa';
import { BiHomeAlt } from 'react-icons/bi'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import { useState } from "react";
import userImg from '../../application/assets/images/ayra.png'
import SearchInput from '../components/inputs/SearchInput';

const NavigationLayout = ({ children }) => {
    const [activeSideOption, setActiveOption] = useState('dashboard');

    const changeActiveSideOption = (activeOption) => {
        setActiveOption(activeOption);
    }
    const navOptions = [
        {
            displayText: "Dashboard",
            action: "dashboard",
            isActive: true,
            icon: BiHomeAlt,
        },
        {
            displayText: "Biodata",
            action: "biodata",
            isActive: false,
            icon: FaUserPlus,
        },
        {
            displayText: "Next Of Kin",
            action: "nextOfKin",
            isActive: false,
            icon: FaRegUser,
        },
        {
            displayText: "Service Record",
            action: "serviceRecord",
            isActive: false,
            icon: FaUsers,
        },
        {
            displayText: "Financial Record",
            action: "financialRecord",
            isActive: false,
            icon: FaRegBuilding,
        },
        {
            displayText: "Qualification Upload",
            action: "QualificationRecord",
            isActive: false,
            icon: FaRegBuilding,
        },
        {
            displayText: "Document Upload",
            action: "documentUpload",
            isActive: false,
            icon: FaRegBuilding,
        },
        {
            displayText: "Summary",
            action: "summary",
            isActive: false,
            icon: FaRegBuilding,
        },
    ]

    return (
        <>
            <div className={`bg-[#EEF0F2] h-[100vh] w-[100vw] flex flex-col`}>
                <div className="h-[100%] md:mx-0 md:my-auto min-w-[300px] w-full flex">
                    {/* sideNav */}
                    <div className='bg-[white] h-full w-[20%] min-w-[200px] rounded-l-2xl shadow-sm hidden md:block p-5'>
                        <div className='flex items-center gap-2 mb-2'>
                            <img src={userImg} alt="userImage" className="h-[50px] w-[50px] rounded-lg" />
                            <div>
                                <h6 className='font-bold'>Groove</h6>
                                <span className='flex items-center gap-2'>
                                    {/* <div className='bg-[#3c763d] rounded-full w-[10px] h-[10px]'>
                                    </div> */}
                                    <p className='text-theme-color text-[15px]'>Analytics Dashboard</p>
                                </span>
                            </div>
                            <div className='flex flex-col ml-4 text-theme-color'>
                                <RiArrowDropUpLine className='cursor-pointer' size={25} />
                                <RiArrowDropDownLine className='cursor-pointer mt-[-15px]' size={25} />
                            </div>
                        </div>
                        <hr />

                        <h5 className='opacity-[0.7] mt-5 text-theme-color'>MENU</h5>
                        <div className='mt-4 flex flex-col gap-3'>
                            {
                                navOptions.map((n, index) =>
                                    <div key={index} className={`flex items-center px-3 text-[15px] text-theme-color hover:opacity-[49%] ${activeSideOption == n.action ? `rounded-md h-[10%] w-[100%] text-[#50c7a2] bg-theme-bgcolor hover:opacity-[100%] items-center` : ""}`} onClick={(e) => { changeActiveSideOption(n.action) }}>
                                        <n.icon size={20} />
                                        <span className="tracking-[0.07em] p-3 cursor-pointer transition-all duration-300">{n.displayText}</span>
                                    </div>
                                )
                            }
                        </div>
                    </div>


                    {/* topNav */}
                    <div className='w-[80%] h-[80px] flex items-center px-5 border-b-2 bg-[white] ml-[0.1rem]'>
                        <div className='h-[40px] w-[70%]'>
                            <div className="flex h-[100%]">
                                <SearchInput />
                            </div>
                        </div>
                        <div className='h-[40px] w-[30%] flex justify-center gap-2 items-center text-theme-blackcolor'>
                            <img src={userImg} alt="userImage" className="h-[100%] w-[40px] rounded-full" />
                            <h6>Marvellous Adeoye</h6>
                            <RiArrowDropDownLine className='cursor-pointer' size={25} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavigationLayout;
