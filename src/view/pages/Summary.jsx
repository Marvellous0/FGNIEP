import { useSelector } from "react-redux";
import usePrintTag from "../../application/hooks/usePrintTag";
import NavigationLayout from "../layouts/NavigationLayout";

const SummaryPage = () => {
    const user = useSelector(state => state.user);
    const employee = user.employees.find(e => e.id == user.enrollingUser);
    const status = employee?.nextOfKin == undefined;
    const biodata = employee?.biodata;
    const [currentId, setCurrentId] = usePrintTag();

    return (
        <>
            <NavigationLayout>

                <h4 className="font-[600] text-[16px] md:text-[18px] text-center leading-[0.1em] font-montserrat my-[20px]">SUMMARY PAGE</h4>

                <div className="flex flex-wrap py-4 px-1 justify-around" id="print">
                    <div className="shadow-md md:basis-[40%] shrink text-[12px] h-[450px] w-[300px] md:w-[250px] md:p-5 flex flex-wrap flex-col gap-2 mb-4 p-3">
                        <h5 className="text-center font-bold text-[15px]">BIODATA</h5>
                        <div>
                            <p><span className=" font-semibold mr-2">DOB: </span>{biodata.dob}</p>
                            <p><span className=" font-semibold mr-2">Email Address: </span>{biodata.emailAddress}</p>
                            <p><span className=" font-semibold mr-2">First Name:</span>{biodata.firstName}</p>
                            <p><span className=" font-semibold mr-2">Gender:</span> {biodata.gender}</p>
                            <p><span className=" font-semibold mr-2">Last Name: </span>{biodata.lastName}</p>
                            <p><span className=" font-semibold mr-2">LGA:</span> {biodata.lga}</p>
                            <p><span className=" font-semibold mr-2">Marital Status:</span>{biodata.maritalStatus}</p>
                            <p><span className=" font-semibold mr-2">Other Name:</span> {biodata.otherName}</p>
                            <p><span className=" font-semibold mr-2">City:</span> {biodata.perCity}</p>
                            <p><span className=" font-semibold mr-2">House Number:</span> {biodata.perHouseNumber}</p>
                            <p><span className=" font-semibold mr-2">Street Name:</span> {biodata.perStreetName}</p>
                            <p><span className=" font-semibold mr-2">Phone Number:</span> {biodata.phoneNumber}</p>
                            <p><span className=" font-semibold mr-2">Residence city:</span> {biodata.resCity}</p>
                            <p><span className=" font-semibold mr-2">Residence House Number:</span> {biodata.resHouseNumber}</p>
                            <p><span className=" font-semibold mr-2">Residence Street Number:</span> {biodata.resStreetName}</p>
                            <p><span className=" font-semibold mr-2">Residence LGA: </span>{biodata.residenceLga}</p>
                            <p><span className=" font-semibold mr-2">State Of Origin:</span> {biodata.stateOfOrigin}</p>
                            <p><span className=" font-semibold mr-2">State of Residence: </span>{biodata.stateOfResidence}</p>
                            <p><span className=" font-semibold mr-2">Title: </span>{biodata.title}</p>
                        </div>
                    </div>

                    <div className="shadow-md md:basis-[40%] shrink text-[12px] h-[450px] w-[300px] md:w-[250px] md:p-5 flex flex-wrap flex-col gap-2 mb-4 p-3">
                        <h5 className="text-center font-bold text-[15px]">NEXT OF KIN</h5>
                        {
                            status && <p className="text-center text-[13px] md:mt-[40%] mt-[60%]">Fill the form to Completion to see summary</p>
                        }
                    </div>

                    <div className="shadow-md md:basis-[40%] shrink text-[12px] h-[450px] w-[300px] md:w-[250px] md:p-5 flex flex-wrap flex-col gap-2 mb-4 p-3">
                        <h5 className="text-center font-bold text-[15px]">SERVICE RECORD</h5>
                        {
                            status && <p className="text-center text-[13px] md:mt-[40%] mt-[60%]">Fill the form to Completion to see summary</p>
                        }
                    </div>

                    <div className="shadow-md md:basis-[40%] shrink text-[12px] h-[450px] w-[300px] md:w-[250px] md:p-5 flex flex-wrap flex-col gap-2 mb-4 p-3">
                        <h5 className="text-center font-bold text-[15px]">FINANCIAL RECORD</h5>
                        {
                            status && <p className="text-center text-[13px] md:mt-[40%] mt-[60%]">Fill the form to Completion to see summary</p>
                        }
                    </div>


                </div>

                <div className="flex justify-end my-[30px] gap-[10px]" onClick={() => setCurrentId("print")}>
                    <button className="text-center bg-primary py-[10px] px-[20px] font-[500] cursor-pointer text-white">PRINT</button>
                </div>
               
            </NavigationLayout>
        </>

    );
}

export default SummaryPage;