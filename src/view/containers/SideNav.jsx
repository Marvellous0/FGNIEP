import userImg from '../../application/assets/images/ayra.png';
import { FaRegFileAlt, FaRegMoneyBillAlt, FaUsers, FaRegUser, FaTimes } from 'react-icons/fa';
import { BiHomeAlt } from 'react-icons/bi';
import { MdOutlineSummarize } from 'react-icons/md';
import { AiOutlineBank } from 'react-icons/ai'
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { TfiMenuAlt } from 'react-icons/tfi'

const SideNav = ({ isNavHidden, setIsNavHidden }) => {
    const user = useSelector(state => state.user);
    const location = useLocation();
    const navigate = useNavigate();
    const activeSideOption = location.pathname.split("/")[1];

    const changeActiveSideOption = (link) => {
        navigate(link)
        if (!isNavHidden) setIsNavHidden(true);

    }

    const navOptions = user?.role == "admin" ?
        [
            {
                displayText: "MDA",
                action: "mda",
                link: "/admindashboard/mda",
                isActive: true,
                icon: AiOutlineBank,
            },
            {
                displayText: "Bank",
                action: "bank",
                link: "/admindashboard/bank",
                isActive: false,
                icon: AiOutlineBank,
            },
            {
                displayText: "PFA",
                action: "pfa",
                link: "/admindashboard/pfa",
                isActive: false,
                icon: TfiMenuAlt,
            },
            {
                displayText: "User",
                action: "user",
                link: "/admindashboard/user",
                isActive: false,
                icon: FaUsers,
            }
        ] :
        [
            {
                displayText: "Dashboard",
                action: "dashboard",
                link: "/dashboard",
                isActive: true,
                icon: BiHomeAlt,
            },
            {
                displayText: "Biodata",
                action: "biodata",
                link: "/biodata",
                isActive: false,

                icon: FaRegUser,
            },
            {
                displayText: "Next Of Kin",
                action: "nextofkin",
                link: "/nextofkin",
                isActive: false,
                icon: FaUsers,
            },
            {
                displayText: "Service Record",
                action: "servicerecord",
                link: "/servicerecord",
                isActive: false,
                icon: FaRegFileAlt,
            },
            {
                displayText: "Financial Record",
                action: "financialrecord",
                link: "/financialrecord",
                isActive: false,
                icon: FaRegMoneyBillAlt,
            },
            {
                displayText: "Summary",
                action: "summary",
                link: "/summary",
                isActive: false,
                icon: MdOutlineSummarize,
            },
        ]

    return (
        <div className={`bg-[white] h-full md:w-[300px] md:min-w-[250px] shadow-sm md:block p-[20px]  ${isNavHidden ? "hidden" : "absolute z-10"}`}>
            <div className='flex items-center gap-2 mb-2 h-[50px]'>
                <img src={userImg} alt="userImage" className="h-[40px] w-[40px] rounded-md" />
                <div className="flex-1">
                    <h6 className='font-[500] font-montserrat tracking-[0.1rem] text-[18px]'>FGNIEP</h6>
                    <span className='flex font-poppins items-center gap-2'>
                        <p className='text-[#8d98af] text-[12px]'>Analytics Dashboard</p>
                    </span>
                </div>
                <div className='flex md:hidden  flex-col justify-center text-[#8d98af]'>
                    {
                        !isNavHidden &&
                        <FaTimes size={15} className="cursor-pointer md:hidden" onClick={() => setIsNavHidden(true)} />
                    }
                </div>
            </div>
            <div className="border-[1px] border-secondary"></div>

            <div className='mt-4 flex flex-col gap-3'>
                {
                    navOptions.map((n, index) =>
                        <div key={index} className={`flex font-poppins items-center px-3 text-[15px]  text-[#8d98af] ${activeSideOption == n.action ? `rounded-md h-[10%]  text-[] bg-[#c7ede1]  hover:opacity-[100%] items-center` : ""}`} onClick={(e) => { changeActiveSideOption(n.link) }}>
                            <n.icon size={20} />
                            <span className="tracking-[0.07em] p-3 cursor-pointer transition-all font-[500] duration-300 text-[14px]">{n.displayText}</span>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default SideNav;