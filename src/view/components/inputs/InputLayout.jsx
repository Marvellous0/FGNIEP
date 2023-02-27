import styledComponents from "styled-components";
import {InputLabel} from "./MainInput";

const InputLayoutComp = styledComponents.div`
    display: flex;
    flex-direction: column;
`

const InputLayout = ({label, name, children}) => {
    return(
        <InputLayoutComp>
             {
                label &&
                <div>
                    <InputLabel htmlFor={name}>{label.toUpperCase()}</InputLabel>
                </div>
            }
            {children}
        </InputLayoutComp>
    )
}

export default InputLayout;