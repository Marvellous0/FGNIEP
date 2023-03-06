import { useState } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import InputLayout from "../components/inputs/InputLayout";
import { InputField } from "../components/inputs/MainInput";
import NavigationLayout from "../layouts/NavigationLayout";

const CreatePfaPage = () => {
    const [input, setInput] = useState("");
    const addPfa = () => {
        console.log("adding");
    }
    return (
        <NavigationLayout>
            <div className="my-10">
                <h1 className="font-bold text-[20px] text-center mb-7">Create New Pension Institution</h1>

            </div>
            <div className="">
                <InputLayout label="pfa">
                    <InputField placeholder="Enter PFA Name" value={input} onChange={(e) => setInput(e.target.value)} />
                </InputLayout>
                <div className="my-4"></div>

                <div className="flex justify-end my-[30px] gap-[10px]">
                    <input value="SUBMIT" onClick={addPfa} className="text-center bg-primary py-[10px] px-[20px] font-[500] cursor-pointer text-white " type="submit" />
                    <div onClick={() => window.history.back()} className="bg-[white] text-[#8d98af] cursor-pointer p-[10px]">
                        <MdOutlineArrowBackIos size={20} />
                    </div>

                </div> F

            </div>
        </NavigationLayout>
    );
}

export default CreatePfaPage;