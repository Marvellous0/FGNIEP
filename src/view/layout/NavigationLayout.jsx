import { FaUserCircle, FaUserPlus, FaCar, FaTags, FaRegBuilding, FaArrowAltCircleLeft, FaArrowAltCircleRight, FaHome, FaUsers, FaRegUser } from 'react-icons/fa';
import { MdVolunteerActivism } from 'react-icons/md';
import { BiHomeAlt } from 'react-icons/bi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from '../../application/store/actions/ui';
import userImg from '../../application/assets/images/profileImage.png'
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
                            <img src={userImg} alt="userImage" className="h-[50px] w-[50px] rounded-full" />
                            <div>
                                <h6>Marvellous</h6>
                                <span className='flex items-center gap-2'>
                                    <div className='bg-[#3c763d] rounded-full w-[10px] h-[10px]'>
                                    </div>
                                    <p>Online</p>
                                </span>
                            </div>
                        </div>
                        <hr />

                        <h5 className='opacity-[0.7] mt-5'>MENU</h5>
                        <div className='mt-4 flex flex-col gap-3'>
                            {
                                navOptions.map((n, index) =>
                                    <div key={index} className={`flex items-center px-3 text-[15px] hover:opacity-[49%] ${activeSideOption == n.action ? `rounded-md h-[10%] w-[100%] text-[#50c7a2] bg-[#c7ede1] hover:opacity-[100%] items-center` : ""}`} onClick={(e) => { changeActiveSideOption(n.action) }}>
                                        <n.icon size={20} />
                                        <span className="tracking-[0.07em] p-3 cursor-pointer transition-all duration-300">{n.displayText}</span>
                                    </div>
                                )
                            }
                        </div>
                    </div>


                    {/* topNav */}
                    <div className='w-[80%] h-[80px] flex items-center px-8 border-b-2'>
                        <div className='h-[40px] w-[70%]'>
                            <div className="flex h-[100%]">
                                <SearchInput />
                            </div>
                        </div>
                        <div className='h-[40px] w-[30%] flex gap-2 items-center'>
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
//     const location = useLocation();
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const user = useSelector(state => state.user);
//     const [isLogoutPopActive, setIsLogoutPopActive] = useState(false);
//     const activeSideOption = location.pathname.split("/")[1];

//     const navOptions = [
//         {
//             displayText: "dashboard",
//             action: "dashboard",
//             isActive: true,
//             icon: FaHome,
//         },
//         {
//             displayText: "register",
//             action: "register",
//             isActive: false,
//             icon: FaUserPlus,
//         },
//         {
//             displayText: "print tags",
//             action: "printtag",
//             isActive: false,
//             icon: FaTags,
//         },
//         {
//             displayText: "Users",
//             action: "users",
//             isActive: false,
//             icon: FaUsers,
//         },
//         {
//             displayText: "Department",
//             action: "departments",
//             isActive: false,
//             icon: FaRegBuilding,
//         },
//     ]

//     const changeActiveSideOption = (activeOption) => {
//         navigate(`/${activeOption}`);
//     }


//     return (
//         <p>Hiiii</p>
        // <div className={`bg-theme-bgcolor h-[100vh] w-[100vw] flex flex-col `}>
        //     <div className="h-[90%] md:mx-0 md:my-auto min-w-[300px] w-full px-5 flex">
        //         <div className={`side-bar`}>
        //             <div className="flex items-start h-[15%] w-full p-2 ">
        //                 <div className="flex-1 flex items-center">
        //                     <span className="side-heading" style={{ color: "green" }}>JALSA</span>
        //                 </div>
        //             </div>

        //             <div className="side-option-container">
        //                 <div className="side-option-mini-container ">
        //                     {
        //                         navOptions.map((n, index) =>
        //                             n.isActive &&
        //                             <div key={index} className={`side-options md:hidden ${activeSideOption == n.action ? `active border-2 border-theme-color` : ""}`} onClick={(e) => { changeActiveSideOption(n.action) }}>
        //                                 <n.icon size={20} className="mr-[2px]" />
        //                                 <span className="side-option-text">{n.displayText.toUpperCase()}</span>
        //                             </div>
        //                         )
        //                     }
        //                 </div>

        //                 <div className="flex  items-center" >
        //                     <FaArrowAltCircleLeft size={20} className="mr-3" />
        //                     <span className="side-option-text-sm">LOGOUT</span>
        //                 </div>

        //             </div>
        //         </div>

        //         <div className="h-full w-[100%] md:w-[75%] block">
        //             <div className="top-heading-container h-[10%]">
        //                 <div className="flex flex-1 items-center md:hidden ">
        //                     <span className="top-heading">JALSA</span>
        //                 </div>
        //                 <div className="name-container">
        //                     <span className="name">{`${user.userSurname.toUpperCase()} ${user.userFirstName.toUpperCase()}`}</span>

        //                     <FaUserCircle size={25} className="opacity-[49%]" onClick={() => setIsLogoutPopActive(!isLogoutPopActive)} />
        //                     <div className="pop-up-container">
        //                         <div className={` ${isLogoutPopActive ? "pop-logout" : "hidden"}`}>

        //                             <span className="pop-up-text">LOGOUT</span>
        //                             <FaArrowAltCircleRight size={20} className="ml-2" />
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="breakline"></div>
        //             </div>
        //             <div className="h-[90%] ">
        //                 {children}
        //             </div>
        //         </div>
        //     </div>



        //     <div className={`h-[8%] fixed bottom-0 z-[10]  w-full bg-white md:hidden`}>
        //         <div className="bottom-option-mini-container ">
        //             {
        //                 navOptions.map((n, index) =>
        //                     n.isActive &&
        //                     <div key={index} className={`bottom-options ${activeSideOption == n.action ? `active` : ""}`} onClick={() => { changeActiveSideOption(n.action) }}>
        //                         <div className={`icon ${activeSideOption == n.action ? ` bg-theme-color` : ""}`} >
        //                             <n.icon size={20} />
        //                         </div>
        //                         <span className="text" >{n.displayText.toUpperCase()}</span>
        //                     </div>
        //                 )
        //             }
        //         </div>
        //     </div>
        // </div>
//     );
// }

// export default NavigationLayout;