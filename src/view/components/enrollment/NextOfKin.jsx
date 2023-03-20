import { Formik, Form } from "formik";
import React, { useState } from "react";
import * as Yup from 'yup';
import FormikControl from "../formik/FormikControl";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineArrowBackIos, MdEdit, MdOutlineArrowForwardIos } from 'react-icons/md';
import { addEmployeeNextOfKin } from "../../../application/store/actions/user";
import services from "../../../ioc/services";
import { useNavigate } from "react-router-dom";

const NextOfKin = () => {
    const user = useSelector(state => state.user);
    const employee = user.employees.find(e => e.id == user.enrollingUser);
    const [isEdit, setIsEdit] = useState(employee?.nextOfKin !== undefined);
    const [isInputDisabled, setIsInputDisabled] = useState(isEdit);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        fullName: employee?.nextOfKin?.fullName ?? '',
        relationship: employee?.nextOfKin?.relationship ?? '',
        phoneNumber: employee?.nextOfKin?.phoneNumber ?? '',
        stateOfResidence: employee?.nextOfKin?.stateOfResidence ?? '',
        residenceLga: employee?.nextOfKin?.residenceLga ?? '',
        resStreetName: employee?.nextOfKin?.resStreetName ?? '',
        resHouseNumber: employee?.nextOfKin?.resHouseNumber ?? '',
        resCity: employee?.nextOfKin?.resCity ?? '',
    }


    const validationSchema = Yup.object().shape({
        fullName: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter alphabets only').required("Full name is required"),
        relationship: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter alphabets only').required("Relationship is required"),
        phoneNumber: Yup.string()
            .matches(/^0\d{10}$/, 'Phone number must be 11 digits and include a leading zero')
            .required('Phone number is required'),
        stateOfResidence: Yup.string().required("Select State Of Residence!"),
        residenceLga: Yup.string().required("Select Residence LGA!"),
        resStreetName: Yup.string().required("Street name is required!"),
        resHouseNumber: Yup.string().required("House number is required!"),
        resCity: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter alphabets only').required("City is required!"),
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
            type: 'tel',
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
            type: 'number',
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
        const nextOfKin = {
            fullName: values.fullName,
            relationship: values.relationship,
            phoneNumber: values.phoneNumber,
            stateOfResidence: values.stateOfResidence,
            residenceLga: values.residenceLga,
            resStreetName: values.resStreetName,
            resHouseNumber: values.resHouseNumber,
            resCity: values.resCity,

        }
        const payload = {
            employeeId: employee.id,
            data: nextOfKin,
        }
        dispatch(addEmployeeNextOfKin(payload));
        services.toast.success("Next of Kin Successfully Submitted!");
        setIsEdit(true);
        setIsInputDisabled(true);
    }
    return (
        <>
            <div className="flex gap-3">
                <h4 className="font-[600] text-[16px] md:text-[18px] leading-[0.1em] font-montserrat my-[20px]">NEXT OF KIN</h4>
                {
                    (isEdit && isInputDisabled) && <div onClick={() => setIsInputDisabled(!isInputDisabled)} className="bg-[white]  rounded-md  cursor-pointer p-[10px]">
                        <MdEdit size={20} />
                    </div>
                }
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={registerNextOfKin}
                validateOnChange={false}
            >
                {({ values, handleChange }) => (
                    <Form>
                        <div className="grid gap-6 pt-4 md:justify-center md:gap-x-[12rem] md:gap-y-8 md:grid-cols-2" >
                            {displayInput.map((d, index) => (
                                <FormikControl
                                    key={index * 0.5}
                                    label={d.label}
                                    name={d.name}
                                    type={d?.type}
                                    disabled={isInputDisabled}
                                    placeholder={d.placeholder}
                                    options={d?.options}
                                    control={d.control}

                                />
                            ))}

                        </div>
                        <div className="flex justify-end my-[30px] gap-[10px]">
                            <input value={isEdit ? "EDIT" : "SUBMIT"} className={`text-center bg-primary py-[10px] px-[20px] font-[500] text-white ${isInputDisabled ? "cursor-not-allowed" : "cursor-pointer"} `} type="submit" disabled={isInputDisabled} />
                            <div onClick={() => window.history.back()} className="bg-[white] text-[#8d98af] cursor-pointer p-[10px]">
                                <MdOutlineArrowBackIos size={20} />
                            </div>
                            <div onClick={() => navigate('/servicerecord')} className="bg-[white] text-[#8d98af] cursor-pointer p-[10px]">
                                <MdOutlineArrowForwardIos size={20} />
                            </div>
                        </div>

                    </Form>

                )}
            </Formik>
        </>
    );
}

export default NextOfKin;