import { RiArrowDropDownLine } from 'react-icons/ri';
import userImg from '../../application/assets/images/ayra.png';
import { BiMenuAltLeft } from 'react-icons/bi';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TopNav = ({ isNavHidden, setIsNavHidden }) => {
    const param = useParams()
    let { id } = param
    const user = useSelector(state => state.user);
    const enrolling = user[0].employees[id - 1]
    useState(enrolling);
    const loggedInUserDetails = JSON.parse(localStorage.getItem("userDetails"));
    const loggedInName = loggedInUserDetails.username;

    useEffect(() => { console.log("enrolling", enrolling) }, [enrolling])

    return (
        <div className='h-[80px] w-full flex items-center px-[15px] gap-2 bg-[white]'>
            {
                isNavHidden &&
                <BiMenuAltLeft size={20} className="cursor-pointer md:hidden" onClick={() => setIsNavHidden(!isNavHidden)} />
            }

            <div className="flex-1">
                {
                    enrolling &&
                    <p className='text-[14px] md:text-[16px] font-[500]'>
                        <spaan className="font-montserrat ">Enrolling: </spaan>
                        <spaan className="font-poppins text-[#8d98af]">{`${enrolling?.biodata.lastName} ${enrolling?.biodata.firstName}`}</spaan>
                    </p>
                }
            </div>
            <div className='h-[40px]  flex justify-center gap-1 md:gap-2 items-center text-gray'>
                <img src={userImg} alt="userImage" className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] rounded-full" />
                <p className='text-[14px] md:text-[18px]'>{loggedInName}</p>
                <RiArrowDropDownLine className='cursor-pointer' size={25} />
            </div>
        </div>
    );
}

export default TopNav;