import { Formik, Form } from "formik";
import React, { useState } from "react";
import * as Yup from 'yup';
import FormikControl from "../formik/FormikControl";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';

const NextOfKin = () => {


    const residenceLga = [
        { key: "Residence LGA", value: '' },
        { key: "Kajola", value: "Kajola" },
        { key: "Ojo", value: "Ojo" },
    ];

    const stateOfResidence = [
        { key: "State of Residence", value: '' },
        { key: "Oyo", value: "Oyo" },
        { key: "Ondo", value: "ondo" },
    ];
    const initialValues = {
        fullName: '',
        relationship: '',
        phoneNumber: '',
        stateOfResidence: '',
        residenceLga: '',
        resStreetName: '',
        resHouseNumber: '',
        resCity: '',
    }


    const validationSchema = Yup.object({
        fullName: Yup.string().required("Full name is required"),
        relationship: Yup.string().required("Relationship is required"),
        phoneNumber: Yup.string().required("Phone number is required"),
        stateOfResidence: Yup.string().required("Select State Of Residence!"),
        residenceLga: Yup.string().required("Select Residence LGA!"),
        resStreetName: Yup.string().required("Street name is required!"),
        resHouseNumber: Yup.string().required("House number is required!"),
        resCity: Yup.string().required("City is required!"),
    });

    const displayInput = [
        {
            label: "full Name",
            name: "fullName",
            control: "input",
            placeholder: "Enter full name",
        },
        {
            label: "phone Number",
            name: "phoneNumber",
            control: "input",
            placeholder: "Input Phone No.",
        },
        {
            label: "relationship",
            name: "relationship",
            control: "input",
            placeholder: "Input relationship with next of kin",
        },
        {
            label: "state Of Residence",
            name: "stateOfResidence",
            control: "select",
            options: stateOfResidence,
        },
        {
            label: "residence Lga",
            name: "residenceLga",
            control: "select",
            options: residenceLga,
        },
        {
            label: "street name",
            name: "resStreetName",
            control: "input",
            placeholder: "Enter street name",
        },
        {
            label: "house number",
            name: "resHouseNumber",
            control: "input",
            placeholder: "Enter house number",
        },
        {
            label: "city ",
            name: "resCity",
            control: "input",
            placeholder: "Enter city",
        }
    ];


    const registerNextOfKin = (values, onSubmitProps) => {
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
            <h4 className="font-[600] text-[16px] md:text-[18px] leading-[0.1em] font-montserrat my-[20px]">NEXT OF KIN</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={registerNextOfKin}
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

export default NextOfKin;