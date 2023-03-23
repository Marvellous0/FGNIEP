import { Formik, Form } from "formik";
import React, { useState } from "react";
import * as Yup from 'yup';
import FormikControl from "../formik/FormikControl";
import { useDispatch, useSelector } from "react-redux";
import { MdEdit, MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { addEmployeeBiodata, selectEmployee } from "../../../application/store/actions/user";
import { toast } from "react-toastify";
import services from "../../../ioc/services";
import { useNavigate, useParams, useRoutes } from "react-router-dom";

const Biodata = () => {
    const user = useSelector(state => state.user);
    const param = useParams()
    let {id} = param
    const employee = user[0].employees[id-1]
    const [isEdit, setIsEdit] = useState(employee?.biodata !== undefined);
    const [isInputDisabled, setIsInputDisabled] = useState(isEdit);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const title = [
        { key: "Title", value: '' },
        { key: "MR.", value: "MR." },
        { key: "MRS.", value: "MRS." },
        { key: "DOCTOR.", value: "DOCTOR." },
        { key: "PROF.", value: "PROF." },
    ];

    const genderOption = [
        { key: "Choose Gender", value: '' },
        { key: "Female", value: "female" },
        { key: "Male", value: "male" },
    ];

    const maritalStatus = [
        { key: "Marital Status", value: '' },
        { key: "Married", value: "Married" },
        { key: "Single", value: "Single" },
        { key: "Divorced", value: "Divorced" },
        { key: "Widow", value: "Widow" },
        { key: "Widower", value: "Widower" },
    ];

    const stateOfOrigin = [
        { key: "State of Origin", value: '' },
        { key: "Oyo", value: "Oyo" },
        { key: "Ondo", value: "ondo" },
    ];

    const lga = [
        { key: "LGA", value: '' },
        { key: "Kajola", value: "Kajola" },
        { key: "Ojo", value: "Ojo" },
    ];

    const stateOfResidence = [
        { key: "State of Residence", value: '' },
        { key: "Oyo", value: "Oyo" },
        { key: "Ondo", value: "ondo" },
    ];

    const residenceLga = [
        { key: "Residence LGA", value: '' },
        { key: "Kajola", value: "Kajola" },
        { key: "Ojo", value: "Ojo" },
    ];
    const [initialValues, setInitialValues] = useState({
        firstName: employee?.biodata?.firstName ?? "",
        lastName: employee?.biodata?.lastName ?? "",
        otherName: employee?.biodata?.otherName ?? "",
        dob: employee?.biodata?.dob ?? "",
        emailAddress: employee?.biodata?.emailAddress ?? "",
        phoneNumber: employee?.biodata?.phoneNumber ?? "",
        gender: employee?.biodata?.gender ?? "",
        title: employee?.biodata?.title ?? "",
        maritalStatus: employee?.biodata?.maritalStatus ?? "",
        stateOfOrigin: employee?.biodata?.stateOfOrigin ?? "",
        lga: employee?.biodata?.lga ?? "",
        stateOfResidence: employee?.biodata?.stateOfResidence ?? "",
        residenceLga: employee?.biodata?.residenceLga ?? "",
        resStreetName: employee?.biodata?.resStreetName ?? "",
        resHouseNumber: employee?.biodata?.resHouseNumber ?? "",
        resCity: employee?.biodata?.resCity ?? "",
        perStreetName: employee?.biodata?.perStreetName ?? "",
        perHouseNumber: employee?.biodata?.perHouseNumber ?? "",
        perCity: employee?.biodata?.perCity ?? "",
    })


    const validationSchema = Yup.object({
        firstName: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter alphabets only').required("First name is required"),
        lastName: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter alphabets only').required("Last name is required"),
        emailAddress: Yup.string().email('Must be a valid email').required("E-mail is required"),
        phoneNumber: Yup.string()
            .matches(/^0\d{10}$/, 'Phone number must be 11 digits and include a leading zero')
            .required('Phone number is required'),
        dob: Yup.string().required("Date of Birth is required"),
        gender: Yup.string().required("Select Gender!"),
        title: Yup.string().required("Select title!"),
        maritalStatus: Yup.string().required("Select Marital Status!"),
        stateOfOrigin: Yup.string().required("Select State Of Origin!"),
        lga: Yup.string().required("Select LGA!"),
        stateOfResidence: Yup.string().required("Select State Of Residence!"),
        residenceLga: Yup.string().required("Select Residence LGA!"),
        resStreetName: Yup.string().required("Street name is required!"),
        resHouseNumber: Yup.string().required("House number is required!"),
        resCity: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter alphabets only').required("City is required!"),
        perStreetName: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter alphabets only').required("Street name is required!"),
        perHouseNumber: Yup.string().required("House number is required!"),
        perCity: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter alphabets only').required("City is required!"),
    });

    const displayInput = [
        {
            label: "title",
            name: "title",
            control: "select",
            options: title,
        },
        {
            label: "last name",
            name: "lastName",
            control: "input",
            placeholder: "Enter last name",
        },
        {
            label: "first Name",
            name: "firstName",
            control: "input",
            placeholder: "Enter first name",
        },
        {
            label: "middle Name",
            name: "otherName",
            control: "input",
            placeholder: "Enter middle name",
        },
        {
            label: "E-MAIL ADDRESS",
            name: "emailAddress",
            control: "input",
            placeholder: "Enter E-mail",
        },
        {
            label: "phone Number",
            name: "phoneNumber",
            control: "input",
            placeholder: "Input Phone No.",
        },
        {
            label: "gender",
            name: "gender",
            control: "select",
            options: genderOption,
        },
        {
            label: "date of birth",
            name: "dob",
            control: "input",
            placeholder: "date of birth",
            type: "date"
        },
        {
            label: "marital Status",
            name: "maritalStatus",
            control: "select",
            options: maritalStatus,
        },
        {
            label: "state Of Origin",
            name: "stateOfOrigin",
            control: "select",
            options: stateOfOrigin,
        },
        {
            label: "local government area",
            name: "lga",
            control: "select",
            options: lga,
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


    ];

    const resDisplayInput = [
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
    const perDisplayInput = [
        {
            label: "street name",
            name: "perStreetName",
            control: "input",
            placeholder: "Enter street name",
        },
        {
            label: "house number",
            name: "perHouseNumber",
            control: "input",
            type: 'number',
            placeholder: "Enter house number",
        },
        {
            label: "city",
            name: "perCity",
            control: "input",
            placeholder: "Enter city",
        }
    ];
    const registerBiodata = (values, onSubmitProps) => {
        const biodata = {
            firstName: values.firstName,
            lastName: values.lastName,
            otherName: values.otherName,
            dob: values.dob,
            emailAddress: values.emailAddress,
            phoneNumber: values.phoneNumber,
            gender: values.gender,
            title: values.title,
            maritalStatus: values.maritalStatus,
            stateOfOrigin: values.stateOfOrigin,
            lga: values.lga,
            stateOfResidence: values.stateOfResidence,
            residenceLga: values.residenceLga,
            resStreetName: values.resStreetName,
            resHouseNumber: values.resHouseNumber,
            resCity: values.resCity,
            perStreetName: values.perStreetName,
            perHouseNumber: values.perHouseNumber,
            perCity: values.perCity,
            date: new Date(),
        }
        const payload = {
            data: biodata,
        }
        dispatch(selectEmployee(user.employees.length + 1));
        dispatch(addEmployeeBiodata(payload));
        services.toast.success("Biodata Submitted Sucessfully!");
        setIsEdit(true);
        setIsInputDisabled(true);
    }
    return (
        <>
            <div className="flex gap-3">
                <h4 className="font-[600] text-[16px] md:text-[18px] leading-[0.1em] font-montserrat my-[20px]">BIODATA</h4>
                {
                    (isEdit && isInputDisabled) && <div onClick={() => setIsInputDisabled(!isInputDisabled)} className="bg-[white]  rounded-md  cursor-pointer p-[10px]">
                        <MdEdit size={20} />
                    </div>
                }
            </div>


            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={registerBiodata}
                validateOnChange={false}
            >
                {formik => (
                    <Form>
                        <div className="grid gap-6 pt-4 md:justify-center md:gap-x-[12rem] md:gap-y-8 md:grid-cols-2" >
                            {displayInput.map((d, index) => (
                                <FormikControl
                                    key={index * 0.5}
                                    label={d.label}
                                    disabled={isInputDisabled}
                                    name={d.name}
                                    type={d?.type}
                                    placeholder={d.placeholder}
                                    options={d?.options}
                                    control={d.control}
                                />
                            ))}
                        </div>

                        <div className="font-montserrat font-[500] text-[16px]">
                            <p className=" mt-[30px] py-[10px]">RESIDENTIAL ADDRESS</p>
                            <div className="grid gap-6 pt-4 md:justify-center md:gap-x-[12rem] md:gap-y-8 md:grid-cols-2" >
                                {resDisplayInput.map((d, index) => (
                                    <FormikControl
                                        key={index * 0.5}
                                        label={d.label}
                                        name={d.name}
                                        disabled={isInputDisabled}
                                        type={d?.type}
                                        placeholder={d.placeholder}
                                        options={d?.options}
                                        control={d.control}
                                    />
                                ))}

                            </div>
                            <p className="mt-[30px] py-[10px]">PERMANENT ADDRESS</p>
                            <div className="grid gap-6 pt-4 md:justify-center md:gap-x-[12rem] md:gap-y-8 md:grid-cols-2" >
                                {perDisplayInput.map((d, index) => (
                                    <FormikControl
                                        key={index * 0.5}
                                        label={d.label}
                                        name={d.name}
                                        disabled={isInputDisabled}
                                        type={d?.type}
                                        placeholder={d.placeholder}
                                        options={d?.options}
                                        control={d.control}
                                    />
                                ))}

                            </div>
                        </div>
                        <div className="flex justify-end my-[30px] gap-[10px]">
                            <input value={isEdit ? "EDIT" : "SUBMIT"} className={`text-center bg-primary py-[10px] px-[20px] font-[500] text-white ${isInputDisabled ? "cursor-not-allowed" : "cursor-pointer"} `} type="submit" disabled={isInputDisabled} />
                            <div onClick={() => window.history.back()} className="bg-[white] text-[#8d98af] cursor-pointer p-[10px]">
                                <MdOutlineArrowBackIos size={20} />
                            </div>
                            <div onClick={() => navigate(`/nextofkin/${id}`)} className="bg-[white] text-[#8d98af] cursor-pointer p-[10px]">
                                <MdOutlineArrowForwardIos size={20} />
                            </div>
                        </div>

                    </Form>

                )}
            </Formik>
        </>
    );
}

export default Biodata;