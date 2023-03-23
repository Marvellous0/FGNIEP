
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import FormikControl from "../components/formik/FormikControl";
import NavigationLayout from "../layouts/NavigationLayout";
import { number } from "yup/lib/locale";

const CreateMdaPage = () => {

    const initialValues = {
        mdaName: "",
        capacity: "",
        address: "",
    }


    const validationSchema = Yup.object({
        mdaName: Yup.string().required("Mda Name is required"),
        capacity: Yup.string().required("Capacity is required"),
        address: Yup.string().required("Address is required"),
    });

    const displayInput = [
        {
            label: "Mda name",
            name: "mdaName",
            control: "textarea",
            placeholder: "Enter Mda Name",
        },
        {
            label: "Capacity",
            name: "capacity",
            control: "input",
            placeholder: "Enter Mda Capacity",
        },
        {
            label: "Address",
            name: "address",
            control: "input",
            type: number,
            placeholder: "Enter Mda Address",
        }
    ];


    const createMda = (values, onSubmitProps) => {
        const mda = {
            mdaName: values.mdaName,
            capacity: values.capacity,
            address: values.address
        }
        console.log("adding university", mda)
    }

    return (
        <NavigationLayout>
            <div className="flex gap-3">
                <h4 className="font-[600] text-[16px] md:text-[18px] leading-[0.1em] font-montserrat my-[20px]">Create New Mda</h4>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={createMda}
                validateOnChange={false}
            >
                {formik => (
                    <Form>
                        <div className="grid gap-6 pt-4 md:justify-center md:gap-x-[12rem] md:gap-y-8 md:grid-cols-2" >
                            {displayInput.map((d, index) => (
                                <FormikControl
                                    key={index * 0.5}
                                    label={d?.label}
                                    name={d?.name}
                                    type={d?.type}
                                    placeholder={d?.placeholder}
                                    options={d?.options}
                                    control={d.control}
                                />
                            ))}

                        </div>
                        <div className="flex justify-end my-[30px] gap-[10px]">
                            <input value={"CREATE"} className="text-center bg-primary py-[10px] px-[20px] font-[500] cursor-pointer text-white " type="submit" />
                            <div onClick={() => window.history.back()} className="bg-[white] text-[#8d98af] cursor-pointer p-[10px]">
                                <MdOutlineArrowBackIos size={20} />
                            </div>

                        </div>

                    </Form>

                )}
            </Formik>
        </NavigationLayout>
    );
}

export default CreateMdaPage;