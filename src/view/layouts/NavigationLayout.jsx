
import { useState } from 'react';
import SideNav from '../containers/SideNav';
import TopNav from '../containers/TopNav';


const NavigationLayout = ({ children }) => {
    const [isNavHidden, setIsNavHidden] = useState(true);
   
    return (
        <div className={`bg-secondary h-[100vh] w-[100vw] flex flex-col`}>
            <div className="h-[100%] md:mx-0 md:my-auto min-w-[300px] w-full flex gap-[2px]">
                {/* sideNav */}
                <SideNav isNavHidden={isNavHidden} 
                        setIsNavHidden={setIsNavHidden}/>
                {/* topNav */}
                <div className='flex flex-col flex-1'>
                    <TopNav isNavHidden={isNavHidden} setIsNavHidden={setIsNavHidden} />
                    <div className='flex-1 overflow-x-auto p-[10px] md:py-[10px] md:px-[20px]'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavigationLayout;
