
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import FormikControl from "../components/formik/FormikControl";
import NavigationLayout from "../layouts/NavigationLayout";

const CreateUserPage = () => {

    const role = [
        { key: "Administrator", value: 'Administration' },
        { key: "Institution Administrator", value: "Institution Administrator" },

    ];

    const initialValues = {
        fullname: '',
        email: '',
        username: '',
        role: role
    }

    const validationSchema = Yup.object({
        username: Yup.string().required("Username is required"),
        role: Yup.string().required("Role is required")
    });

    const displayInput = [
        {
            label: "Full name",
            name: "fullName",
            control: "input",
            placeholder: "Enter Full Name",
        },
        {
            label: "Email Address",
            name: "emailAddress",
            control: "input",
            placeholder: "Enter Email Address Name",
        },
        {
            label: "Username",
            name: "username",
            control: "input",
            placeholder: "Enter Username",
        },
        {
            label: "Role",
            name: "role",
            control: "select",
            placeholder: "Select a Role",
            options: role
        },
    ];


    const createUser = (values, onSubmitProps) => {
        const user = {
            fullname: values.fullname,
            email: values.email,
            username: values.username,
            role: values.role
        }
        console.log("adding user", user)
    }

    return (
        <NavigationLayout>
            <div className="flex gap-3">
                <h4 className="font-[600] text-[16px] md:text-[18px] leading-[0.1em] font-montserrat my-[20px]">Create New Pension Institution</h4>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={createUser}
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

export default CreateUserPage;