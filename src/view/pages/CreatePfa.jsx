
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import FormikControl from "../components/formik/FormikControl";
import NavigationLayout from "../layouts/NavigationLayout";

const CreatePfaPage = () => {

    const initialValues = {
        pfaName : ''
    }


    const validationSchema = Yup.object({
        pfaName: Yup.string().required("Pfa Name is required"),
       
    });

    const displayInput = [
        {
            label: "Pfa name",
            name: "pfaName",
            control: "textarea",
            placeholder: "Enter PFA Name",
        },
    ];


    const createPfa = (values, onSubmitProps) => {
        const pfa = {
            pfaName: values.pfaName,
        }
        console.log("adding pfa", pfa)
    }

    return (
        <NavigationLayout>
            <div className="flex gap-3">
                <h4 className="font-[600] text-[16px] md:text-[18px] leading-[0.1em] font-montserrat my-[20px]">Create New Pension Institution</h4>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={createPfa}
                validateOnChange={false}
            >
                {formik => (
                    <Form>
                        <div className="grid gap-6 pt-4 md:justify-center md:gap-x-[12rem] md:gap-y-8 md:grid-cols-2" >
                            {displayInput.map((d, index) => (
                                <FormikControl
                                    key={index * 0.5}
                                    label={d.label}
                                    name={d.name}
                                    type={d?.type}
                                    placeholder={d.placeholder}
                                    options={d?.options}
                                    control={d.control}
                                />
                            ))}

                        </div>
                        <div className="flex justify-end my-[30px] gap-[10px]">
                            <input value={ "CREATE"} className="text-center bg-primary py-[10px] px-[20px] font-[500] cursor-pointer text-white " type="submit" />
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

export default CreatePfaPage;