import { useState } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import FormikControl from "../components/formik/FormikControl";
import NavigationLayout from "../layouts/NavigationLayout";

const CreateUniversityPage = () => {

    const initialValues = {
        universityName : '',
        universityAbbr: ""
    }


    const validationSchema = Yup.object({
        universityName: Yup.string().required("university Name is required"),
        universityAbbr: Yup.string().required("University Abbreviation is required"),
    });

    const displayInput = [
        {
            label: "University name",
            name: "universityName",
            control: "textarea",
            placeholder: "Enter University Name",
        },
        {
            label: "University Abbreviation",
            name: "universityAbbr",
            control: "input",
            placeholder: "Enter University Abbreviation",
        }
    ];


    const createuniversity = (values, onSubmitProps) => {
        const university = {
            universityName: values.universityName,
            universityAbbr: values.universityAbbr
        }
        console.log("adding university")
    }

    return (
        <NavigationLayout>
            <div className="flex gap-3">
                <h4 className="font-[600] text-[16px] md:text-[18px] leading-[0.1em] font-montserrat my-[20px]">Create New University</h4>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={createuniversity}
                validateOnChange={false}
            >
                {formik => (
                    <Form>
                        <div className="grid gap-6 pt-4" >
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

export default CreateUniversityPage;