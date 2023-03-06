// import LoginInput from "../inputs/LoginInput";
import DropdownInput from "../inputs/DropdownInput";
import MainInput from "../inputs/MainInput";
import SearchInput from "../inputs/SearchInput";


const FormikControl = ({ control, ...rest }) => {
    switch (control) {
        case "input":
            return <MainInput {...rest} />;
        case "textarea":
            return <textarea {...rest}/>;
        case "search":
            return <SearchInput {...rest}/>;
        case "select":
            return <DropdownInput {...rest}/>;
        default:
            return null;
    }
}

export default FormikControl;