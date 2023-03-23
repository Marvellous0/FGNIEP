import { Formik, Form } from "formik";
import React, { useState } from "react";
import * as Yup from 'yup';
import FormikControl from "../formik/FormikControl";
import { MdEdit, MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { useDispatch, useSelector } from "react-redux";
import { addEmployeeFinancialRecord } from "../../../application/store/actions/user";
import services from "../../../ioc/services";
import { useNavigate, useParams } from "react-router-dom";

const FinancialRecord = () => {
    const user = useSelector(state => state.user); 
    const param = useParams()
    let {id} = param
    const employee = user[0].employees[id-1];
    const [isEdit, setIsEdit] = useState(employee?.financialRecord !== undefined);
    const [isInputDisabled, setIsInputDisabled] = useState(isEdit);
    const dispatch = useDispatch();
    const navigate = useNavigate();


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
        payrollId: employee?.financialRecord?.payrollId ?? '',
        accountNumber: employee?.financialRecord?.accountNumber ?? '',
        bank: employee?.financialRecord?.bank ?? '',
        pfa: employee?.financialRecord?.pfa ?? '',
        pfaPin: employee?.financialRecord?.pfaPin ?? '',
    }


    const validationSchema = Yup.object({
        payrollId: Yup.string().required("Payroll Id is required"),
        accountNumber: Yup.string().matches(/\d{9}$/, 'Account number must be 10 digits').required("Account Number Id is required"),
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
        const financialRecord = {
            payrollId: values.payrollId,
            accountNumber: values.accountNumber,
            bank: values.bank,
            pfa: values.pfa,
            pfaPin: values.pfaPin,
        }
        const payload = {
            employeeId: employee.id,
            data: financialRecord,
        }

        dispatch(addEmployeeFinancialRecord(payload));
        services.toast.success("Financial Record submitted sucessfully!");
        setIsEdit(true);
        setIsInputDisabled(true);
    }
    return (
        <>
            <div className="flex gap-3">
                <h4 className="font-[600] text-[16px] md:text-[18px] leading-[0.1em] font-montserrat my-[20px]">FINANCIAL RECORD</h4>
                {
                    (isEdit && isInputDisabled) && <div onClick={() => setIsInputDisabled(!isInputDisabled)} className="bg-[white] rounded-md  cursor-pointer p-[10px]">
                        <MdEdit size={20} />
                    </div>
                }
            </div>
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
                            <div onClick={() => navigate(`/summary/${id}`)} className="bg-[white] text-[#8d98af] cursor-pointer p-[10px]">
                                <MdOutlineArrowForwardIos size={20} />
                            </div>
                        </div>

                    </Form>

                )}
            </Formik>
        </>
    );
}

export default FinancialRecord;