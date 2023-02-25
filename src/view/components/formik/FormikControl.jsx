import SearchInput from "../inputs/SearchInput";

const FormikControl = ({ control, ...rest }) => {
    switch (control) {
        case "search":
            return <SearchInput {...rest}/>;
        default:
            return null;
    }
}

export default FormikControl;