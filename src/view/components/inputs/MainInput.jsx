import styled from "styled-components";
import theme from "../../../application/utils/Theme";
import { Field, ErrorMessage } from "formik";
import InputLayout from "./InputLayout";

const InputField = styled.input`
        background-color: white;
        min-width: 300px;
        height: 40px;
        font-size: 15px;
        font-family: 'Poppins', sans-serif;
        outline: none;
        padding: 0 0.5em;
        letter-spacing: 0.1em;
        @media (min-width: ${theme.breakPoint['tablet']}) {
            width: 350px;
            height: 50px;
            font-size: 17px;
        }
    `;

const InputLabel = styled.label`
        color: #8d98af;
        opacity: ${props=> props.opacity? props.opacity : "49%"};
        font-size: 10px;
        font-weight: 500;
        color: black;
        font-family: 'Montserrat', sans-serif;
        letter-spacing: 0.05em;
        white-space: nowrap;
        @media (min-width: ${theme.breakPoint['tablet']}) {
           font-size: 15px;
        }
    `;

const TextError = styled.span`
        color: red;
        font-weight: 500;
        opacity: 40%;
        font-size: 10px;
        @media (min-width: ${theme.breakPoint['tablet']}) {
            font-weight: 600;
           font-size: 15px;
        }
        

    `

const MainInput = (props) => {

    const { label, name, type, ...rest } = props;
    return (
        <InputLayout label={label} name={name} >
            <Field name={name} >
                {({ field }) => <InputField type={type ? type : "text"} {...rest} {...field} />}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </InputLayout>
    );
}


export { InputLabel, InputField, TextError };
export default MainInput;