import { useState } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import NavigationLayout from "../layouts/NavigationLayout";
import FormikControl from "../components/formik/FormikControl";

const CreateBankPage = () => {

    const bankType = [
        { key: "Commercial Bank", value: 'Commercial Bank' },
        { key: "Central Bank", value: "Central Bank" },
        { key: "Mortage Bank", value: "Mortgage Bank" },

    ];

    const initialValues = {
        bankName: '',
        bankType: bankType
    }


    const validationSchema = Yup.object({
        bankName: Yup.string().required("Bank Name is required"),
        bankType: Yup.string().required("Bank Type is required")
    });

    const displayInput = [
        {
            label: "Bank name",
            name: "bankName",
            control: "input",
            placeholder: "Enter Bank Name",
        },
        {
            label: "Bank Type",
            name: "bankType",
            control: "select",
            options: bankType,
            placeholder: "Enter Bank Type",
        }
    ];


    const createBank = (values, onSubmitProps) => {
        const bank = {
            bankName: values.bankName,
            bankType: values.bankType
        }
        console.log("adding bank")
    }

    return (
        <NavigationLayout>
            <div className="flex gap-3">
                <h4 className="font-[600] text-[16px] md:text-[18px] leading-[0.1em] font-montserrat my-[20px]">Create New Bank</h4>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={createBank}
                validateOnChange={false}
            >
                {formik => (
                    <Form>
                        <div className="grid gap-6 pt-4" >
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

export default CreateBankPage;