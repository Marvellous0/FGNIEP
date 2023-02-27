import { Formik, Form } from "formik";
import React, { useState } from "react";
import * as Yup from 'yup';
import FormikControl from "../formik/FormikControl";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';

const FinancialRecord = () => {


    const banks = [
        { key: "Bank", value: '' },
        { key: "GUARATEE TRUST BANK", value: "Kajola" },
        { key: "UNITED BANK OF AFRICA", value: "Ojo" },
    ];

    const pfa = [
        { key: "PFA", value: '' },
        { key: "GTB-AM PENSIONS LIMITED", value: "Kajola" },
    ];
    const initialValues = {
        payrollId: '',
        accountNumber: '',
        bank: '',
        pfa: '',
        pfaPin: '',
    }


    const validationSchema = Yup.object({
        payrollId: Yup.string().required("Payroll Id is required"),
        accountNumber: Yup.string().required("Account Number Id is required"),
        pfaPin: Yup.string().required("PFA pin is required"),
        bank: Yup.string().required("Select Bank!"),
        pfa: Yup.string().required("Select PFA!")
    });

    const displayInput = [
        {
            label: "payroll Id",
            name: "payrollId",
            control: "input",
            placeholder: "Enter payroll Id",
        },
        {
            label: "bank",
            name: "bank",
            control: "select",
            options: banks,
        },
        {
            label: "account Number",
            name: "accountNumber",
            control: "input",
            placeholder: "Enter Account Number",
        },
       {
            label: "pfa",
            name: "pfa",
            control: "select",
            options: pfa,
        },
        {
            label: "Pfa Pin",
            name: "pfaPin",
            control: "input",
            placeholder: "Enter Pfa Pin",
        },
       
    ];


    const financialRecord = (values, onSubmitProps) => {
        const biodata = {
            participantTypeName: 'guest',
            lastName: values.lastName,
            firstName: values.firstName,
            otherName: values.otherName,
            phoneNumber: values.phoneNumber,
            email: values.emailAddress,
            gender: values.gender,
            address: values.address,
            photo: null
        }
    }
    return (
        <>
            <h4 className="font-[600] text-[16px] md:text-[18px] leading-[0.1em] font-montserrat my-[20px]">FINANCIAL RECORD</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={financialRecord}
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
                            <input value="SUBMIT" className="text-center bg-primary py-[10px] px-[20px] font-[500] cursor-pointer text-white " type="submit" />
                            <div onClick={()=> window.history.back()} className="bg-[white] text-[#8d98af] cursor-pointer p-[10px]">
                                <MdOutlineArrowBackIos size={20}  />
                            </div>
                            
                        </div>

                    </Form>

                )}
            </Formik>
        </>
    );
}

export default FinancialRecord;