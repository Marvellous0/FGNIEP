import { Formik, Form } from "formik";
import React, { useState } from "react";
import * as Yup from 'yup';
import FormikControl from "../formik/FormikControl";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';

const ServiceRecord = () => {
    const jobTitle = [
        { key: "Job Title", value: '' },
        { key: "LECTURER", value: "Kajola" },
        { key: "ASST. LECTURER", value: "Ojo" },
    ];

    const institution = [
        { key: "Institution", value: '' },
        { key: "AHMADU BELLO UNIVERSITY", value: "Kajola" },
        { key: "OBAFEMI AWOLOWO UNIVERSITY", value: "Ojo" },
    ];

    const salaryStructure = [
        { key: "Salary Structure", value: '' },
        { key: "CONTISS", value: "Kajola" },
        { key: "TIFSAN", value: "Ojo" },
    ];

    const gradeLevel = [
        { key: "Grade Level", value: '' },
        { key: "GL01", value: "Kajola" },
        { key: "GL02", value: "Ojo" },
    ];

    const step = [
        { key: "Step", value: '' },
        { key: "01", value: "Kajola" },
        { key: "02", value: "Ojo" },
    ];

    const initialValues = {
        jobTitle: '',
        institution: '',
        department: '',
        dateOfFirstAppointment: '',
        dateOfLastPromotion: '',
        cadre: '',
        staffNumber: '',
        salaryStructure: '',
        gradeLevel: '',
        step: '',
    }


    const validationSchema = Yup.object({
        jobTitle: Yup.string().required("Select Job Title!"),
        institution: Yup.string().required("Select Institution!"),
        department: Yup.string().required("Department is required"),
        dateOfFirstAppointment: Yup.string().required("Date Of First Appointment is required"),
        cadre: Yup.string().required("Cadre is required"),
        staffNumber: Yup.string().required("Staff Number is required"),
        salaryStructure: Yup.string().required("Select Salary Structure!"),
        gradeLevel: Yup.string().required("Select Grade Level!"),
        step: Yup.string().required("Select Step!"),
    });

    const displayInput = [
        {
            label: "job Title",
            name: "jobTitle",
            control: "select",
            options: jobTitle,
        },
        {
            label: "institution",
            name: "institution",
            control: "select",
            options: institution,
        },
        {
            label: "Department",
            name: "department",
            control: "input",
            placeholder: "Enter Department",
        },
        {
            label: "date Of First Appointment",
            name: "dateOfFirstAppointment",
            control: "input",
            type: "date",
            placeholder: "Date of First Appointment",
        },
         {
            label: "date Of Last Promotion",
            name: "dateOfLastPromotion",
            control: "input",
            type: "date",
            placeholder: "Date of Last Promotion",
        },
        {
            label: "cadre",
            name: "cadre",
            control: "input",
            placeholder: "Enter Cadre",
        },
        {
            label: "staff Number",
            name: "staffNumber",
            control: "input",
            placeholder: "Enter Staff Number",
        },
        {
            label: "salary Structure",
            name: "salaryStructure",
            control: "select",
            options: salaryStructure,
        },
        {
            label: "grade level",
            name: "gradeLevel",
            control: "select",
            options: gradeLevel,
        },
        {
            label: "step",
            name: "step",
            control: "select",
            options: step,
        },
    ];


    const registerServiceRecord = (values, onSubmitProps) => {
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
            <h4 className="font-[600] text-[16px] md:text-[18px] leading-[0.1em] font-montserrat my-[20px]">SERVICE RECORD</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={registerServiceRecord}
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
                                <MdOutlineArrowBackIos size={20} />
                            </div>
                        </div>

                    </Form>

                )}
            </Formik>
        </>
    );
}

export default ServiceRecord;