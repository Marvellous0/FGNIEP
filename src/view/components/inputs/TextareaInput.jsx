import styled from "styled-components";
import theme from "../../../application/utils/Theme";
import { Field, ErrorMessage } from "formik";
import InputLayout from "./InputLayout";

const TextArea = styled.textarea`
        background-color: white;
        min-width: 300px;
        min-height: 80px;
        font-size: 15px;
        font-family: 'Poppins', sans-serif;
        outline: none;
        padding: 0 0.5em;
        letter-spacing: 0.1em;
        border: 2px solid ${theme.color};

        @media (min-width: ${theme.breakPoint['tablet']}) {
            width: 350px;
            height: 50px;
            font-size: 17px;
        }
    `;

const InputLabel = styled.label`
        color: ${theme.color};
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

const TextAreaInput = (props) => {

    const { label, name, ...rest } = props;
    return (
        <InputLayout label={label} name={name} >
            <Field name={name} >
                {({ field }) => <TextArea {...rest} {...field} />}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </InputLayout>
    );
}


export { InputLabel, TextArea, TextError };
export default TextAreaInput;