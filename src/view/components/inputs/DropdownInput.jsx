import styled from "styled-components";
import theme from "../../../application/utils/Theme";
import { Field, ErrorMessage } from "formik";
import { TextError, InputLabel, InputField } from "./MainInput"
import InputLayout from "./InputLayout";

const Dropdown = styled.select`
        min-width: 300px;
        height: 40px;
        outline: none;
        font-size: 15px;
        font-family: 'Poppins', sans-serif;
        padding: 0 0.5em;
        background-color: white;
        letter-spacing: 0.05em;
        
        @media (min-width: ${theme.breakPoint['tablet']}) {
            width: 350px;
            height: 50px;
            font-size:17px;
        }
    
`

const Option = styled.option`
  padding: 1rem;
  color: #00000096;
`

const DropdownInput = (props) => {
  const { label, name, type, options, ...rest } = props;
  return (
    <InputLayout label={label} name={name} >
      <Field name={name} >
        {({ field }) =>

          <Dropdown {...field} {...rest}>
            {options.map((option) => (
              <Option key={option.value} value={option.value}> {option.key}</Option>
            ))}
          </Dropdown>

        }
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </InputLayout>
  );
}

export default DropdownInput;